import { useMemo, useState, type ComponentType, type SVGProps } from 'react'
import {
  Activity, ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight,
  Bell, Bookmark, Check, CheckCircle2, ChevronDown, ChevronRight, CircleHelp, Cloud, Code2,
  Copy, Download, ExternalLink, Eye, File, FileText, Filter, Flame, Heart, Home, Image,
  Info, LayoutGrid, Link, LoaderCircle, Lock, Mail, Menu, MessageCircle, Moon, MoreHorizontal,
  Music, Pause, Play, Plus, Search, Send, Settings, ShieldCheck, ShoppingBag, Sparkles, Star,
  Sun, Trash2, Upload, User, Video, WandSparkles, X, Zap, type LucideProps
} from 'lucide-react'

type IconComponent = ComponentType<LucideProps>
type IconItem = { name: string; exportName: string; category: string; icon: IconComponent; animation: string; description: string }

const icons: IconItem[] = [
  { name: 'Activity', exportName: 'Activity', category: 'General', icon: Activity, animation: 'pulse', description: 'A pulse of activity' },
  { name: 'Arrow right', exportName: 'ArrowRight', category: 'Arrows', icon: ArrowRight, animation: 'nudge-right', description: 'Move forward or continue' },
  { name: 'Arrow up', exportName: 'ArrowUp', category: 'Arrows', icon: ArrowUp, animation: 'nudge-up', description: 'Move to the top' },
  { name: 'Arrow down', exportName: 'ArrowDown', category: 'Arrows', icon: ArrowDown, animation: 'nudge-down', description: 'Move down the page' },
  { name: 'Arrow left', exportName: 'ArrowLeft', category: 'Arrows', icon: ArrowLeft, animation: 'nudge-left', description: 'Go back or previous' },
  { name: 'Arrow up right', exportName: 'ArrowUpRight', category: 'Arrows', icon: ArrowUpRight, animation: 'nudge-diagonal', description: 'Open an external destination' },
  { name: 'Arrow down left', exportName: 'ArrowDownLeft', category: 'Arrows', icon: ArrowDownLeft, animation: 'nudge-diagonal', description: 'Navigate down and left' },
  { name: 'Arrow down right', exportName: 'ArrowDownRight', category: 'Arrows', icon: ArrowDownRight, animation: 'nudge-diagonal', description: 'Navigate down and right' },
  { name: 'Bell', exportName: 'Bell', category: 'Communication', icon: Bell, animation: 'ring', description: 'Notifications and alerts' },
  { name: 'Bookmark', exportName: 'Bookmark', category: 'General', icon: Bookmark, animation: 'pop', description: 'Save for later' },
  { name: 'Check circle', exportName: 'CheckCircle2', category: 'General', icon: CheckCircle2, animation: 'draw', description: 'A completed action' },
  { name: 'Chevron down', exportName: 'ChevronDown', category: 'Arrows', icon: ChevronDown, animation: 'nudge-down', description: 'Expand a menu' },
  { name: 'Chevron right', exportName: 'ChevronRight', category: 'Arrows', icon: ChevronRight, animation: 'nudge-right', description: 'Open a submenu' },
  { name: 'Cloud', exportName: 'Cloud', category: 'Files', icon: Cloud, animation: 'float', description: 'Cloud storage and sync' },
  { name: 'Code', exportName: 'Code2', category: 'Development', icon: Code2, animation: 'pop', description: 'Code and development' },
  { name: 'Copy', exportName: 'Copy', category: 'Development', icon: Copy, animation: 'pop', description: 'Copy content to clipboard' },
  { name: 'Download', exportName: 'Download', category: 'Files', icon: Download, animation: 'nudge-down', description: 'Download a file' },
  { name: 'Eye', exportName: 'Eye', category: 'General', icon: Eye, animation: 'blink', description: 'Preview or reveal content' },
  { name: 'File', exportName: 'File', category: 'Files', icon: File, animation: 'nudge-up', description: 'A generic file' },
  { name: 'File text', exportName: 'FileText', category: 'Files', icon: FileText, animation: 'nudge-up', description: 'A text document' },
  { name: 'Flame', exportName: 'Flame', category: 'General', icon: Flame, animation: 'flicker', description: 'Trending or popular' },
  { name: 'Heart', exportName: 'Heart', category: 'Social', icon: Heart, animation: 'heartbeat', description: 'Like or favorite' },
  { name: 'Home', exportName: 'Home', category: 'General', icon: Home, animation: 'pop', description: 'Go to the home page' },
  { name: 'Image', exportName: 'Image', category: 'Media', icon: Image, animation: 'pop', description: 'Images and visual media' },
  { name: 'Info', exportName: 'Info', category: 'General', icon: Info, animation: 'pulse', description: 'Additional information' },
  { name: 'Loader', exportName: 'LoaderCircle', category: 'General', icon: LoaderCircle, animation: 'spin', description: 'Loading or processing' },
  { name: 'Lock', exportName: 'Lock', category: 'General', icon: Lock, animation: 'wiggle', description: 'Secure or private' },
  { name: 'Mail', exportName: 'Mail', category: 'Communication', icon: Mail, animation: 'nudge-up', description: 'Email and messages' },
  { name: 'Menu', exportName: 'Menu', category: 'General', icon: Menu, animation: 'wiggle', description: 'Open navigation' },
  { name: 'Message circle', exportName: 'MessageCircle', category: 'Communication', icon: MessageCircle, animation: 'pop', description: 'Chat and conversations' },
  { name: 'Moon', exportName: 'Moon', category: 'General', icon: Moon, animation: 'rotate', description: 'Dark mode' },
  { name: 'Music', exportName: 'Music', category: 'Media', icon: Music, animation: 'bounce', description: 'Audio and music' },
  { name: 'Pause', exportName: 'Pause', category: 'Media', icon: Pause, animation: 'pop', description: 'Pause playback' },
  { name: 'Play', exportName: 'Play', category: 'Media', icon: Play, animation: 'pop', description: 'Start playback' },
  { name: 'Plus', exportName: 'Plus', category: 'General', icon: Plus, animation: 'rotate', description: 'Add a new item' },
  { name: 'Search', exportName: 'Search', category: 'General', icon: Search, animation: 'wiggle', description: 'Search and discover' },
  { name: 'Send', exportName: 'Send', category: 'Communication', icon: Send, animation: 'nudge-right', description: 'Send a message' },
  { name: 'Settings', exportName: 'Settings', category: 'General', icon: Settings, animation: 'rotate', description: 'Preferences and settings' },
  { name: 'Shield check', exportName: 'ShieldCheck', category: 'General', icon: ShieldCheck, animation: 'pulse', description: 'Protection and verified status' },
  { name: 'Shopping bag', exportName: 'ShoppingBag', category: 'General', icon: ShoppingBag, animation: 'nudge-up', description: 'Shopping and checkout' },
  { name: 'Sparkles', exportName: 'Sparkles', category: 'General', icon: Sparkles, animation: 'twinkle', description: 'Magic and AI features' },
  { name: 'Star', exportName: 'Star', category: 'Social', icon: Star, animation: 'rotate', description: 'Rating or highlight' },
  { name: 'Sun', exportName: 'Sun', category: 'General', icon: Sun, animation: 'rotate', description: 'Light mode' },
  { name: 'Trash', exportName: 'Trash2', category: 'General', icon: Trash2, animation: 'wiggle', description: 'Delete an item' },
  { name: 'Upload', exportName: 'Upload', category: 'Files', icon: Upload, animation: 'nudge-up', description: 'Upload a file' },
  { name: 'User', exportName: 'User', category: 'Social', icon: User, animation: 'pop', description: 'Profile and account' },
  { name: 'Video', exportName: 'Video', category: 'Media', icon: Video, animation: 'pulse', description: 'Video content' },
  { name: 'Wand', exportName: 'WandSparkles', category: 'Development', icon: WandSparkles, animation: 'twinkle', description: 'Automate or transform' },
  { name: 'Zap', exportName: 'Zap', category: 'General', icon: Zap, animation: 'flicker', description: 'Fast or energetic action' },
]
const categories = ['All icons', 'Arrows', 'General', 'Communication', 'Development', 'Files', 'Media', 'Social']
const animations = ['pulse', 'nudge-right', 'nudge-up', 'nudge-down', 'nudge-left', 'nudge-diagonal', 'ring', 'pop', 'draw', 'float', 'blink', 'flicker', 'heartbeat', 'spin', 'wiggle', 'rotate', 'bounce', 'twinkle']

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All icons')
  const [selected, setSelected] = useState<IconItem | null>(null)
  const [preview, setPreview] = useState('hover')
  const [size, setSize] = useState(32)
  const [stroke, setStroke] = useState(1.8)
  const [copied, setCopied] = useState('')
  const [mobileNav, setMobileNav] = useState(false)
  const filtered = useMemo(() => icons.filter(item => (category === 'All icons' || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase())), [query, category])

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1600)
    } catch { setCopied('Clipboard unavailable') }
  }
  const svgString = (item: IconItem) => {
    return `<${item.exportName} size={${size}} strokeWidth={${stroke}} />`
  }
  const animationFrames: Record<string, string> = {
    pulse: '0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(.92); opacity: .6; }',
    'nudge-right': '0%, 100% { transform: translateX(0); } 45% { transform: translateX(5px); }',
    'nudge-up': '0%, 100% { transform: translateY(0); } 45% { transform: translateY(-5px); }',
    'nudge-down': '0%, 100% { transform: translateY(0); } 45% { transform: translateY(5px); }',
    'nudge-left': '0%, 100% { transform: translateX(0); } 45% { transform: translateX(-5px); }',
    'nudge-diagonal': '0%, 100% { transform: translate(0); } 45% { transform: translate(4px, -4px); }',
    ring: '0%, 100% { transform: rotate(0); } 15%, 45%, 75% { transform: rotate(12deg); } 30%, 60%, 90% { transform: rotate(-12deg); }',
    pop: '0% { transform: scale(.85); } 55% { transform: scale(1.14); } 100% { transform: scale(1); }',
    draw: '0% { opacity: .45; transform: scale(.9); } 65% { opacity: 1; transform: scale(1.08); } 100% { transform: scale(1); }',
    float: '0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); }',
    blink: '0%, 90%, 100% { transform: scaleY(1); } 95% { transform: scaleY(.2); }',
    flicker: '0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .65; transform: scale(1.06); }',
    heartbeat: '0%, 100% { transform: scale(1); } 15% { transform: scale(1.2); } 30% { transform: scale(1); } 45% { transform: scale(1.15); } 60% { transform: scale(1); }',
    spin: 'to { transform: rotate(360deg); }',
    wiggle: '0%, 100% { transform: rotate(0); } 25% { transform: rotate(-8deg); } 75% { transform: rotate(8deg); }',
    rotate: 'from { transform: rotate(-35deg); } to { transform: rotate(0); }',
    bounce: '0%, 100% { transform: translateY(0); } 35% { transform: translateY(-6px); } 65% { transform: translateY(2px); }',
    twinkle: '0%, 100% { transform: scale(1) rotate(0); opacity: 1; } 50% { transform: scale(.82) rotate(12deg); opacity: .6; }',
  }
  const reactSnippet = (item: IconItem) => {
    const componentName = `${item.exportName}Animated`
    const duration = ['spin', 'rotate'].includes(item.animation) ? '1.6s' : '1.2s'
    const iteration = 'infinite'
    return `import { ${item.exportName} } from 'lucide-react'

const animationName = 'motion-${item.animation}'

export function ${componentName}() {
  return (
    <>
      <style>{\`
        @keyframes ${item.animation} { ${animationFrames[item.animation]} }
        .${'${animationName}'} { animation: ${item.animation} ${duration} ease-in-out ${iteration}; transform-origin: center; }
        @media (prefers-reduced-motion: reduce) { .${'${animationName}'} { animation: none; } }
      \`}</style>
      <${item.exportName} size={${size}} fill="white" strokeWidth={${stroke}} className={animationName} aria-hidden="true" />
    </>
  )
}`
  }
  const cssSnippet = (item: IconItem) => `.motion-${item.animation} { animation: ${item.animation} 650ms ease both; transform-origin: center; }\n\n@keyframes ${item.animation} { ${animationFrames[item.animation]} }`

  return <div className="min-h-screen bg-[#fafaf9] text-[#242421]">
    <header className="sticky top-0 z-30 border-b border-[#e9e8e4] bg-[#fafaf9]/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Motion home"><span className="brand-mark"><Sparkles size={17} strokeWidth={1.8}/></span><span className="text-[17px] font-semibold tracking-[-0.06em]">motion<span className="text-[#a1a09a]">.</span></span><span className="ml-1 rounded border border-[#e6e5e0] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#8a8982]">icons</span></a>
        <nav className="hidden items-center gap-7 text-[12px] text-[#77766f] md:flex"><a className="nav-link active" href="#explore">Explore</a><a className="nav-link" href="#how-to-use">Docs</a><a className="nav-link" href="https://lucide.dev" target="_blank" rel="noreferrer">Lucide source <ExternalLink size={11}/></a></nav>
        <div className="flex items-center gap-2"><span className="hidden rounded-md border border-[#e7e6e1] px-2.5 py-1.5 font-mono text-[10px] text-[#77766f] sm:inline">FREE & OPEN SOURCE</span><button onClick={() => setMobileNav(!mobileNav)} className="rounded-md border border-[#e7e6e1] p-2 md:hidden" aria-label="Toggle navigation"><Menu size={16}/></button><a href="#explore" className="hidden rounded-md bg-[#282824] px-3.5 py-2 text-[11px] font-medium text-white transition hover:bg-black sm:inline-flex">Browse icons <ArrowRight size={13} className="ml-2"/></a></div>
      </div>
      {mobileNav && <div className="border-t border-[#e9e8e4] px-5 py-3 text-sm md:hidden"><a href="#explore" onClick={() => setMobileNav(false)}>Explore icons</a><a className="ml-6" href="#how-to-use" onClick={() => setMobileNav(false)}>Docs</a></div>}
    </header>

    <main id="top" className="mx-auto max-w-[1440px] px-5 sm:px-8">
      <section className="relative overflow-hidden pb-12 pt-14 sm:pb-16 sm:pt-[76px]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50"/>
        <div className="relative mx-auto max-w-[700px] text-center"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e7e6e1] bg-white/70 px-3 py-1.5 text-[10px] text-[#77766f]"><span className="h-1.5 w-1.5 rounded-full bg-[#a2b69b]"/> A little motion goes a long way <span className="text-[#c2c1bb]">↗</span></div>
          <h1 className="text-[43px] font-medium leading-[1.04] tracking-[-0.075em] sm:text-[66px]">Icons that move<br/>with <span className="serif-word">meaning.</span></h1>
          <p className="mx-auto mt-5 max-w-[450px] text-[13px] leading-6 text-[#77766f] sm:text-[14px]">A thoughtful collection of animated icons for interfaces that feel a little more alive. Simple to use. A joy to interact with.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3"><a href="#explore" className="inline-flex items-center rounded-md bg-[#292925] px-4 py-2.5 text-[12px] font-medium text-white transition hover:bg-black">Explore the library <ArrowRight size={14} className="ml-2"/></a><a href="#how-to-use" className="inline-flex items-center rounded-md border border-[#e5e4df] bg-white/70 px-4 py-2.5 text-[12px] text-[#56564f] transition hover:bg-white">How to use <Code2 size={14} className="ml-2"/></a></div>
          <div className="mx-auto mt-12 flex max-w-[560px] items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#e9e8e4] bg-white/80 p-5 sm:gap-5 sm:p-7">{[Sparkles, ArrowRight, Heart, Bell, Zap, CheckCircle2, WandSparkles].map((Icon, i) => <div key={i} className={`hero-icon animation-${['twinkle','nudge-right','heartbeat','ring','flicker','draw','twinkle'][i]}`} style={{animationDelay:`${i*120}ms`}}><Icon size={22} strokeWidth={1.55}/></div>)}</div>
          <div className="mt-3 font-mono text-[9px] tracking-[0.15em] text-[#aaa9a2]">48 ICONS · 18 ANIMATIONS · ENDLESS DETAILS</div>
        </div>
      </section>

      <section id="explore" className="scroll-mt-24 pb-16 pt-4">
        <div className="mb-7 flex flex-col justify-between gap-5 border-b border-[#e9e8e4] pb-5 sm:flex-row sm:items-end"><div><div className="section-kicker">THE LIBRARY <span>01 / 03</span></div><h2 className="mt-2 text-[25px] font-medium tracking-[-0.055em]">Find your motion.</h2><p className="mt-1.5 text-[12px] text-[#85847d]">Small details. Better interactions.</p></div><div className="flex items-center gap-2 text-[11px] text-[#85847d]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#a2b69b]"/>{filtered.length} icons available</div></div>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <aside className="w-full shrink-0 lg:sticky lg:top-[88px] lg:w-[190px]"><div className="mb-3 text-[10px] font-medium uppercase tracking-[0.13em] text-[#a09f98]">Categories</div><div className="flex gap-1.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">{categories.map((item, i) => <button key={item} onClick={() => setCategory(item)} className={`category-btn ${category === item ? 'category-active' : ''}`}><span className="flex items-center gap-2.5">{i === 0 ? <LayoutGrid size={14}/> : <span className="category-dot"/>}{item}</span><span className="ml-4 font-mono text-[10px] opacity-60">{item === 'All icons' ? icons.length : icons.filter(icon => icon.category === item).length}</span></button>)}</div><div className="mt-7 hidden rounded-lg border border-[#e8e7e1] bg-white/70 p-4 lg:block"><div className="mb-2 flex items-center gap-2 text-[11px] font-medium"><Sparkles size={14}/> Made to move</div><p className="text-[11px] leading-5 text-[#85847d]">Hover any icon to see its animation. Click to customize and copy.</p></div></aside>
          <div className="min-w-0 flex-1"><div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center"><label className="search-box flex min-w-0 flex-1 items-center gap-2.5 rounded-md border border-[#e7e6e1] bg-white px-3.5"><Search size={15} className="shrink-0 text-[#a09f98]"/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search icons... e.g. arrow, heart, upload" className="h-10 min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#aaa9a2]"/><kbd className="hidden rounded border border-[#ecebe7] px-1.5 py-0.5 font-mono text-[9px] text-[#a09f98] sm:inline">⌘ K</kbd></label><button onClick={() => { setQuery(''); setCategory('All icons') }} className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#e7e6e1] px-3 text-[11px] text-[#77766f] transition hover:bg-white"><Filter size={13}/> Reset filters</button></div>
            <div className="icon-grid">{filtered.map(item => {const Icon = item.icon; return <button key={item.name} onClick={() => {setSelected(item); setPreview('hover')}} className="icon-card group text-left" aria-label={`Customize ${item.name} icon`}><span className={`icon-preview animation-${item.animation}`}><Icon size={25} strokeWidth={stroke}/></span><span className="mt-4 flex w-full items-center justify-between gap-1"><span className="truncate text-[11px] text-[#575750]">{item.name}</span><span className="icon-open opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={12}/></span></span><span className="mt-1 block text-left font-mono text-[9px] text-[#aaa9a2]">{item.category}</span></button>})}</div>
            {filtered.length === 0 && <div className="rounded-lg border border-dashed border-[#deddd7] py-20 text-center"><Search size={22} className="mx-auto text-[#b1b0a9]"/><p className="mt-3 text-sm">No icons found</p><p className="mt-1 text-xs text-[#929189]">Try another search or reset your filters.</p><button onClick={() => {setQuery('');setCategory('All icons')}} className="mt-4 text-xs underline underline-offset-4">Clear filters</button></div>}
            <div className="mt-5 flex items-center justify-between border-t border-[#e9e8e4] pt-4 text-[10px] text-[#96958e]"><span>Showing {filtered.length} of {icons.length} icons</span><span className="font-mono">BUILT FOR THE DETAILS</span></div>
          </div>
        </div>
      </section>

      <section id="how-to-use" className="scroll-mt-24 border-t border-[#e9e8e4] py-14 sm:py-16"><div className="grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16"><div><div className="section-kicker">MADE FOR DEVELOPERS <span>02 / 03</span></div><h2 className="mt-3 max-w-[340px] text-[29px] font-medium leading-tight tracking-[-0.06em]">A tiny bit of motion.<br/><span className="serif-word">A lot of feeling.</span></h2><p className="mt-4 max-w-[330px] text-[12px] leading-6 text-[#77766f]">Built for the moments that make an interface feel considered. Pick an icon, give it a little personality, and make it yours.</p><div className="mt-6 space-y-3">{[['01','Pick an icon','Choose from the library.'],['02','Choose a motion','Use the built-in animation or customize it.'],['03','Copy & ship','Grab the React snippet and drop it in.']].map(([n,title,desc])=><div key={n} className="flex gap-3 border-t border-[#e9e8e4] pt-3"><span className="font-mono text-[10px] text-[#aaa9a2]">{n}</span><div><div className="text-[12px] font-medium">{title}</div><div className="mt-1 text-[11px] text-[#85847d]">{desc}</div></div></div>)}</div></div>
          <div className="overflow-hidden rounded-xl border border-[#e7e6e1] bg-white"><div className="flex items-center justify-between border-b border-[#eeede9] px-4 py-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d5d4ce]"/><span className="h-2 w-2 rounded-full bg-[#d5d4ce]"/><span className="h-2 w-2 rounded-full bg-[#d5d4ce]"/></div><span className="font-mono text-[10px] text-[#96958e]">example.tsx</span><button onClick={() => copyText("import { Heart } from 'lucide-react'\n\nexport function FavoriteButton() {\n  return <Heart className=\"motion-heart\" size={24} />\n}", 'example')} className="flex items-center gap-1.5 text-[10px] text-[#77766f] hover:text-black">{copied === 'example' ? <Check size={12}/> : <Copy size={12}/>} {copied === 'example' ? 'Copied' : 'Copy'}</button></div><pre className="overflow-x-auto p-5 text-[11px] leading-[2] sm:p-7 sm:text-[12px]"><code><span className="code-purple">import</span> {'{'} <span className="code-blue">Heart</span> {'}'} <span className="code-purple">from</span> <span className="code-green">'lucide-react'</span>{'\n\n'}<span className="code-purple">export function</span> <span className="code-blue">FavoriteButton</span>() {'{'}{'\n'}  <span className="code-purple">return</span> ({'\n'}    <span className="code-orange">&lt;Heart</span>{'\n'}      <span className="code-blue">size</span>={'{'}<span className="code-orange">24</span>{'}'}{'\n'}      <span className="code-blue">className</span>=<span className="code-green">"motion-heart"</span>{'\n'}    <span className="code-orange">/&gt;</span>{'\n'}  ){ '\n'}{'}'}</code></pre><div className="flex items-center gap-2 border-t border-[#eeede9] bg-[#fafaf8] px-5 py-3 text-[10px] text-[#8c8b84]"><Info size={12}/> Compatible with React, Vite, and Next.js.</div></div>
        </div></section>
      <section className="border-t border-[#e9e8e4] py-12"><div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-[#e7e6e1] bg-white p-6 sm:flex-row sm:items-center sm:p-8"><div><div className="section-kicker">THE LITTLE THINGS MATTER <span>03 / 03</span></div><h2 className="mt-2 text-[23px] font-medium tracking-[-0.06em]">Make every interaction count.</h2><p className="mt-2 text-[12px] text-[#85847d]">Good design lives in the details. Start with one small movement.</p></div><a href="#explore" className="inline-flex shrink-0 items-center rounded-md bg-[#292925] px-4 py-2.5 text-[11px] text-white hover:bg-black">Find an icon <ArrowRight size={13} className="ml-2"/></a></div></section>
    </main>
    <footer className="border-t border-[#e9e8e4]"><div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-6 text-[10px] text-[#96958e] sm:flex-row sm:px-8"><a href="#top" className="flex items-center gap-2 text-[#5d5c55]"><span className="brand-mark small"><Sparkles size={12}/></span><span className="font-semibold tracking-[-0.04em]">motion.</span></a><span>Made for interfaces that feel alive. <span className="text-[#c1c0b9]">♥</span></span><span className="font-mono">© 2025 MOTION ICONS</span></div></footer>

    {selected && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#252520]/25 p-0 backdrop-blur-[2px] sm:items-center sm:p-5" onMouseDown={e => {if(e.target === e.currentTarget) setSelected(null)}}><div className="detail-panel max-h-[92vh] w-full max-w-[680px] overflow-y-auto rounded-t-2xl border border-[#e6e5df] bg-[#fafaf9] shadow-2xl sm:rounded-2xl"><div className="flex items-center justify-between border-b border-[#e9e8e4] px-5 py-4 sm:px-6"><div><div className="section-kicker">ICON CUSTOMIZER</div><div className="mt-1 text-[15px] font-medium tracking-[-0.04em]">{selected.name}</div></div><button onClick={() => setSelected(null)} className="rounded-md border border-[#e7e6e1] p-2 text-[#77766f] hover:bg-white" aria-label="Close customizer"><X size={15}/></button></div><div className="grid sm:grid-cols-[1fr_1fr]"><div className="flex min-h-[230px] flex-col items-center justify-center border-b border-[#e9e8e4] bg-white p-6 sm:border-b-0 sm:border-r"><div className={`detail-icon animation-${selected.animation}`} key={`${selected.name}-${preview}`}><selected.icon size={size} strokeWidth={stroke}/></div><div className="mt-8 flex items-center gap-2"><button onClick={() => setPreview(preview === 'hover' ? 'always' : 'hover')} className={`rounded-md border px-3 py-2 text-[10px] ${preview === 'always' ? 'border-[#292925] bg-[#292925] text-white' : 'border-[#e7e6e1] text-[#77766f]'}`}>{preview === 'always' ? 'Playing animation' : 'Replay animation'}</button><button onClick={() => {setSize(32);setStroke(1.8);setPreview('hover')}} className="rounded-md border border-[#e7e6e1] p-2 text-[#77766f] hover:bg-[#fafaf9]" title="Reset settings"><Activity size={13}/></button></div><p className="mt-4 max-w-[230px] text-center text-[10px] leading-5 text-[#96958e]">{selected.description}. Hover the icon to preview its motion.</p></div><div className="space-y-5 p-5 sm:p-6"><div><div className="mb-3 flex items-center justify-between"><label className="text-[11px] font-medium">Icon size</label><span className="font-mono text-[10px] text-[#77766f]">{size}px</span></div><input type="range" min="16" max="72" value={size} onChange={e => setSize(Number(e.target.value))} className="w-full accent-[#292925]"/><div className="mt-1 flex justify-between font-mono text-[9px] text-[#aaa9a2]"><span>16px</span><span>72px</span></div></div><div><div className="mb-3 flex items-center justify-between"><label className="text-[11px] font-medium">Stroke width</label><span className="font-mono text-[10px] text-[#77766f]">{stroke.toFixed(1)}</span></div><input type="range" min="1" max="3" step="0.1" value={stroke} onChange={e => setStroke(Number(e.target.value))} className="w-full accent-[#292925]"/><div className="mt-1 flex justify-between font-mono text-[9px] text-[#aaa9a2]"><span>Light</span><span>Bold</span></div></div><div><label className="mb-2 block text-[11px] font-medium">Animation</label><div className="grid grid-cols-2 gap-2"><div className="rounded-md border border-[#e7e6e1] bg-white px-3 py-2 text-[11px]">{selected.animation.replace('-', ' ')}</div><div className="rounded-md border border-[#e7e6e1] bg-white px-3 py-2 text-[11px]">650ms · ease</div></div><p className="mt-2 text-[10px] leading-5 text-[#96958e]">Animation presets are defined in <code className="font-mono">src/index.css</code>.</p></div><div className="space-y-2 pt-1"><button onClick={() => copyText(reactSnippet(selected), 'react')} className="flex w-full items-center justify-between rounded-md bg-[#292925] px-3.5 py-3 text-[11px] font-medium text-white transition hover:bg-black"><span className="flex items-center gap-2"><Code2 size={14}/> Copy React component</span>{copied === 'react' ? <Check size={14}/> : <Copy size={13}/>}</button><button onClick={() => copyText(svgString(selected), 'svg')} className="flex w-full items-center justify-between rounded-md border border-[#e7e6e1] bg-white px-3.5 py-3 text-[11px] text-[#55554e] hover:bg-[#f7f7f4]"><span className="flex items-center gap-2"><Code2 size={14}/> Copy JSX icon</span>{copied === 'svg' ? <Check size={14}/> : <Copy size={13}/>}</button><button onClick={() => copyText(cssSnippet(selected), 'css')} className="flex w-full items-center justify-between rounded-md border border-[#e7e6e1] bg-white px-3.5 py-3 text-[11px] text-[#55554e] hover:bg-[#f7f7f4]"><span className="flex items-center gap-2"><Code2 size={14}/> Copy CSS hint</span>{copied === 'css' ? <Check size={14}/> : <Copy size={13}/>}</button>{copied === 'Clipboard unavailable' && <p className="text-[10px] text-red-600">Clipboard access is unavailable in this browser.</p>}</div></div></div></div></div>}
  </div>
}
export default App
