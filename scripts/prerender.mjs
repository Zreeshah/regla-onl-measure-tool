import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BASE_URL, DEFAULT_IMAGE_PATH, LOGO_PATH, SITE_NAME, routes } from "./seo-routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const indexPath = path.join(distDir, "index.html");

const baseHtml = await readFile(indexPath, "utf8");

for (const route of routes) {
  const routeHtml = buildRouteHtml(route);
  const outputPath = route.path === "/"
    ? indexPath
    : path.join(distDir, route.path.slice(1), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, routeHtml);
}

await writeFile(
  path.join(distDir, "seo-routes.json"),
  JSON.stringify(routes.map(({ path: routePath, title, description }) => ({ path: routePath, title, description })), null, 2)
);

console.log(`Prerendered ${routes.length} SEO route shells.`);

function buildRouteHtml(route) {
  const cleanedHtml = removeManagedSeo(baseHtml);
  const headTags = buildHeadTags(route);
  const fallback = buildFallbackBody(route);

  return cleanedHtml
    .replace("</head>", `${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
}

function removeManagedSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(/\s*<meta\s+name=["'](?:description|keywords|twitter:card|twitter:title|twitter:description|twitter:image)["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<meta\s+property=["'](?:og:[^"']+|article:[^"']+)["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function buildHeadTags(route) {
  const canonical = canonicalUrl(route);
  const image = absoluteUrl(route.image || DEFAULT_IMAGE_PATH);
  const graph = buildStructuredData(route);
  const type = route.type === "article" ? "article" : "website";
  const published = route.published ? `${route.published}T00:00:00+00:00` : "";
  const modified = route.modified ? `${route.modified}T00:00:00+00:00` : "";

  return `
    <title data-rh="true">${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeAttr(route.description)}" data-rh="true" />
    <meta name="keywords" content="${escapeAttr(route.keywords || "")}" data-rh="true" />
    <link rel="canonical" href="${canonical}" data-rh="true" />
    <meta property="og:locale" content="es_ES" data-rh="true" />
    <meta property="og:site_name" content="${SITE_NAME}" data-rh="true" />
    <meta property="og:type" content="${type}" data-rh="true" />
    <meta property="og:title" content="${escapeAttr(route.title)}" data-rh="true" />
    <meta property="og:description" content="${escapeAttr(route.description)}" data-rh="true" />
    <meta property="og:url" content="${canonical}" data-rh="true" />
    <meta property="og:image" content="${image}" data-rh="true" />${route.type === "article" ? `
    <meta property="article:published_time" content="${published}" data-rh="true" />
    <meta property="article:modified_time" content="${modified}" data-rh="true" />` : ""}
    <meta name="twitter:card" content="summary_large_image" data-rh="true" />
    <meta name="twitter:title" content="${escapeAttr(route.title)}" data-rh="true" />
    <meta name="twitter:description" content="${escapeAttr(route.description)}" data-rh="true" />
    <meta name="twitter:image" content="${image}" data-rh="true" />
    <style data-seo-prerender>
      .seo-fallback{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#1f2937;max-width:960px;margin:0 auto;padding:32px 20px;line-height:1.65}
      .seo-fallback a{color:#7c5cf0;text-decoration:none}
      .seo-fallback a:hover{text-decoration:underline}
      .seo-fallback__brand{display:inline-flex;align-items:center;font-weight:800;font-size:1.25rem;margin-bottom:24px;color:#7c5cf0}
      .seo-fallback h1{font-size:clamp(2rem,5vw,3.5rem);line-height:1.1;margin:0 0 12px;color:#7c5cf0}
      .seo-fallback h2{font-size:1.5rem;margin:32px 0 10px;color:#7c5cf0}
      .seo-fallback p{margin:0 0 16px}
      .seo-fallback img{display:block;max-width:100%;height:auto;border-radius:8px;margin:24px auto}
      .seo-fallback__nav{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px;padding-top:20px;border-top:1px solid #e5e7eb}
      .seo-fallback__list{padding-left:22px;margin:0 0 18px}
      @media (max-width:640px){.seo-fallback{padding:24px 16px}.seo-fallback__nav{gap:10px}}
    </style>
    <script type="application/ld+json" data-seo-prerender>${escapeJsonScript(JSON.stringify(graph))}</script>`;
}

function buildFallbackBody(route) {
  const imagePath = route.image && !route.image.startsWith("http") ? route.image : "";
  const sections = route.sections
    .map(section => `
        <section>
          <h2>${escapeHtml(section.heading)}</h2>
          ${section.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ")}
        </section>`)
    .join("\n");

  const faq = route.faq ? `
        <section>
          <h2>Preguntas frecuentes</h2>
          ${route.faq.map(item => `
          <h3>${escapeHtml(item.question)}</h3>
          <p>${escapeHtml(item.answer)}</p>`).join("\n")}
        </section>` : "";

  return `
      <main class="seo-fallback" data-prerendered-seo>
        <a class="seo-fallback__brand" href="/">Regla.Onl</a>
        <article>
          <h1>${escapeHtml(route.h1)}</h1>
          <p>${escapeHtml(route.description)}</p>
          ${imagePath ? `<img src="${imagePath}" alt="${escapeAttr(route.h1)}" width="1024" loading="eager" />` : ""}
          ${sections}
          ${faq}
          ${route.type === "tool" ? buildToolSteps() : ""}
        </article>
        <nav class="seo-fallback__nav" aria-label="Enlaces principales">
          <a href="/">Regla online</a>
          <a href="/imprimir">Imprimir regla</a>
          <a href="/blog/como-usar-regla">Como usar una regla</a>
          <a href="/blog/sistema-metrico-decimal">Sistema metrico decimal</a>
          <a href="/blog/sistema-anglosajon-unidades">Sistema anglosajon</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </main>`;
}

function buildToolSteps() {
  return `
        <section>
          <h2>Como imprimir la regla correctamente</h2>
          <ol class="seo-fallback__list">
            <li>Abre la herramienta de impresion de Regla.Onl.</li>
            <li>Selecciona papel A4 y escala al 100%.</li>
            <li>Imprime la regla sin ajuste automatico de tamaño.</li>
            <li>Verifica la precision con una medida conocida.</li>
          </ol>
        </section>`;
}

function buildStructuredData(route) {
  const canonical = canonicalUrl(route);
  const image = absoluteUrl(route.image || DEFAULT_IMAGE_PATH);
  const breadcrumb = buildBreadcrumb(route);
  const graph = [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": SITE_NAME,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl(LOGO_PATH)
      }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "name": "Regla Online",
      "url": BASE_URL,
      "inLanguage": "es",
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      }
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      "url": canonical,
      "name": route.title,
      "description": route.description,
      "inLanguage": "es",
      "isPartOf": {
        "@id": `${BASE_URL}/#website`
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "breadcrumb": {
        "@id": `${canonical}#breadcrumb`
      },
      "dateModified": route.modified
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      "itemListElement": breadcrumb
    }
  ];

  if (route.image) {
    graph.push({
      "@type": "ImageObject",
      "@id": `${canonical}#primaryimage`,
      "url": image,
      "caption": route.h1
    });
  }

  if (route.type === "home") {
    graph.push({
      "@type": "WebApplication",
      "@id": `${canonical}#app`,
      "name": "Regla Online",
      "url": canonical,
      "description": route.description,
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "inLanguage": "es",
      "isAccessibleForFree": true,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Medicion en centimetros, milimetros y pulgadas",
        "Calibracion de pantalla",
        "Regla a tamaño real",
        "Compatible con movil, tableta y computadora"
      ],
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      }
    });
  }

  if (route.type === "tool") {
    graph.push({
      "@type": "HowTo",
      "@id": `${canonical}#howto`,
      "name": "Como imprimir una regla correctamente",
      "description": route.description,
      "inLanguage": "es",
      "step": [
        "Abre la pagina de imprimir regla.",
        "Selecciona papel A4.",
        "Imprime al 100% de escala.",
        "Verifica la medida antes de usarla."
      ].map((text, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "text": text
      }))
    });
  }

  if (route.type === "article") {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${canonical}#article`,
      "mainEntityOfPage": {
        "@id": `${canonical}#webpage`
      },
      "headline": route.h1,
      "description": route.description,
      "image": image,
      "author": {
        "@id": `${BASE_URL}/#organization`
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "datePublished": route.published,
      "dateModified": route.modified,
      "inLanguage": "es"
    });
  }

  if (route.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      "mainEntity": route.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function buildBreadcrumb(route) {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": `${BASE_URL}/`
    }
  ];

  if (route.path !== "/") {
    items.push({
      "@type": "ListItem",
      "position": items.length + 1,
      "name": route.h1,
      "item": canonicalUrl(route)
    });
  }

  return items;
}

function canonicalUrl(route) {
  return `${BASE_URL}${route.path === "/" ? "/" : route.path}`;
}

function absoluteUrl(value) {
  if (!value) return `${BASE_URL}${DEFAULT_IMAGE_PATH}`;
  if (/^https?:\/\//.test(value)) return value;
  return `${BASE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeJsonScript(value) {
  return value.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}
