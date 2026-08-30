import { useEffect, useRef, useState } from 'react'
import {
  Activity,
  ArrowRight,
  Bed,
  Bone,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Clock3,
  Cross,
  ExternalLink,
  Eye,
  Facebook,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  TestTube2,
  X,
} from 'lucide-react'

const PHONE_DISPLAY = '949 288 860'
const PHONE_LINK = 'tel:+51949288860'
const WHATSAPP_NUMBER = '51949288860'
const WHATSAPP_MESSAGE = 'Hola, quisiera realizar una consulta para mi mascota.'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Liverpool+426+Urb.+San+Salvador+Trujillo+Peru'

const navigation = [
  ['Inicio', '#inicio'],
  ['Especialidades', '#especialidades'],
  ['Servicios', '#servicios'],
  ['Nosotros', '#nosotros'],
  ['Ubicación', '#ubicacion'],
]

const trustItems = [
  { icon: HeartPulse, label: 'Emergencias' },
  { icon: ShieldCheck, label: 'Cirugía especializada' },
  { icon: Microscope, label: 'Laboratorio clínico' },
  { icon: Bed, label: 'Internamiento' },
]

const serviceGroups = [
  {
    icon: Microscope,
    title: 'Diagnóstico',
    description: 'Herramientas para orientar cada evaluación.',
    services: [
      { icon: TestTube2, label: 'Laboratorio clínico' },
      { icon: Activity, label: 'Ecografía' },
      { icon: ScanLine, label: 'Rayos X' },
    ],
  },
  {
    icon: Stethoscope,
    title: 'Atención clínica',
    description: 'Evaluación, manejo médico y seguimiento.',
    services: [
      { icon: Stethoscope, label: 'Consultas veterinarias' },
      { icon: Cross, label: 'Tratamientos' },
      { icon: Bed, label: 'Internamiento y monitoreo' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Prevención y especialidades',
    description: 'Cuidados complementarios para su bienestar.',
    services: [
      { icon: Syringe, label: 'Vacunación' },
      { icon: ShieldCheck, label: 'Desparasitación' },
      { icon: Sparkles, label: 'Odontología' },
      { icon: CircleDot, label: 'Dermatología' },
      { icon: Eye, label: 'Oftalmología' },
    ],
  },
]

const reviews = [
  'Buena atención. Llevé a mi gatita para su esterilización y recibimos orientación durante el proceso.',
  'Fuimos por una emergencia y nos atendieron de inmediato. Agradecemos el trato y la explicación.',
  'Excelente atención especializada y un trato muy cuidadoso con nuestra mascota.',
]

function Reveal({ children, className = '', delay = 0, variant = 'up', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

function EmergencyBar() {
  return (
    <div className="bg-[#09213d] text-white">
      <div className="section-shell flex h-9 items-center justify-between gap-3 text-[11px] sm:h-10 sm:text-[12px]">
        <div className="flex items-center gap-2 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
          <span className="sm:hidden">¿Es una emergencia?</span>
          <span className="hidden sm:inline">¿Tienes una emergencia veterinaria?</span>
        </div>
        <a href={PHONE_LINK} className="flex shrink-0 items-center gap-1.5 font-extrabold text-sky-200 transition-colors hover:text-white" aria-label={`Llamar ahora al ${PHONE_DISPLAY}`}>
          <Phone size={13} strokeWidth={2.5} aria-hidden="true" />
          <span className="hidden sm:inline">Comunícate con nosotros</span>
          <span className="sm:hidden">Llamar ahora</span>
        </a>
      </div>
    </div>
  )
}

function Wordmark({ light = false }) {
  return (
    <a href="#inicio" className="inline-flex flex-col leading-none" title="Volver al inicio">
      <span className={`text-[8px] font-extrabold tracking-[0.33em] sm:text-[9px] ${light ? 'text-sky-300' : 'text-blue-600'}`}>CLÍNICA VETERINARIA</span>
      <span className={`mt-1 text-[19px] font-extrabold tracking-[0.13em] sm:text-[20px] ${light ? 'text-white' : 'text-slate-950'}`}>COQUITO</span>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.045)]">
      <div className="section-shell flex h-[68px] items-center justify-between sm:h-[72px]">
        <Wordmark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-blue-700">{label}</a>
          ))}
        </nav>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden h-10 items-center gap-2 rounded-lg bg-blue-600 px-5 text-[13px] font-extrabold text-white transition-colors hover:bg-blue-700 lg:inline-flex">
          Contactar <ArrowRight size={15} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={open ? undefined : ''}
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-slate-100 bg-white shadow-xl transition-[max-height,opacity] duration-300 lg:hidden ${open ? 'max-h-[490px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'}`}
      >
        <nav className="section-shell flex flex-col py-3" aria-label="Navegación móvil">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between border-b border-slate-100 text-sm font-semibold text-slate-700">
              {label}<ChevronRight size={16} className="text-slate-400" aria-hidden="true" />
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-extrabold text-white">
            <MessageCircle size={18} aria-hidden="true" /> Consultar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`mb-4 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] ${light ? 'text-sky-300' : 'text-blue-700'}`}>
      <span className={`h-px w-6 ${light ? 'bg-sky-300' : 'bg-blue-600'}`} />
      {children}
    </div>
  )
}

function PrimaryLink({ children, href = WHATSAPP_LINK, external = true, variant = 'primary', className = '' }) {
  const styles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-extrabold transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  )
}

function Hero() {
  return (
    <main id="inicio" className="overflow-hidden border-b border-slate-200 bg-[#f4f7fb]">
      <div className="section-shell grid gap-8 py-10 sm:py-14 md:min-h-[620px] md:grid-cols-[0.94fr_1.06fr] md:items-center md:gap-8 md:py-12 lg:min-h-[680px] lg:gap-14 xl:gap-20">
        <Reveal className="relative z-10 max-w-[620px]">
          <div className="mb-5 flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700 sm:mb-6 sm:text-[11px]">
            <MapPin size={14} aria-hidden="true" /> Especialistas veterinarios en Trujillo
          </div>
          <h1 className="text-balance text-[2.55rem] font-extrabold leading-[1.01] tracking-[-0.052em] text-slate-950 min-[390px]:text-[2.7rem] sm:text-[3.35rem] md:text-[3rem] lg:text-[3.55rem] xl:text-[4.15rem] 2xl:text-[4.55rem]">
            Cuidado experto cuando más <span className="text-blue-600">lo necesitan.</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-slate-600 sm:mt-6 sm:text-[17px] sm:leading-7">
            <span className="sm:hidden">Cirugía, traumatología y emergencias veterinarias en Trujillo.</span>
            <span className="hidden sm:inline">Cirugía veterinaria, traumatología, tejidos blandos, laboratorio clínico y atención de emergencias en Trujillo.</span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
            <PrimaryLink className="sm:px-6"><MessageCircle size={18} aria-hidden="true" /> Contactar por WhatsApp</PrimaryLink>
            <a href="#especialidades" className="inline-flex min-h-10 items-center justify-center gap-2 text-sm font-extrabold text-slate-700 transition-colors hover:text-blue-700 sm:justify-start sm:px-2">
              Ver especialidades <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={90} className="relative md:h-full md:min-h-[450px] lg:min-h-[560px]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-200 sm:aspect-[16/9] md:absolute md:inset-0 md:aspect-auto lg:rounded-[22px]">
            <img
              src="/images/hero-veterinaria.jpg"
              alt="Veterinaria examinando cuidadosamente a un perro en una clínica moderna"
              className="h-full w-full object-cover object-[58%_center]"
              fetchpriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#071a32]/85 to-transparent px-5 pb-4 pt-14 text-white sm:px-6 sm:pb-5">
              <p className="max-w-[230px] text-[12px] font-bold leading-5 sm:text-[13px]">Evaluación, tratamiento y seguimiento profesional.</p>
              <ShieldCheck size={22} className="shrink-0 text-sky-300" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

function TrustStrip() {
  return (
    <section aria-label="Capacidades principales" className="border-b border-slate-200 bg-white">
      <div className="section-shell flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex min-w-[185px] items-center gap-3 border-r border-slate-200 py-5 pr-5 last:border-r-0 lg:min-w-0 lg:justify-center lg:px-5 lg:py-6">
            <Icon size={18} className="shrink-0 text-blue-700" strokeWidth={2} aria-hidden="true" />
            <p className="text-[12px] font-extrabold text-slate-800 sm:text-[13px]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Specialties() {
  return (
    <section id="especialidades" className="section-pad bg-white">
      <div className="section-shell">
        <Reveal className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <Eyebrow>Áreas principales</Eyebrow>
            <h2 className="text-balance section-title text-slate-950">Medicina para los casos que requieren más</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 lg:justify-self-end lg:pb-1">
            Cirugía y atención de emergencias concentran gran parte de nuestro trabajo, con un enfoque especial en traumatología y tejidos blandos.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-3 md:grid-cols-2 lg:mt-11 lg:grid-cols-12 lg:gap-4">
          <Reveal as="article" className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-[#f8fafc] p-6 sm:p-7 md:col-span-2 lg:col-span-5 lg:min-h-[350px]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-blue-600">01 / PRIORIDAD</span>
              <ShieldCheck size={22} className="text-blue-700" aria-hidden="true" />
            </div>
            <div className="mt-auto pt-12">
              <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-[28px]">Cirugía veterinaria</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">Evaluación quirúrgica, tejidos blandos y seguimiento durante todo el proceso.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition-[gap] group-hover:gap-3">Consultar cirugía <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </Reveal>

          <Reveal as="article" delay={80} className="group flex min-h-[220px] flex-col rounded-[18px] bg-[#e9f1fd] p-6 sm:p-7 md:col-span-1 lg:col-span-3 lg:min-h-[350px]">
            <div className="flex items-center justify-between text-blue-800">
              <span className="text-[11px] font-extrabold tracking-[0.18em]">02</span>
              <Bone size={23} aria-hidden="true" />
            </div>
            <div className="mt-auto pt-10">
              <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950">Traumatología</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Lesiones, fracturas y alteraciones traumatológicas.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-800 transition-[gap] group-hover:gap-3">Consultar <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </Reveal>

          <Reveal as="article" delay={160} className="group flex min-h-[240px] flex-col rounded-[18px] bg-[#092b58] p-6 text-white sm:p-7 md:col-span-1 lg:col-span-4 lg:min-h-[350px]">
            <div className="flex items-center justify-between text-sky-300">
              <span className="text-[11px] font-extrabold tracking-[0.18em]">03 / RESPUESTA DIRECTA</span>
              <HeartPulse size={23} aria-hidden="true" />
            </div>
            <div className="mt-auto pt-10">
              <h3 className="text-2xl font-extrabold tracking-[-0.035em]">Emergencias</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-blue-100/80">Atención para situaciones que requieren evaluación veterinaria inmediata.</p>
              <a href={PHONE_LINK} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-white transition-[gap] group-hover:gap-3">Llamar ahora <Phone size={15} aria-hidden="true" /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Surgery() {
  return (
    <section className="section-pad bg-[#f5f7fa]">
      <div className="section-shell grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-20">
        <Reveal variant="left" className="relative">
          <div className="aspect-[16/11] overflow-hidden rounded-[18px] bg-slate-200 lg:aspect-[5/4] lg:rounded-[20px]">
            <img src="/images/cirugia-veterinaria.jpg" alt="Equipo veterinario revisando una imagen diagnóstica antes de un procedimiento" className="h-full w-full object-cover object-center" loading="lazy" />
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 border-l-2 border-sky-300 bg-[#071a32]/90 px-4 py-3 text-white backdrop-blur-sm sm:left-5 sm:right-auto sm:min-w-[260px]">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.12em]">Precisión y seguimiento</span>
            <Activity size={17} className="text-sky-300" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal variant="right" delay={90}>
          <Eyebrow>Cirugía veterinaria</Eyebrow>
          <h2 className="text-balance section-title text-slate-950">Cada procedimiento comienza con una evaluación cuidadosa</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
            Planificamos el procedimiento según las necesidades clínicas del paciente y acompañamos su evolución posterior.
          </p>
          <div className="mt-7 border-y border-slate-300">
            <div className="grid gap-3 py-5 sm:grid-cols-[42px_1fr]">
              <span className="text-xs font-extrabold tracking-[0.12em] text-blue-700">01</span>
              <div>
                <div className="flex items-center gap-2"><Bone size={18} className="text-blue-700" aria-hidden="true" /><h3 className="text-sm font-extrabold uppercase tracking-[0.04em] text-slate-950">Traumatología</h3></div>
                <p className="mt-2 text-[13px] leading-5 text-slate-600">Evaluación y tratamiento de lesiones, fracturas y problemas traumatológicos.</p>
              </div>
            </div>
            <div className="grid gap-3 border-t border-slate-300 py-5 sm:grid-cols-[42px_1fr]">
              <span className="text-xs font-extrabold tracking-[0.12em] text-blue-700">02</span>
              <div>
                <div className="flex items-center gap-2"><HeartPulse size={18} className="text-blue-700" aria-hidden="true" /><h3 className="text-sm font-extrabold uppercase tracking-[0.04em] text-slate-950">Tejidos blandos</h3></div>
                <p className="mt-2 text-[13px] leading-5 text-slate-600">Procedimientos quirúrgicos con evaluación y cuidados posteriores.</p>
              </div>
            </div>
          </div>
          <PrimaryLink className="mt-7">Consultar por una cirugía <ArrowRight size={16} aria-hidden="true" /></PrimaryLink>
        </Reveal>
      </div>
    </section>
  )
}

function Emergencies() {
  return (
    <section className="bg-[#071f3d] py-14 text-white sm:py-16 lg:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.46fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow light>Atención de emergencias</Eyebrow>
          <h2 className="text-balance text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">Cuando cada minuto importa</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100/75 sm:text-base sm:leading-7">Comunícate directamente con el equipo para recibir orientación y consultar disponibilidad.</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-blue-100/75">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-sky-300" aria-hidden="true" />Trujillo</span>
            <span className="flex items-center gap-2"><Clock3 size={15} className="text-sky-300" aria-hidden="true" />24/7</span>
          </div>
        </Reveal>
        <Reveal delay={100} className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sky-300">Contacto directo</p>
          <a href={PHONE_LINK} className="mt-3 inline-flex items-center gap-3 text-[27px] font-extrabold tracking-[-0.035em] sm:text-3xl"><Phone size={22} aria-hidden="true" />{PHONE_DISPLAY}</a>
          <PrimaryLink className="mt-5 w-full !bg-white !text-blue-900 hover:!bg-blue-50"><MessageCircle size={18} aria-hidden="true" />WhatsApp</PrimaryLink>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  const [openGroup, setOpenGroup] = useState(0)

  return (
    <section id="servicios" className="section-pad bg-white">
      <div className="section-shell">
        <Reveal className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow>Servicios complementarios</Eyebrow>
            <h2 className="text-balance section-title text-slate-950">Apoyo clínico, sin perder el foco</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 lg:justify-self-end lg:pb-1">Diagnóstico, tratamientos y prevención acompañan nuestra atención quirúrgica y de emergencias.</p>
        </Reveal>

        <Reveal className="mt-8 border-y border-slate-200 md:hidden">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon
            const expanded = openGroup === index
            return (
              <div key={group.title} className="border-b border-slate-200 last:border-b-0">
                <button
                  type="button"
                  className="flex min-h-[68px] w-full items-center gap-3 py-3 text-left"
                  onClick={() => setOpenGroup(expanded ? -1 : index)}
                  aria-expanded={expanded}
                  aria-controls={`service-panel-${index}`}
                >
                  <Icon size={19} className="shrink-0 text-blue-700" aria-hidden="true" />
                  <span className="flex-1 text-sm font-extrabold text-slate-900">{group.title}</span>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div id={`service-panel-${index}`} className={`grid transition-[grid-template-rows] duration-300 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} aria-hidden={!expanded} inert={expanded ? undefined : ''}>
                  <div className="overflow-hidden">
                    <p className="pb-4 pl-8 text-xs leading-5 text-slate-500">{group.description}</p>
                    <ul className="grid grid-cols-1 gap-2 pb-5 pl-8 sm:grid-cols-2">
                      {group.services.map(({ icon: ItemIcon, label }) => (
                        <li key={label} className="flex items-center gap-2.5 text-[13px] font-semibold text-slate-700"><ItemIcon size={15} className="text-blue-600" aria-hidden="true" />{label}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>

        <div className="mt-10 hidden grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 md:grid">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <Reveal as="article" delay={index * 80} key={group.title} className="px-6 py-8 first:pl-0 last:pr-0 lg:px-9 lg:py-10">
                <Icon size={22} className="text-blue-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-extrabold tracking-[-0.02em] text-slate-950">{group.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-slate-500">{group.description}</p>
                <ul className="mt-6 space-y-3.5">
                  {group.services.map(({ icon: ItemIcon, label }) => (
                    <li key={label} className="flex items-center gap-2.5 text-[13px] font-semibold text-slate-700"><ItemIcon size={15} className="text-blue-600" aria-hidden="true" />{label}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-6 flex flex-col gap-3 bg-[#f3f6fa] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5 text-xs font-semibold text-slate-600"><ShieldCheck size={17} className="shrink-0 text-blue-700" aria-hidden="true" />¿Necesitas saber qué atención requiere tu mascota?</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700">Consultar <ArrowRight size={15} aria-hidden="true" /></a>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="section-pad bg-[#f5f7fa]">
      <div className="section-shell grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
        <Reveal variant="right" className="order-1 lg:order-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[18px] bg-slate-200 lg:aspect-[5/3.8] lg:rounded-[20px]">
            <img src="/images/clinica-coquito.jpg" alt="Veterinario explicando el estado de un gato a su propietaria" className="h-full w-full object-cover object-center" loading="lazy" />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-5 pb-4 pt-12 text-xs font-bold text-white">Cercanía para explicar. Criterio clínico para decidir.</p>
          </div>
        </Reveal>
        <Reveal variant="left" delay={90} className="order-2 lg:order-1">
          <Eyebrow>Clínica Veterinaria Coquito</Eyebrow>
          <h2 className="text-balance section-title text-slate-950">Profesionalismo médico con un trato cercano</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">Acompañamos a cada paciente con evaluación, tratamiento y seguimiento profesional en Trujillo.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {['Atención profesional', 'Diagnóstico y seguimiento', 'Comunicación clara'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-800"><span className="grid h-5 w-5 place-items-center rounded-full bg-blue-700 text-white"><Check size={12} strokeWidth={3} aria-hidden="true" /></span>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['01', 'Contáctanos', 'Cuéntanos qué sucede.'],
    ['02', 'Evaluamos', 'Revisamos a tu mascota.'],
    ['03', 'Definimos el manejo', 'Explicamos el tratamiento y seguimiento.'],
  ]
  return (
    <section className="bg-[#0a2446] py-14 text-white sm:py-16">
      <div className="section-shell">
        <Reveal className="grid gap-4 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <div><Eyebrow light>Proceso de atención</Eyebrow><h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Claro desde el primer contacto</h2></div>
          <p className="max-w-md text-sm leading-6 text-blue-100/70 md:justify-self-end">En una emergencia, no esperes: comunícate directamente con nosotros.</p>
        </Reveal>
        <ol className="mt-8 grid border-y border-white/15 md:mt-10 md:grid-cols-3 md:divide-x md:divide-white/15">
          {steps.map(([number, title, text], index) => (
            <Reveal as="li" delay={index * 80} key={number} className="grid grid-cols-[38px_1fr] gap-3 border-b border-white/15 py-5 last:border-b-0 md:block md:border-b-0 md:px-6 md:py-7 first:md:pl-0 last:md:pr-0">
              <span className="text-[11px] font-extrabold tracking-[0.14em] text-sky-300">{number}</span>
              <div className="md:mt-5"><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-1.5 text-xs leading-5 text-blue-100/65">{text}</p></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="section-shell">
        <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Reputación pública</Eyebrow>
            <h2 className="text-balance section-title text-slate-950">La confianza de quienes nos visitan</h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-4xl font-extrabold tracking-[-0.06em] text-blue-700">4.2</span>
              <div>
                <div className="flex gap-0.5 text-amber-400" role="img" aria-label="4.2 de 5 estrellas">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={14} fill={star < 4 ? 'currentColor' : 'none'} className={star === 4 ? 'opacity-60' : ''} aria-hidden="true" />)}
                </div>
                <p className="mt-1 text-[11px] font-semibold text-slate-500">+100 reseñas públicas</p>
              </div>
            </div>
          </Reveal>

          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 no-scrollbar sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {reviews.map((review, index) => (
              <Reveal as="blockquote" delay={index * 80} key={review} className="flex min-h-[220px] w-[82vw] max-w-[330px] shrink-0 snap-start flex-col border border-slate-200 bg-[#f8fafc] p-5 sm:w-[320px] md:w-auto md:max-w-none">
                <Quote size={21} className="text-blue-300" aria-hidden="true" />
                <p className="mt-5 text-[13px] leading-6 text-slate-700">“{review}”</p>
                <footer className="mt-auto pt-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700">Opinión pública</footer>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-5 text-[11px] leading-5 text-slate-600">Testimonios resumidos a partir de opiniones públicas para esta propuesta visual.</p>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section id="ubicacion" className="section-pad bg-[#f5f7fa]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-stretch lg:gap-12">
        <Reveal variant="left" className="flex flex-col justify-center">
          <Eyebrow>Ubicación</Eyebrow>
          <h2 className="text-balance section-title text-slate-950">Encuéntranos en Trujillo</h2>
          <address className="mt-6 text-sm not-italic leading-6 text-slate-600">
            <p className="font-extrabold text-slate-950">Liverpool 426</p>
            <p>Urb. San Salvador<br />Trujillo, La Libertad</p>
          </address>
          <a href={PHONE_LINK} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900"><Phone size={17} className="text-blue-700" aria-hidden="true" />{PHONE_DISPLAY}</a>
          <p className="mt-1 text-xs text-slate-600">Emergencias · consultar disponibilidad</p>
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            <PrimaryLink href={MAP_LINK} className="px-3">Cómo llegar <ExternalLink size={15} aria-hidden="true" /></PrimaryLink>
            <PrimaryLink href={PHONE_LINK} external={false} variant="secondary" className="px-3"><Phone size={15} aria-hidden="true" />Llamar</PrimaryLink>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={90} className="relative min-h-[300px] overflow-hidden bg-blue-50 medical-grid sm:min-h-[380px] lg:min-h-[430px]">
          <iframe
            title="Mapa de Clínica Veterinaria Coquito en Trujillo"
            src="https://www.google.com/maps?q=Liverpool%20426%2C%20Urb.%20San%20Salvador%2C%20Trujillo%2C%20Peru&output=embed"
            className="pointer-events-none relative z-10 h-full min-h-[300px] w-full border-0 sm:min-h-[380px] lg:min-h-[430px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex="-1"
          />
          <a href={MAP_LINK} target="_blank" rel="noreferrer" className="absolute bottom-3 left-3 z-20 bg-white px-3 py-2 text-[11px] font-extrabold text-slate-800 shadow-md">Abrir mapa interactivo</a>
        </Reveal>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-blue-600 py-12 text-white sm:py-14 lg:py-16">
      <div className="section-shell grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
        <Reveal>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">Estamos para ayudarte</p>
          <h2 className="text-balance mt-3 max-w-3xl text-[2rem] font-extrabold leading-[1.1] tracking-[-0.045em] sm:text-[2.65rem]">Atención para tu mascota, cuando más la necesita</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white">Consultas, tratamientos, cirugías y emergencias veterinarias en Trujillo.</p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
          <PrimaryLink className="!bg-white !text-blue-700 hover:!bg-blue-50"><MessageCircle size={18} aria-hidden="true" />Hablar por WhatsApp</PrimaryLink>
          <PrimaryLink href={PHONE_LINK} external={false} className="border border-white/40 !bg-transparent hover:!bg-white/10"><Phone size={17} aria-hidden="true" />Llamar ahora</PrimaryLink>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#071a32] pb-24 pt-12 text-blue-100 lg:pb-7 lg:pt-14">
      <div className="section-shell grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
        <div>
          <Wordmark light />
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-blue-100/65">Atención médico-veterinaria especializada en Trujillo.</p>
          <a href="https://www.facebook.com/search/top?q=Cl%C3%ADnica%20Veterinaria%20Coquito" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white hover:text-sky-300"><Facebook size={15} aria-hidden="true" />Facebook</a>
        </div>
        <div>
          <h3 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">Especialidades</h3>
          <ul className="mt-4 space-y-2.5 text-[13px] text-blue-100/65">{['Cirugía', 'Traumatología', 'Tejidos blandos', 'Emergencias'].map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">Servicios</h3>
          <ul className="mt-4 space-y-2.5 text-[13px] text-blue-100/65">{['Laboratorio clínico', 'Tratamientos', 'Consultas'].map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">Contacto</h3>
          <address className="mt-4 text-[13px] not-italic leading-6 text-blue-100/65"><p>Liverpool 426<br />Urb. San Salvador, Trujillo</p><a href={PHONE_LINK} className="mt-2 block font-extrabold text-white">{PHONE_DISPLAY}</a></address>
        </div>
      </div>
      <div className="section-shell mt-9 flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] text-blue-100/70 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Clínica Veterinaria Coquito.</p>
        <p>Propuesta visual · Trujillo, Perú</p>
      </div>
    </footer>
  )
}

function ContactActions() {
  return (
    <>
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 hidden h-12 items-center gap-2 rounded-full bg-[#147d3f] px-4 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgba(22,101,52,0.24)] transition-transform hover:-translate-y-0.5 lg:flex" aria-label="Contactar a Clínica Veterinaria Coquito por WhatsApp"><MessageCircle size={19} aria-hidden="true" />WhatsApp</a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-2 shadow-[0_-6px_18px_rgba(15,23,42,0.06)] lg:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a href={PHONE_LINK} className="grid h-12 w-14 shrink-0 place-items-center rounded-lg border border-slate-200 text-blue-700" aria-label={`Llamar al ${PHONE_DISPLAY}`}><Phone size={19} aria-hidden="true" /></a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#147d3f] px-4 text-sm font-extrabold text-white"><MessageCircle size={18} aria-hidden="true" />Consultar por WhatsApp</a>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <>
      <EmergencyBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Specialties />
      <Surgery />
      <Emergencies />
      <Services />
      <About />
      <Process />
      <Reviews />
      <Location />
      <FinalCta />
      <Footer />
      <ContactActions />
    </>
  )
}
