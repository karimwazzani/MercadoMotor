import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import AdminMetricsClient from "./AdminMetricsClient";

export default async function AdminMetricsPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    redirect("/");
  }

  // Carga de datos masiva en paralelo para velocidad óptima
  const [
    // Tráfico & Telemetría General
    totalPageViews,
    uniqueVisitorsResult,
    deviceTypeResult,
    referrerResult,
    pagePathResult,
    dailyTrafficResult,

    // Publicaciones & Inventario
    totalVehicles,
    activeVehicles,
    rejectedVehicles,
    pausedVehicles,
    soldVehicles,
    categoryResult,
    conditionResult,
    brandResult,
    modelResult,
    priceMetricsResult,
    highlightedVehicles,
    priceDropsCount,

    // Usuarios & Cuentas
    totalUsers,
    usersByTypeResult,
    agenciesResult,

    // Leads & Conversión
    vehicleSumStats,
    totalConsultations,
    totalFavorites,

    // Anuncios & Publicidad
    allAds,

    // Auditoría de DB (Row Counts)
    branchCount,
    imageCount,
    notificationCount
  ] = await Promise.all([
    // 1. Telemetría de Tráfico
    prisma.pageVisit.count(),
    prisma.pageVisit.groupBy({
      by: ["ipHash"],
    }),
    prisma.pageVisit.groupBy({
      by: ["userAgent"],
      _count: { id: true },
    }),
    prisma.pageVisit.groupBy({
      by: ["referrer"],
      _count: { id: true },
    }),
    prisma.pageVisit.groupBy({
      by: ["path"],
      _count: { id: true },
    }),
    // Tráfico de los últimos 30 días para evolución temporal
    prisma.pageVisit.findMany({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
      select: { createdAt: true },
    }),

    // 2. Publicaciones
    prisma.vehicle.count(),
    prisma.vehicle.count({ where: { status: "APPROVED" } }),
    prisma.vehicle.count({ where: { status: "REJECTED" } }),
    prisma.vehicle.count({ where: { status: "PAUSED" } }),
    prisma.vehicle.findMany({
      where: { status: "SOLD" },
      select: { createdAt: true, finishedAt: true, endReason: true, price: true, currency: true, category: true },
    }),
    prisma.vehicle.groupBy({
      by: ["category"],
      _count: { id: true },
    }),
    prisma.vehicle.groupBy({
      by: ["condition"],
      _count: { id: true },
    }),
    prisma.vehicle.groupBy({
      by: ["brand"],
      _count: { id: true },
    }),
    prisma.vehicle.groupBy({
      by: ["brand", "model"],
      _count: { id: true },
    }),
    prisma.vehicle.groupBy({
      by: ["currency"],
      _avg: { price: true },
      _sum: { price: true },
      where: { status: "APPROVED" }
    }),
    prisma.vehicle.count({ where: { isHighlighted: true, status: "APPROVED" } }),
    prisma.vehicle.count({
      where: {
        status: "APPROVED",
        previousPrice: { not: null },
        price: { lt: prisma.vehicle.fields.previousPrice }
      }
    }),

    // 3. Usuarios & Agencias
    prisma.user.count(),
    prisma.user.groupBy({
      by: ["accountType"],
      _count: { id: true },
    }),
    prisma.agency.findMany({
      select: { status: true, createdAt: true },
    }),

    // 4. Leads & Clicks
    prisma.vehicle.aggregate({
      _sum: {
        views: true,
        whatsappClicks: true,
        phoneClicks: true,
      },
    }),
    prisma.consultation.count(),
    prisma.favorite.count(),

    // 5. Publicidad
    prisma.advertisement.findMany(),

    // 6. DB Row Counts
    prisma.branch.count(),
    prisma.image.count(),
    prisma.notification.count()
  ]);

  // FORMATEAR Y ORDENAR DATOS EN MEMORIA (Seguridad y Compatibilidad)
  
  // Visitantes únicos reales (basados en hashing IP)
  const uniqueVisitors = uniqueVisitorsResult.length;

  // Dispositivos (User Agent)
  const devices = deviceTypeResult.map(d => ({
    name: d.userAgent || "Escritorio",
    count: d._count.id,
  }));

  // Orígenes de tráfico
  const referrers = referrerResult
    .map(r => ({
      name: r.referrer || "Directo",
      count: r._count.id,
    }))
    .sort((a, b) => b.count - a.count);

  // Páginas más visitadas
  const pagePaths = pagePathResult
    .map(p => ({
      path: p.path,
      count: p._count.id,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Categorías de vehículos
  const categories = categoryResult.map(c => ({
    category: c.category,
    count: c._count.id,
  }));

  // Condición
  const conditions = conditionResult.map(c => ({
    condition: c.condition,
    count: c._count.id,
  }));

  // Marcas Top
  const topBrands = brandResult
    .map(b => ({
      brand: b.brand,
      count: b._count.id,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Modelos Top
  const topModels = modelResult
    .map(m => ({
      name: `${m.brand} ${m.model}`,
      count: m._count.id,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Usuarios agrupados por tipo
  const usersByType = usersByTypeResult.map(u => ({
    type: u.accountType,
    count: u._count.id,
  }));

  // Promedio de precios y valor total de inventario
  const pricesByCurrency = priceMetricsResult.map(p => ({
    currency: p.currency,
    average: p._avg.price || 0,
    totalValue: p._sum.price || 0
  }));

  // Consolidar datos de analítica de tráfico de 30 días en intervalos diarios
  const trafficByDay: { [key: string]: number } = {};
  dailyTrafficResult.forEach(pv => {
    const dayStr = pv.createdAt.toISOString().split("T")[0]; // YYYY-MM-DD
    trafficByDay[dayStr] = (trafficByDay[dayStr] || 0) + 1;
  });

  // Ordenar fechas cronológicamente
  const dailyTrafficSorted = Object.keys(trafficByDay)
    .sort()
    .map(day => ({
      date: day.substring(5), // MM-DD para legibilidad
      views: trafficByDay[day],
    }))
    .slice(-15); // Mostrar los últimos 15 días activos

  return (
    <div className={styles.adminPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
              <span className={styles.badge}>ADMIN</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/admin" className={styles.navLink}>Dashboard Principal</Link>
            <Link href="/admin/agencies" className={styles.navLink}>Gestión de Agencias</Link>
            <Link href="/admin/ads" className={styles.navLink}>Gestión de Publicidad</Link>
            <Link href="/" className={styles.navLink}>Sitio Público</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div className={styles.titleRow}>
          <div>
            <h1 className={styles.title}>Estadísticas y KPIs Avanzados</h1>
            <p className={styles.subtitle}>
              Análisis completo de tráfico web, rotación de stock, interacción de usuarios y telemetría de ventas.
            </p>
          </div>
          <span className={styles.liveBadge}>● LIVE TELEMETRY</span>
        </div>

        {/* CLIENT COMPONENT FOR TABS, METRICS & INTERACTIVE SVG CHARTS */}
        <AdminMetricsClient
          trafficData={{
            totalPageViews,
            uniqueVisitors,
            devices,
            referrers,
            pagePaths,
            dailyTraffic: dailyTrafficSorted,
          }}
          publicationsData={{
            totalVehicles,
            activeVehicles,
            rejectedVehicles,
            pausedVehicles,
            soldVehiclesCount: soldVehicles.length,
            categories,
            conditions,
            topBrands,
            topModels,
            pricesByCurrency,
            highlightedVehicles,
            priceDropsCount,
            soldVehiclesDetails: soldVehicles
          }}
          usersData={{
            totalUsers,
            usersByType,
            totalAgencies: agenciesResult.length,
            approvedAgencies: agenciesResult.filter(a => a.status === "APPROVED").length,
            pendingAgencies: agenciesResult.filter(a => a.status === "PENDING").length,
          }}
          leadsData={{
            views: vehicleSumStats._sum.views || 0,
            whatsappClicks: vehicleSumStats._sum.whatsappClicks || 0,
            phoneClicks: vehicleSumStats._sum.phoneClicks || 0,
            totalConsultations,
            totalFavorites,
          }}
          adsData={{
            allAds,
          }}
          dbAuditData={{
            counts: {
              users: totalUsers,
              vehicles: totalVehicles,
              agencies: agenciesResult.length,
              branches: branchCount,
              images: imageCount,
              favorites: totalFavorites,
              consultations: totalConsultations,
              notifications: notificationCount,
              pageVisits: totalPageViews,
              advertisements: allAds.length,
            }
          }}
        />
      </main>
    </div>
  );
}
