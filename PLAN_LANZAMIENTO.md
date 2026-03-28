# PLAN DE LANZAMIENTO - Luca Martino Marca Personal

## Fecha: 28 de marzo 2026
## Estado: EN EJECUCION

---

## FASE 1: INFRAESTRUCTURA (Semana 1 - 28 mar al 4 abr)

### 1.1 Website (COMPLETADO)
- [x] Proyecto Next.js + Tailwind CSS + Supabase creado
- [x] Homepage con hero animado, servicios, credenciales, CTA
- [x] Pagina "Sobre Mi" con timeline profesional
- [x] Pagina "Servicios" con 5 ofertas paquetizadas
- [x] Pagina "Blog" con estructura de articulos
- [x] Formulario de contacto integrado con Supabase
- [x] Dashboard de marca personal con metricas
- [x] SEO tecnico: meta tags, Schema.org, sitemap, robots.txt
- [x] Pushed a GitHub: github.com/lmartino1106/LUCAMARTINOWEBSITE

### 1.2 Deploy en Vercel (PENDIENTE - TU)
1. Ve a https://vercel.com e inicia sesion con tu cuenta GitHub
2. Click "Add New" > "Project"
3. Importa el repo `lmartino1106/LUCAMARTINOWEBSITE`
4. En "Root Directory" pon: `website`
5. Agrega estas Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://tkkpjtoaubgqvcmtyzfm.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (tu anon key de Supabase)
   - `SUPABASE_SERVICE_ROLE_KEY` = (la service role key que ya tienes)
6. Click "Deploy"
7. Una vez desplegado, ve a Settings > Domains y agrega `lucamartino.cl`

### 1.3 Supabase (PENDIENTE - TU)
1. Ve a https://tkkpjtoaubgqvcmtyzfm.supabase.co
2. Abre el SQL Editor
3. Copia y pega el contenido de `website/src/lib/supabase-schema.sql`
4. Ejecuta el SQL - esto crea las tablas:
   - `contacts` - formulario de contacto
   - `page_views` - analytics
   - `content_posts` - pipeline de contenido
   - `brand_metrics` - metricas semanales
   - `seo_keywords` - tracking de keywords
   - `daily_prompts` - sistema de prompts diarios
5. Ve a Settings > API y copia tu `anon` key (la publica)
6. Actualiza `.env.local` con la anon key correcta

### 1.4 Dominio (PENDIENTE - TU)
- [ ] Registrar `lucamartino.cl` en NIC Chile (nic.cl) - cuesta ~$15.000 CLP/ano
- [ ] Alternativa: `lucamartinoabogado.cl`
- [ ] Configurar DNS apuntando a Vercel (instrucciones en Vercel > Domains)

---

## FASE 2: SEO Y POSICIONAMIENTO (Semana 1-2)

### 2.1 Google Search Console
1. Ve a https://search.google.com/search-console
2. Agrega tu dominio (lucamartino.cl)
3. Verifica con DNS TXT record
4. Sube el sitemap: `https://lucamartino.cl/sitemap.xml`

### 2.2 Google Business Profile
1. Ve a https://business.google.com
2. Crea perfil como "Consultor en tecnologia legal" o "Servicios de informatica"
3. Agrega:
   - Nombre: Luca Martino - Abogado & Developer
   - Categoria: Consultor de tecnologia de la informacion
   - Descripcion: detallada con keywords
   - Sitio web: lucamartino.cl
   - Horarios, telefono, email

### 2.3 Keywords objetivo (ya configurados en dashboard)
| Keyword | Volumen | Dificultad | Pagina target |
|---------|---------|------------|---------------|
| abogado legaltech chile | 110 | Baja | Homepage |
| automatizacion legal chile | 90 | Baja | Servicios |
| ia para abogados | 320 | Media | Blog |
| legal ops chile | 50 | Baja | Sobre Mi |
| software juridico chile | 210 | Media | Servicios |
| proteccion datos personales chile | 480 | Alta | Blog |

### 2.4 Estrategia de contenido SEO (Blog)
- 1 articulo largo (1500-2500 palabras) por semana
- Optimizado para un keyword especifico
- Schema.org Article markup
- Links internos entre paginas

---

## FASE 3: CONTENIDO Y LINKEDIN (Continuo)

### Sistema de Prompts Diarios
El dashboard tiene un tab "Prompts Diarios" donde cada dia de publicacion tienes:
- **Lunes**: Post EDUCATIVO (norma + tech)
- **Miercoles**: Post TUTORIAL / valor practico
- **Viernes**: Post OPINION / storytelling

### Como funciona el sistema:
1. Abres el dashboard > tab "Prompts Diarios"
2. Ves el prompt del dia con sugerencia de tema
3. TU decides que escribir basandote en el prompt
4. Puedes pedirme ayuda con: "Ayudame a escribir el post de hoy sobre [tema]"
5. Marcas como completado cuando publicas

### Flujo diario de contenido:
```
1. Revisa el prompt del dia en el dashboard
2. Decide el tema especifico
3. Pideme: "Escribe un post de LinkedIn tipo [educativo/tutorial/opinion] sobre [tema]"
4. Yo genero el borrador con estructura optimizada
5. Tu lo revisas, ajustas y publicas
6. Registra metricas en el dashboard
```

---

## FASE 4: META (FACEBOOK/INSTAGRAM) AUTOMATIZADO

