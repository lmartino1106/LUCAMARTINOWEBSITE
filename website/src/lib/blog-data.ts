export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  pillar: "Tutorial" | "Educativo" | "Opinión";
  date: string;
  readTime: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "5-tareas-que-todo-abogado-deberia-automatizar",
    title: "5 tareas que todo abogado debería automatizar hoy",
    excerpt:
      "Los abogados pierden hasta un 40% de su tiempo en tareas repetitivas. Aquí te muestro cuáles puedes eliminar ahora mismo.",
    pillar: "Tutorial",
    date: "2026-03-28",
    readTime: "5 min",
    content: `
## El problema: abogados haciendo trabajo de máquina

Según un estudio de Thomson Reuters (2024), los abogados dedican en promedio un **40% de su jornada laboral** a tareas administrativas y repetitivas. En Chile, donde los estudios pequeños y medianos operan con equipos reducidos, ese porcentaje puede ser incluso mayor.

La buena noticia: la mayoría de esas tareas **se pueden automatizar hoy**, sin necesidad de ser programador ni invertir fortunas en software.

## 1. Seguimiento de plazos judiciales

El clásico: revisar la tabla de la Corte, cruzar con tus causas, anotar en el calendario. Cada semana, lo mismo.

**Solución:** Un script que consulte la Oficina Judicial Virtual (OJV), filtre tus causas por RIT y te envíe un resumen por email o WhatsApp cada lunes. Yo construí exactamente esto — [RoboTabla](/servicios) revisa la tabla semanal de la corte y te avisa qué causas tienes agendadas.

**Impacto:** De 45 minutos semanales a 0. Cero revisión manual.

## 2. Redacción de escritos rutinarios

Contestaciones de demanda, solicitudes de alzamiento, oficios de rutina. Todos siguen una estructura predecible.

**Solución:** Plantillas inteligentes con IA generativa. Usas un formulario donde ingresas los datos del caso (partes, RIT, hechos clave) y el sistema genera un primer borrador en segundos. Tú revisas, ajustas y firmas.

**Herramientas:** Claude o GPT con prompts especializados, o un sistema propio con plantillas legales chilenas.

**Impacto:** Reducción del 60-70% en tiempo de redacción de escritos estándar.

## 3. Gestión de documentos y expedientes

Buscar un contrato en una carpeta compartida llena de archivos con nombres como "doc_final_v3_DEFINITIVO(2).docx". Suena familiar, ¿no?

**Solución:** Un sistema de gestión documental con búsqueda semántica. Subes tus documentos y buscas por contenido, no por nombre de archivo. "Buscar cláusula de confidencialidad en contratos de 2025" y listo.

**Herramientas:** Supabase + embeddings de IA para búsqueda semántica sobre tus propios documentos.

**Impacto:** De 15 minutos buscando a 15 segundos encontrando.

## 4. Respuestas iniciales a consultas de clientes

El 80% de las consultas que llegan por email o formulario web son preguntas frecuentes: "¿Cuánto cobra?", "¿Ven casos de familia?", "¿Cómo agendo una reunión?".

**Solución:** Un chatbot o sistema de respuestas automáticas que filtre y responda las consultas estándar, y escale al abogado solo los casos que requieren atención personalizada.

**Herramientas:** Bot de Telegram/WhatsApp con base de conocimiento del estudio, o un formulario inteligente en tu sitio web que pre-clasifica los casos.

**Impacto:** Reduces un 70% las interacciones manuales de primer contacto.

## 5. Generación de reportes para clientes

Actualizar al cliente sobre el estado de su causa: buscar en el sistema, redactar el email, enviarlo. Multiplicado por 20, 50 o 100 causas activas.

**Solución:** Reportes automáticos periódicos. El sistema revisa el estado de las causas en la OJV, genera un resumen en lenguaje simple y lo envía al cliente por email con copia al abogado.

**Impacto:** Clientes informados sin esfuerzo manual. Mejor percepción del servicio.

## El denominador común

Todas estas automatizaciones comparten algo: **no reemplazan al abogado**. Reemplazan la parte mecánica del trabajo para que puedas dedicar tu tiempo a lo que realmente importa: la estrategia legal, la atención al cliente y el ejercicio del criterio profesional.

Si quieres saber cuáles de estas automatizaciones aplican a tu estudio, puedes [agendar un diagnóstico digital gratuito](/contacto). En 30 minutos identificamos qué procesos puedes optimizar primero.
`,
  },
  {
    slug: "ley-21719-proteccion-datos-que-preparar",
    title: "Ley 21.719 de Datos Personales: lo que tu estudio debe preparar",
    excerpt:
      "La nueva ley de protección de datos entra en vigencia en diciembre 2026. Esto es lo que necesitas saber y hacer.",
    pillar: "Educativo",
    date: "2026-03-31",
    readTime: "7 min",
    content: `
## Chile actualiza sus reglas del juego en datos personales

La Ley 21.719, publicada en diciembre de 2024, moderniza completamente la protección de datos personales en Chile. Reemplaza la Ley 19.628 — que tenía más de 25 años — y se alinea con estándares internacionales como el GDPR europeo.

**Fecha clave:** La ley entra en plena vigencia en **diciembre de 2026**. Eso significa que los estudios jurídicos tienen menos de un año para adecuarse.

## ¿Por qué debería importarle a un estudio jurídico?

Porque los abogados son **responsables del tratamiento de datos personales** de sus clientes. Cada expediente judicial, cada contrato, cada base de datos de clientes contiene datos protegidos por esta ley.

Y las sanciones no son menores: multas de hasta **10.000 UTM** (más de $600 millones CLP) para infracciones gravísimas.

## Los 5 cambios principales que debes conocer

### 1. Nuevas bases de licitud

Ya no basta con tener los datos. Necesitas una **base legal** para tratarlos: consentimiento, ejecución contractual, interés legítimo, obligación legal, entre otras. Los estudios deben mapear qué datos tratan y bajo qué base legal.

### 2. Derechos ARCO reforzados

Los titulares ahora pueden ejercer con más fuerza sus derechos de:
- **A**cceso: saber qué datos tienes de ellos
- **R**ectificación: corregir datos inexactos
- **C**ancelación: pedir que elimines sus datos
- **O**posición: negarse al tratamiento

Tu estudio necesita un procedimiento claro para responder a estas solicitudes dentro de los plazos legales.

### 3. Agencia de Protección de Datos Personales

Se crea una autoridad fiscalizadora autónoma (similar a la Agencia Española de Protección de Datos). Esta agencia tendrá facultades para:
- Investigar de oficio
- Aplicar sanciones
- Dictar instrucciones generales
- Resolver reclamos de titulares

### 4. Evaluaciones de impacto

Para tratamientos de alto riesgo (datos sensibles, perfilamiento, tratamiento masivo), será obligatorio realizar una **Evaluación de Impacto en la Protección de Datos (EIPD)** antes de iniciar el tratamiento.

### 5. Notificación de brechas de seguridad

Si sufres una filtración de datos, debes notificar a la Agencia y a los afectados dentro de plazos específicos. Ya no se puede "esconder" un incidente de seguridad.

## Plan de acción para tu estudio jurídico

### Fase 1: Diagnóstico (ahora → junio 2026)

- **Inventario de datos**: ¿Qué datos personales tratas? ¿De quiénes? ¿Dónde los almacenas?
- **Mapeo de flujos**: ¿Quién accede a esos datos? ¿Los compartes con terceros?
- **Evaluación de riesgos**: ¿Qué pasa si se filtran? ¿Tienes datos sensibles?

### Fase 2: Adecuación (junio → octubre 2026)

- **Política de privacidad** actualizada para tu sitio web y servicios
- **Cláusulas contractuales** revisadas con clientes y proveedores
- **Protocolo ARCO** para atender solicitudes de titulares
- **Medidas de seguridad** técnicas: cifrado, control de acceso, backups
- **Registro de actividades de tratamiento**

### Fase 3: Implementación (octubre → diciembre 2026)

- **Capacitación** del equipo en protección de datos
- **Plan de respuesta** ante incidentes de seguridad
- **Designación de encargado** de protección de datos (si aplica)
- **Auditoría interna** antes de la entrada en vigencia

## La tecnología como aliada del compliance

Un sistema bien diseñado puede facilitar todo esto:

- **Base de datos estructurada** que registre el consentimiento y la base legal de cada dato
- **Control de acceso** granular por usuario y rol
- **Logs de auditoría** que registren quién accedió a qué dato y cuándo
- **Automatización** de respuestas ARCO con plazos y alertas
- **Cifrado** de datos en reposo y en tránsito

No es ciencia ficción — es infraestructura básica que cualquier estudio puede implementar con las herramientas correctas.

## Conclusión

La Ley 21.719 no es solo una obligación regulatoria. Es una oportunidad para profesionalizar la gestión de datos de tu estudio y diferenciarte como un abogado que toma en serio la privacidad de sus clientes.

¿Necesitas ayuda para adecuar tu estudio? [Agenda un diagnóstico gratuito](/contacto) y evaluamos juntos tu situación actual.
`,
  },
  {
    slug: "ia-para-redactar-escritos-judiciales",
    title:
      "Cómo usar IA para redactar el primer borrador de un escrito judicial",
    excerpt:
      "Guía paso a paso para utilizar inteligencia artificial como herramienta de apoyo en la redacción legal.",
    pillar: "Tutorial",
    date: "2026-04-02",
    readTime: "8 min",
    content: `
## Disclaimer necesario

La IA **no reemplaza al abogado**. Lo que hace es generar un primer borrador que tú revisas, ajustas y firmas. El criterio jurídico, la estrategia procesal y la responsabilidad profesional siguen siendo tuyas.

Dicho esto, la IA puede ahorrarte horas de trabajo en la redacción inicial. Aquí te explico cómo hacerlo bien.

## ¿Qué tipo de escritos funcionan mejor con IA?

La IA es más útil en escritos que siguen una **estructura predecible**:

- Contestaciones de demanda
- Solicitudes de medidas cautelares
- Recursos de protección (estructura estándar)
- Escritos de trámite (desarchivos, oficios, certificaciones)
- Minutas de alegatos

Para escritos altamente estratégicos o creativos (como un recurso de nulidad con argumentos novedosos), la IA sirve como punto de partida, pero el valor está en tu análisis.

## Paso 1: Prepara el contexto

El error más común es pedirle a la IA "escríbeme una contestación de demanda" sin darle contexto. Eso genera texto genérico e inservible.

**Lo que necesitas preparar:**

- **Tipo de procedimiento** (ordinario civil, laboral monitorio, familia, etc.)
- **Tribunal y RIT/RUC**
- **Hechos relevantes** del caso (resumen de la demanda y tu versión)
- **Normas aplicables** que quieres invocar
- **Estrategia procesal** (negar los hechos, oponer excepciones, reconvenir, etc.)

## Paso 2: Estructura tu prompt

Un buen prompt para redacción legal tiene esta estructura:

\`\`\`
ROL: Eres un abogado litigante chileno especializado en [materia].

CONTEXTO:
- Procedimiento: [tipo]
- Tribunal: [nombre] - RIT [número]
- Demandante: [nombre], representado por [abogado]
- Demandado: [mi cliente]
- Hechos de la demanda: [resumen]
- Mi posición: [estrategia]

TAREA: Redacta [tipo de escrito] con la siguiente estructura:
1. Suma y datos de ingreso
2. Sección "En lo principal" con [contenido específico]
3. Fundamentos de hecho
4. Fundamentos de derecho (citar artículos específicos de [ley])
5. Petitorio concreto

FORMATO: Usa el formato estándar de escritos judiciales chilenos.
Cita normas con artículo, inciso y cuerpo legal completo.
\`\`\`

## Paso 3: Itera y refina

El primer resultado nunca es perfecto. Usa estas técnicas:

- **"Amplía la sección de fundamentos de derecho"** — si quedó corta
- **"Agrega jurisprudencia reciente sobre [tema]"** — pero verifica que exista
- **"Cambia el tono a más formal / más agresivo"** — según tu estrategia
- **"Reformula el petitorio para incluir [pretensión adicional]"** — para ajustar

## Paso 4: Revisión humana (no negociable)

Antes de firmar, verifica siempre:

- [ ] **Normas citadas**: ¿Existen? ¿Están vigentes? ¿El artículo dice lo que el texto afirma?
- [ ] **Jurisprudencia**: La IA puede inventar sentencias. Verifica cada ROL citado en VLEX o el buscador del Poder Judicial.
- [ ] **Hechos**: ¿Son consistentes con lo que dice el expediente?
- [ ] **Plazos**: ¿El escrito se presenta dentro de plazo?
- [ ] **Formato**: ¿Cumple con los requisitos formales del tribunal?
- [ ] **Estrategia**: ¿El escrito sirve a tu estrategia general del caso?

## Herramientas recomendadas

| Herramienta | Ventaja | Limitación |
|---|---|---|
| **Claude** (Anthropic) | Mejor razonamiento largo, contexto de 200K tokens | No tiene acceso a jurisprudencia chilena actualizada |
| **GPT-4** (OpenAI) | Popular, plugins disponibles | Puede "alucinar" normas chilenas |
| **Sistema propio con RAG** | Usa TU base de normas y jurisprudencia | Requiere desarrollo técnico |

Mi recomendación: un sistema con **RAG** (Retrieval-Augmented Generation) que conecte la IA a tu propia base de normas chilenas actualizadas. Así el modelo cita legislación real, no inventada.

## Un ejemplo real

Para un recurso de protección, el proceso completo me toma:

- **Sin IA**: 3-4 horas de redacción
- **Con IA + revisión**: 45 minutos total (15 min preparar contexto, 5 min generar, 25 min revisar y ajustar)

Eso es un **80% de reducción** en tiempo, manteniendo la calidad.

## El futuro cercano

Lo que viene es aún más interesante: sistemas que acceden directamente a la base de normas chilenas y jurisprudencia del Poder Judicial para generar escritos con citas verificables. Ya estoy construyendo esto — si quieres saber más, [conversemos](/contacto).
`,
  },
  {
    slug: "abogado-del-futuro-usa-ia",
    title: "El abogado del futuro no compite contra la IA, la usa",
    excerpt:
      "Opinión sobre el estado actual del mercado legal chileno y por qué la tecnología es una ventaja competitiva, no una amenaza.",
    pillar: "Opinión",
    date: "2026-04-04",
    readTime: "4 min",
    content: `
## La conversación equivocada

Cada vez que publico algo sobre IA en el mundo legal, recibo el mismo comentario: "¿Entonces los abogados vamos a desaparecer?".

No. La pregunta correcta es otra: **¿qué tipo de abogado vas a ser?**

## El mercado legal chileno en 2026

Chile tiene más de 60.000 abogados habilitados para una población de 19 millones. La competencia es feroz, los honorarios están presionados a la baja, y los clientes son cada vez más exigentes.

En este contexto, hay dos caminos:

1. **Competir por precio**: más horas, más causas, menos margen. Insostenible.
2. **Competir por valor**: entregar mejor servicio en menos tiempo, usando tecnología como palanca.

## Lo que vi desde adentro

Trabajo como abogado litigante. También soy desarrollador. Esa combinación me permite ver algo que muchos colegas no ven: **la cantidad absurda de tiempo que se pierde en tareas que una máquina hace mejor**.

En mi experiencia en Estudio Colombara — uno de los estudios de litigación más activos del país — vi de primera mano cómo un equipo de abogados talentosos dedicaba horas a revisar tablas de corte, cruzar información de causas, y redactar escritos rutinarios. No por falta de capacidad, sino porque el sistema los obliga.

En la I Jornada Internacional sobre IA que se realizó en Ecuador en 2025, presenté junto al profesor Gabriel Álvarez Undurraga un trabajo sobre los horizontes éticos de la IA en el ejercicio jurídico. La conclusión fue clara: la IA no es el problema — el problema es no tener un marco para usarla bien.

## La ventaja competitiva real

Un abogado que automatiza el seguimiento de sus causas tiene **más tiempo para preparar alegatos**. Un abogado que usa IA para generar primeros borradores **puede atender más clientes sin sacrificar calidad**. Un abogado que tiene un sitio web optimizado y un embudo digital **no depende solo de las referencias boca a boca**.

No se trata de reemplazar el criterio jurídico. Se trata de **eliminar el trabajo mecánico** para que puedas enfocarte en lo que realmente importa: pensar, argumentar y resolver.

## El mito de la barrera técnica

"Pero yo no sé programar". Tampoco sabes construir un edificio, pero contratas un arquitecto. La tecnología legal no requiere que seas programador — requiere que entiendas qué es posible y tengas a alguien que lo implemente.

Eso es exactamente lo que hago: traduzco las necesidades del abogado a soluciones tecnológicas que funcionan. Porque entiendo ambos mundos.

## La pregunta que deberías hacerte

No es "¿me va a reemplazar la IA?". Es:

> **¿Cuánto tiempo más voy a seguir haciendo manualmente lo que podría automatizar?**

Cada hora que pierdes en una tarea repetitiva es una hora menos para tu cliente, para tu familia, o para ti.

Si quieres explorar qué procesos de tu estudio se pueden optimizar, [agenda un diagnóstico gratuito de 30 minutos](/contacto). Sin compromiso, sin venta agresiva — solo una conversación honesta sobre qué es posible hoy.
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
