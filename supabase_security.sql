-- ============================================================================
-- 🛡️ SCRIPT DE BLINDAJE DE SEGURIDAD PARA SUPABASE (RLS & STORAGE)
-- ============================================================================
-- Proyecto: MercadoMotor (AutoVirtual)
-- Descripción: Este script habilita Row Level Security (RLS) en todas las
--              tablas críticas de la base de datos y configura políticas
--              estrictas en el almacenamiento (Supabase Storage) para evitar
--              manipulación, borrado de imágenes o filtración de datos.
--
-- Instrucciones de ejecución:
-- 1. Inicia sesión en el Dashboard de Supabase.
-- 2. Dirígete a la sección "SQL Editor" en el menú lateral izquierdo.
-- 3. Haz clic en "New Query".
-- 4. Copia y pega el contenido completo de este archivo.
-- 5. Haz clic en el botón "Run" para ejecutar las políticas.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. BLINDAJE DE LA BASE DE DATOS (TABLAS PÚBLICAS)
-- ----------------------------------------------------------------------------
-- Habilitamos Row Level Security (RLS) en todas las tablas administradas por Prisma.
-- Como Next.js se conecta usando la variable admin 'postgres' (Superuser), 
-- Prisma ignorará estas políticas y funcionará normalmente en el servidor.
-- Sin embargo, cualquier intento de consulta directa mediante la API REST de Supabase 
-- usando la clave pública (anon) o tokens vulnerados será totalmente bloqueado.

ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Vehicle" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Agency" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Branch" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Image" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Consultation" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Favorite" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Notification" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Advertisement" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Account" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Session" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "VerificationToken" ENABLE ROW LEVEL SECURITY;

-- Eliminamos políticas existentes para evitar duplicados si se re-ejecuta
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de User" ON "User";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Vehicle" ON "Vehicle";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Agency" ON "Agency";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Branch" ON "Branch";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Image" ON "Image";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Consultation" ON "Consultation";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Favorite" ON "Favorite";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Notification" ON "Notification";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Advertisement" ON "Advertisement";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Account" ON "Account";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de Session" ON "Session";
DROP POLICY IF EXISTS "Bloquear lectura y escritura directa de VerificationToken" ON "VerificationToken";

-- Creamos políticas por defecto vacías (o restrictivas) para bloquear el acceso de la API pública
-- Nota: En PostgreSQL/Supabase, si RLS está activo y no hay políticas creadas, por defecto se RECHAZAN todas las operaciones.
-- Sin embargo, es buena práctica explicitar políticas restrictivas para total claridad en las auditorías de seguridad:

CREATE POLICY "Bloquear lectura y escritura directa de User" ON "User" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Vehicle" ON "Vehicle" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Agency" ON "Agency" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Branch" ON "Branch" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Image" ON "Image" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Consultation" ON "Consultation" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Favorite" ON "Favorite" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Notification" ON "Notification" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Advertisement" ON "Advertisement" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Account" ON "Account" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de Session" ON "Session" FOR ALL USING (false);
CREATE POLICY "Bloquear lectura y escritura directa de VerificationToken" ON "VerificationToken" FOR ALL USING (false);


-- ----------------------------------------------------------------------------
-- 2. SEGURIDAD EN SUPABASE STORAGE (BUCKET: uploads)
-- ----------------------------------------------------------------------------
-- Configuración de políticas de seguridad para proteger las imágenes del sitio.
-- Evita que bots o usuarios maliciosos borren, sobrescriban o modifiquen imágenes.

-- Nos aseguramos de que el bucket 'uploads' esté creado y sea público para lectura
INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Eliminamos políticas viejas para el bucket 'uploads'
DROP POLICY IF EXISTS "Permitir descargas públicas de uploads" ON storage.objects;
DROP POLICY IF EXISTS "Permitir subidas de imágenes en uploads" ON storage.objects;
DROP POLICY IF EXISTS "Bloquear modificaciones no autorizadas en uploads" ON storage.objects;
DROP POLICY IF EXISTS "Bloquear borrado de imágenes en uploads" ON storage.objects;

-- A) POLÍTICA DE SELECCIÓN (Lectura): Cualquiera puede ver/descargar las imágenes públicas
CREATE POLICY "Permitir descargas públicas de uploads" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'uploads');

-- B) POLÍTICA DE INSERCIÓN (Escritura): Permite subir nuevas imágenes al bucket 'uploads'
-- Restringimos el tipo de archivo únicamente a formatos de imagen estándar.
CREATE POLICY "Permitir subidas de imágenes en uploads" ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'uploads' 
    AND (
      lower(storage.extension(name)) IN ('jpg', 'jpeg', 'png', 'webp', 'heic')
    )
  );

-- C) POLÍTICAS DE ACTUALIZACIÓN Y BORRADO (Update/Delete): Totalmente bloqueados para clientes públicos
-- Únicamente el dueño de la base de datos (Postgres/Admin) o el backend de Next.js con permisos
-- de bypass pueden realizar estas tareas. Un usuario normal no puede borrar ni modificar nada de forma directa.
CREATE POLICY "Bloquear modificaciones no autorizadas en uploads" ON storage.objects
  FOR UPDATE
  USING (false);

CREATE POLICY "Bloquear borrado de imágenes en uploads" ON storage.objects
  FOR DELETE
  USING (false);

-- ============================================================================
-- SCRIPT COMPLETADO CON ÉXITO
-- ============================================================================
