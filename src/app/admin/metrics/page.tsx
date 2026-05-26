import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import AdminMetricsClient from "./AdminMetricsClient";

interface PageProps {
  searchParams: Promise<{
    period?: string;
    start?: string;
    end?: string;
  }>;
}

export default async function AdminMetricsPage({ searchParams }: PageProps) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    redirect("/");
  }

  const resolvedParams = await searchParams;

  // 1. CÁLCULO DE RANGOS DE FECHA EN SERVIDOR (Next.js SSR Params)
  const period = resolvedParams.period || "30days";
  let startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 días por defecto
  let endDate = new Date();
  let periodLabel = "Últimos 30 días";
  
  const now = new Date();

  if (period === "today") {
    startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    startDate.setHours(0, 0, 0, 0);
    periodLabel = "Hoy (24hs)";
  } else if (period === "yesterday") {
    startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    startDate.setHours(0, 0, 0, 0);
    endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    endDate.setHours(0, 0, 0, 0);
    periodLabel = "Ayer (Período completo)";
  } else if (period === "7days") {
    startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    periodLabel = "Últimos 7 días";
  } else if (period === "15days") {
    startDate = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
    periodLabel = "Últimos 15 días";
  } else if (period === "30days") {
    startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    periodLabel = "Últimos 30 días";
  } else if (period === "6months") {
    startDate = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000);
    periodLabel = "Últimos 6 meses";
  } else if (period === "1year") {
    startDate = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    periodLabel = "Último año";
  } else if (period === "all") {
    startDate = new Date(0); // Desde el principio de los tiempos
    periodLabel = "Histórico (Todo el tiempo)";
  } else if (period === "custom" && resolvedParams.start) {
    startDate = new Date(resolvedParams.start);
    startDate.setHours(0, 0, 0, 0);
    if (resolvedParams.end) {
      endDate = new Date(resolvedParams.end);
      endDate.setHours(23, 59, 59, 999);
    }
    periodLabel = `Personalizado (${startDate.toLocaleDateString("es-AR")} - ${endDate.toLocaleDateString("es-AR")})`;
  }

  // Objeto base para filtros de fecha
  const dateFilter = {
    createdAt: {
      gte: startDate,
      lte: endDate,
    },
  };

  // Carga de datos paralela súper optimizada aplicando filtros temporales reales
  const [
    // --- 1. TELEMETRÍA DE TRÁFICO EN EL PERÍODO ---
    totalPageViews,
    uniqueVisitorsResult,
    deviceTypeResult,
    referrerResult,
    pagePathResult,
    trafficForChart,

    // --- 2. PUBLICACIONES (NUEVAS & VENTAS EN EL PERÍODO) ---
    totalVehiclesCreated, // Vehículos creados en el período
    activeStockCount,     // Conteo estático: cuántos autos hay aprobados HOY en catálogo
    rejectedCount,        // Conteo del período
    pausedCount,          // Conteo del período
    soldVehiclesInPeriod, // Autos vendidos en el período
    categoryResult,       // Categorías de autos creados en el período
    conditionResult,      // Condición de autos creados en el período
    brandResult,          // Marcas de autos creados en el período
    modelResult,          // Modelos de autos creados en el período
    priceMetricsResult,   // Precios promedio del stock activo hoy
    highlightedCount,     // Destacados activos hoy (histórico)
    priceDropsCount,      // Rebajas activas hoy (histórico)

    // --- 3. USUARIOS EN EL PERÍODO ---
    totalUsersCreated,
    usersByTypeResult,
    agenciesResult,

    // --- 4. LEADS & CONVERSIÓN EN EL PERÍODO ---
    totalConsultations,
    totalFavoritesCreated,
    vehicleClicksSum,     // Clicks e impresiones acumulados de todo el catálogo (Lifetime)

    // --- 5. PUBLICIDAD BANNER ---
    allAds,

    // --- 6. AUDITORÍA FÍSICA DE DB (ROW COUNTS HISTÓRICOS GENERALES) ---
    dbCounts
  ] = await Promise.all([
    // Tráfico filtrado por fecha
    prisma.pageVisit.count({ where: dateFilter }),
    prisma.pageVisit.groupBy({
      by: ["ipHash"],
      where: dateFilter
    }),
    prisma.pageVisit.groupBy({
      by: ["userAgent"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.pageVisit.groupBy({
      by: ["referrer"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.pageVisit.groupBy({
      by: ["path"],
      _count: { id: true },
      where: dateFilter
    }),
    // Tráfico crudo para armar la evolución dinámica
    prisma.pageVisit.findMany({
      where: dateFilter,
      select: { createdAt: true },
    }),

    // Publicaciones en el período
    prisma.vehicle.count({ where: dateFilter }),
    prisma.vehicle.count({ where: { status: "APPROVED" } }), // Histórico activo hoy
    prisma.vehicle.count({ where: { status: "REJECTED", ...dateFilter } }),
    prisma.vehicle.count({ where: { status: "PAUSED", ...dateFilter } }),
    prisma.vehicle.findMany({
      where: { 
        status: "SOLD",
        finishedAt: { gte: startDate, lte: endDate } // Ventas cerradas en este período
      },
      select: { createdAt: true, finishedAt: true, endReason: true, price: true, currency: true, category: true },
    }),
    prisma.vehicle.groupBy({
      by: ["category"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.vehicle.groupBy({
      by: ["condition"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.vehicle.groupBy({
      by: ["brand"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.vehicle.groupBy({
      by: ["brand", "model"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.vehicle.groupBy({
      by: ["currency"],
      _avg: { price: true },
      _sum: { price: true },
      where: { status: "APPROVED" } // Estadísticas de precios globales del stock hoy
    }),
    prisma.vehicle.count({ where: { isHighlighted: true, status: "APPROVED" } }), // Histórico activo hoy
    prisma.vehicle.count({
      where: {
        status: "APPROVED",
        previousPrice: { not: null },
        price: { lt: prisma.vehicle.fields.previousPrice }
      }
    }), // Histórico activo hoy

    // Usuarios y Agencias en el período
    prisma.user.count({ where: dateFilter }),
    prisma.user.groupBy({
      by: ["accountType"],
      _count: { id: true },
      where: dateFilter
    }),
    prisma.agency.findMany({
      where: dateFilter,
      select: { status: true, createdAt: true },
    }),

    // Leads & Clics en el período
    prisma.consultation.count({ where: dateFilter }),
    prisma.favorite.count({ where: dateFilter }),
    prisma.vehicle.aggregate({
      _sum: {
        views: true,
        whatsappClicks: true,
        phoneClicks: true,
      },
    }), // Histórico acumulado

    // Publicidad
    prisma.advertisement.findMany(),

    // Auditoría de DB (Conteos Históricos de Fila Generales)
    Promise.all([
      prisma.user.count(),
      prisma.vehicle.count(),
      prisma.agency.count(),
      prisma.branch.count(),
      prisma.image.count(),
      prisma.favorite.count(),
      prisma.consultation.count(),
      prisma.notification.count(),
      prisma.pageVisit.count(),
      prisma.advertisement.count()
    ])
  ]);

  // 2. FORMATEO Y AGRUPACIÓN DE MÉTRICAS FILTRADAS

  const uniqueVisitors = uniqueVisitorsResult.length;

  const devices = deviceTypeResult.map(d => ({
    name: d.userAgent || "Escritorio",
    count: d._count.id,
  }));

  const referrers = referrerResult
    .map(r => ({
      name: r.referrer || "Directo",
      count: r._count.id,
    }))
    .sort((a, b) => b.count - a.count);

  const pagePaths = pagePathResult
    .map(p => ({
      path: p.path,
      count: p._count.id,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const categories = categoryResult.map(c => ({
    category: c.category,
    count: c._count.id,
  }));

  const conditions = conditionResult.map(c => ({
    condition: c.condition,
    count: c._count.id,
  }));

  const topBrands = brandResult
    .map(b => ({
      brand: b.brand,
      count: b._count.id,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const topModels = modelResult
    .map(m => ({
      name: `${m.brand} ${m.model}`,
      count: m._count.id,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const usersByType = usersByTypeResult.map(u => ({
    type: u.accountType,
    count: u._count.id,
  }));

  const pricesByCurrency = priceMetricsResult.map(p => ({
    currency: p.currency,
    average: p._avg.price || 0,
    totalValue: p._sum.price || 0
  }));

  // 3. AGRUPACIÓN DINÁMICA DE TRÁFICO PARA EL GRÁFICO SVG
  // Si filtramos hoy/ayer: agrupamos por hora
  // Si filtramos 6 meses / 1 año / histórico: agrupamos por mes
  // Si filtramos 7/15/30 días: agrupamos por día (MM-DD)
  const trafficByInterval: { [key: string]: number } = {};
  
  trafficForChart.forEach(pv => {
    const dateObj = new Date(pv.createdAt);
    let intervalStr = "";
    
    if (period === "today" || period === "yesterday") {
      intervalStr = `${dateObj.getHours().toString().padStart(2, "0")}:00`;
    } else if (period === "6months" || period === "1year" || period === "all") {
      intervalStr = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, "0")}`;
    } else {
      intervalStr = `${(dateObj.getMonth() + 1).toString().padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")}`;
    }
    
    trafficByInterval[intervalStr] = (trafficByInterval[intervalStr] || 0) + 1;
  });

  const dailyTrafficSorted = Object.keys(trafficByInterval)
    .sort()
    .map(interval => ({
      date: interval,
      views: trafficByInterval[interval],
    }));

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
              Telemetría interactiva del portal. Rango activo: <strong style={{ color: "var(--color-primary)" }}>{periodLabel}</strong>
            </p>
          </div>
          <span className={styles.liveBadge}>● LIVE TELEMETRY</span>
        </div>

        {/* CLIENT DASHBOARD CON FILTROS INTEGRADOS Y SELECCIONADOR DE FECHAS */}
        <AdminMetricsClient
          currentPeriod={{
            period,
            start: resolvedParams.start || "",
            end: resolvedParams.end || "",
            label: periodLabel
          }}
          trafficData={{
            totalPageViews,
            uniqueVisitors,
            devices,
            referrers,
            pagePaths,
            dailyTraffic: dailyTrafficSorted,
          }}
          publicationsData={{
            totalVehicles: totalVehiclesCreated, // Creados en el período
            activeVehicles: activeStockCount,     // Snapshot actual (Histórico público)
            rejectedVehicles: rejectedCount,
            pausedVehicles: pausedCount,
            soldVehiclesCount: soldVehiclesInPeriod.length, // Ventas del período
            categories,
            conditions,
            topBrands,
            topModels,
            pricesByCurrency,
            highlightedVehicles: highlightedCount,
            priceDropsCount,
            soldVehiclesDetails: soldVehiclesInPeriod
          }}
          usersData={{
            totalUsers: totalUsersCreated, // Creados en el período
            usersByType,
            totalAgencies: agenciesResult.length,
            approvedAgencies: agenciesResult.filter(a => a.status === "APPROVED").length,
            pendingAgencies: agenciesResult.filter(a => a.status === "PENDING").length,
          }}
          leadsData={{
            views: vehicleClicksSum._sum.views || 0, // Acumulado
            whatsappClicks: vehicleClicksSum._sum.whatsappClicks || 0, // Acumulado
            phoneClicks: vehicleClicksSum._sum.phoneClicks || 0, // Acumulado
            totalConsultations, // Consultas en el período
            totalFavorites: totalFavoritesCreated, // Favoritos en el período
          }}
          adsData={{
            allAds,
          }}
          dbAuditData={{
            counts: {
              users: dbCounts[0],
              vehicles: dbCounts[1],
              agencies: dbCounts[2],
              branches: dbCounts[3],
              images: dbCounts[4],
              favorites: dbCounts[5],
              consultations: dbCounts[6],
              notifications: dbCounts[7],
              pageVisits: dbCounts[8],
              advertisements: dbCounts[9],
            }
          }}
        />
      </main>
    </div>
  );
}