### Configuracion inicial (PASOS PARA TI):

#### 4.1 Crear pagina de Facebook Business
1. Ve a facebook.com/pages/create
2. Nombre: "Luca Martino - Abogado & Developer"
3. Categoria: "Consultor de tecnologia" o "Abogado"
4. Completa toda la info (web, descripcion, contacto)
5. Sube foto de perfil profesional y banner

#### 4.2 Crear cuenta de Instagram Business
1. Crea @lucamartino.abogado (o similar disponible)
2. Conectalo a la pagina de Facebook
3. Cambia a cuenta Business/Professional
4. Completa bio:
   ```
   Abogado & Developer
   Automatizo estudios juridicos con IA
   Mejor rendimiento academico U. Mayor
   INCUBA UC | Ponente Internacional
   lucamartino.cl
   ```

#### 4.3 Meta Business Suite (AUTOMATIZACION)
1. Ve a https://business.facebook.com
2. Conecta tu pagina FB + Instagram
3. Usa el **Planificador de contenido**:
   - Programa posts con hasta 30 dias de anticipacion
   - Publica simultaneamente en FB + IG
   - Horarios optimos: 8-9 AM y 12-1 PM Chile

#### 4.4 Estrategia Meta (diferente a LinkedIn)
- **LinkedIn**: posts largos, profesionales, texto puro
- **Instagram**: carruseles visuales, reels cortos, stories
- **Facebook**: articulos compartidos, links al blog, videos

#### 4.5 Contenido para Meta (semanal)
| Dia | Instagram | Facebook |
|-----|-----------|----------|
| Lunes | Carrusel: tip legal-tech (3-5 slides) | Compartir post LinkedIn |
| Miercoles | Reel: demo rapida de automatizacion (30-60s) | Link a articulo del blog |
| Viernes | Story: reflexion / behind the scenes | Post de opinion |

#### 4.6 Herramientas de automatizacion Meta
- **Meta Business Suite** (gratis): programar posts FB + IG
- **Canva** (gratis/pro): crear carruseles e imagenes
- **CapCut** (gratis): editar reels rapidos
- **Later/Buffer** (opcional): programacion avanzada multi-plataforma

---

## FASE 5: EMBUDO DE CAPTACION (Semana 3-4)

### 5.1 Calendly
1. Crea cuenta en calendly.com
2. Configura evento "Diagnostico Digital Gratuito" (30 min)
3. Conecta con Google Calendar
4. Agrega el link en el formulario de contacto y el CTA de la web

### 5.2 Email de seguimiento
Despues de cada sesion de diagnostico:
1. Enviar PDF resumen (template a crear)
2. Seguimiento a los 3 dias
3. Seguimiento a los 7 dias
4. Propuesta personalizada

---

## CALENDARIO SEMANAL TIPO

| Dia | Accion principal | Plataforma |
|-----|------------------|------------|
| **Lunes** | Post educativo LinkedIn + Carrusel IG | LinkedIn + IG |
| **Martes** | 5 comentarios estrategicos + 10 conexiones | LinkedIn |
| **Miercoles** | Post tutorial LinkedIn + Reel/demo IG | LinkedIn + IG |
| **Jueves** | 5 comentarios + networking + responder DMs | LinkedIn |
| **Viernes** | Post opinion LinkedIn + Story IG | LinkedIn + IG |
| **Sabado** | Escribir articulo blog (SEO) | Blog |
| **Domingo** | Programar contenido Meta de la semana | Meta Business Suite |

---

## KPIs MENSUALES (en el Dashboard)

| Metrica | Mes 1 | Mes 3 | Mes 6 |
|---------|-------|-------|-------|
| Posts LinkedIn | 12 | 12 | 12 |
| Impresiones/post | 500 | 2,000 | 5,000 |
| Seguidores LinkedIn | +200 | +800 | +2,000 |
| Visitas web/mes | 100 | 500 | 2,000 |
| Formularios/mes | 5 | 15 | 30 |
| Diagnosticos agendados | 3 | 8 | 15 |
| Articulos blog | 4 | 12 | 24 |

---

## PROXIMOS PASOS INMEDIATOS (para ti)

1. **HOY**: Ejecutar el SQL de Supabase para crear las tablas
2. **HOY**: Deploy en Vercel (5 minutos)
3. **HOY/MANANA**: Registrar dominio lucamartino.cl
4. **SEMANA 1**: Crear cuentas Meta (FB Business + IG Business)
5. **SEMANA 1**: Configurar Google Search Console
6. **SEMANA 1**: Publicar primer post LinkedIn
7. **CADA DIA**: Abrir dashboard > ver prompt del dia > pedirme ayuda para escribir

---

## COMO TRABAJAMOS JUNTOS

Tu me dices cada dia lo que quieres hacer y yo te ayudo:

- **"Quiero escribir el post de hoy"** -> Te genero un borrador basado en el prompt del dia
- **"Necesito un articulo para el blog sobre [tema]"** -> Te escribo un articulo SEO optimizado
- **"Quiero crear un carrusel para Instagram sobre [tema]"** -> Te doy el contenido slide por slide
- **"Revisa mis metricas"** -> Analizamos el dashboard juntos
- **"Que deberia publicar esta semana?"** -> Te doy el plan de la semana
- **"Ayudame con el copy de [pagina/seccion]"** -> Lo escribimos juntos
