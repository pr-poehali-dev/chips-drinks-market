import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO = 'https://cdn.poehali.dev/projects/aa4a8a27-ddba-4aed-8f31-783dbea74182/files/97f3eb3e-3c95-4761-a27d-49b86b8235ec.jpg';
const CHIP = 'https://cdn.poehali.dev/projects/aa4a8a27-ddba-4aed-8f31-783dbea74182/files/9755dccc-0c52-44fb-a97f-fef77c2f093c.jpg';
const SODA = 'https://cdn.poehali.dev/projects/aa4a8a27-ddba-4aed-8f31-783dbea74182/files/2d65ddd8-0ebb-490f-8f4e-f20bf829cd98.jpg';

const nav = [
  { label: 'Главная', href: '#home' },
  { label: 'Ассортимент', href: '#catalog' },
  { label: 'Условия', href: '#terms' },
  { label: 'О компании', href: '#about' },
  { label: 'Логистика', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

const categories = [
  { name: 'Снеки из Кореи', tag: '🇰🇷 80+ SKU', img: CHIP, accent: 'hsl(var(--neon-pink))' },
  { name: 'Напитки из Китая', tag: '🇨🇳 90+ SKU', img: SODA, accent: 'hsl(var(--neon-cyan))' },
  { name: 'Снеки из Вьетнама', tag: '🇻🇳 50+ SKU', img: CHIP, accent: 'hsl(var(--neon-purple))' },
  { name: 'Азиатские лимитки', tag: '🌏 60+ SKU', img: SODA, accent: 'hsl(var(--neon-blue))' },
];

const terms = [
  { icon: 'Boxes', t: 'Отгрузка от 1 паллеты', d: 'Гибкий объём под сеть любого масштаба' },
  { icon: 'Percent', t: 'Оптовые цены', d: 'Прогрессивная скидка от объёма заказа' },
  { icon: 'FileText', t: 'Отсрочка платежа', d: 'До 45 дней для проверенных сетей' },
  { icon: 'ShieldCheck', t: 'Все документы', d: 'Сертификаты, декларации, ЭДО' },
];

const steps = [
  { n: '01', t: 'Заявка', d: 'Оставляете запрос — получаете актуальный прайс', color: 'hsl(var(--neon-pink))' },
  { n: '02', t: 'КП и договор', d: 'Согласуем ассортимент, цены и условия', color: 'hsl(var(--neon-purple))' },
  { n: '03', t: 'Отгрузка', d: 'Формируем и доставляем партию на ваш РЦ', color: 'hsl(var(--neon-cyan))' },
  { n: '04', t: 'Регулярность', d: 'Плановые поставки по графику сети', color: 'hsl(var(--neon-blue))' },
];

const partners = ['РИТЕЙЛ+', 'МЕГАМАРТ', 'ФРЕШ', 'СЕТЬ24', 'GLOBUS', 'СНЕК-МАРКЕТ'];

const brandsByCountry = [
  {
    flag: '🇨🇳', country: 'Китай', color: 'hsl(var(--neon-cyan))',
    brands: [
      { name: 'Pepsi', cat: 'Газировка' },
      { name: 'Coca-Cola', cat: 'Газировка' },
      { name: 'Fanta', cat: 'Газировка' },
      { name: 'Sprite', cat: 'Газировка' },
      { name: 'Pringles', cat: 'Чипсы' },
      { name: "Lay's", cat: 'Чипсы' },
    ],
  },
  {
    flag: '🇰🇷', country: 'Южная Корея', color: 'hsl(var(--neon-pink))',
    brands: [{ name: 'Harim', cat: 'Лапша' }],
  },
  {
    flag: '🇻🇳', country: 'Вьетнам', color: 'hsl(var(--neon-purple))',
    brands: [{ name: 'Vifon', cat: 'Лапша' }],
  },
];

const Index = () => {
  const marquee = ['🇰🇷 ЮЖНАЯ КОРЕЯ', '🇨🇳 КИТАЙ', '🇻🇳 ВЬЕТНАМ', 'ПРЯМЫЕ КОНТРАКТЫ', 'ОТ 1 ПАЛЛЕТЫ', 'ПОСТАВКИ ПО ВСЕЙ РФ', 'ЭДО И СЕРТИФИКАТЫ'];

  return (
    <div className="min-h-screen font-body text-foreground overflow-x-hidden" style={{ background: 'hsl(232 35% 8%)' }}>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ background: 'hsl(232 35% 8% / 0.85)', backdropFilter: 'blur(16px)', borderColor: 'hsl(var(--neon-pink) / 0.25)' }}>
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-display font-black text-2xl tracking-tight flex items-center gap-1">
            <span className="glow-text" style={{ color: 'hsl(var(--neon-pink))' }}>КАПА</span>
            <span className="text-foreground/80 font-light mx-1">|</span>
            <span className="glow-cyan" style={{ color: 'hsl(var(--neon-cyan))' }}>ИМПОРТ</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-foreground/60 hover:text-foreground transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'hsl(var(--neon-pink))' }} />
              </a>
            ))}
          </nav>
          <Button className="rounded-full font-bold gap-2 border text-sm" style={{ background: 'hsl(var(--neon-pink) / 0.15)', borderColor: 'hsl(var(--neon-pink) / 0.5)', color: 'hsl(var(--neon-pink))' }} asChild>
            <a href="#contacts"><Icon name="Download" size={16} />Прайс-лист</a>
          </Button>
        </div>
      </header>

      {/* Marquee */}
      <div className="overflow-hidden py-2.5 border-b" style={{ background: 'hsl(var(--neon-pink) / 0.08)', borderColor: 'hsl(var(--neon-pink) / 0.2)' }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display font-bold text-xs mx-8 flex items-center gap-6 tracking-widest" style={{ color: 'hsl(var(--neon-pink) / 0.8)' }}>
              {m} <span style={{ color: 'hsl(var(--neon-cyan))' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="relative container py-16 md:py-24">
        {/* bg grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(hsl(var(--neon-pink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-pink)) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 border tracking-widest uppercase" style={{ background: 'hsl(var(--neon-cyan) / 0.1)', borderColor: 'hsl(var(--neon-cyan) / 0.4)', color: 'hsl(var(--neon-cyan))' }}>
              🌏 ООО «КАПА Импорт» — оптовый поставщик
            </span>
            <h1 className="font-display font-black leading-[0.92] text-5xl md:text-7xl">
              <span className="text-foreground">ОПТОВЫЕ</span><br />
              <span className="glow-text" style={{ color: 'hsl(var(--neon-pink))' }}>ПОСТАВКИ</span><br />
              <span className="text-foreground/50">В СЕТИ</span>
            </h1>
            <p className="mt-6 text-base text-foreground/50 max-w-md leading-relaxed">
              Прямые контракты с производителями Китая, Вьетнама и Южной Кореи. Наполняем полки федеральных и региональных сетей азиатскими хитами — стабильно и в объёме.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full font-bold text-sm px-8 h-12 border" style={{ background: 'hsl(var(--neon-pink))', color: '#fff', boxShadow: '0 0 24px hsl(var(--neon-pink) / 0.5)', borderColor: 'transparent' }} asChild>
                <a href="#contacts">Запросить прайс</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-bold text-sm px-8 h-12" style={{ background: 'transparent', borderColor: 'hsl(var(--neon-cyan) / 0.5)', color: 'hsl(var(--neon-cyan))' }} asChild>
                <a href="#catalog">Ассортимент</a>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              {[['3', 'страны: КНР, VN, KR'], ['280+', 'позиций (SKU)'], ['от 1', 'паллеты']].map(([a, b], i) => {
                const colors = ['hsl(var(--neon-pink))', 'hsl(var(--neon-cyan))', 'hsl(var(--neon-purple))'];
                return (
                  <div key={b}>
                    <div className="font-display font-black text-3xl" style={{ color: colors[i] }}>{a}</div>
                    <div className="text-xs text-foreground/40 mt-1">{b}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-1 rounded-[2rem]" style={{ background: 'linear-gradient(135deg, hsl(var(--neon-pink)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))', opacity: 0.6, filter: 'blur(2px)' }} />
            <img src={HERO} alt="Оптовые поставки снеков" className="relative rounded-[2rem] w-full object-cover aspect-square" style={{ border: '1px solid hsl(var(--neon-pink) / 0.3)' }} />
            <div className="absolute -top-5 -right-3 font-display font-black text-sm rounded-full w-20 h-20 flex items-center justify-center animate-spin-slow" style={{ background: 'hsl(var(--neon-pink))', boxShadow: '0 0 30px hsl(var(--neon-pink) / 0.7)', color: '#fff' }}>
              B2B
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-5 border-y" style={{ borderColor: 'hsl(var(--neon-purple) / 0.2)', background: 'hsl(var(--neon-purple) / 0.05)' }}>
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-foreground/30 text-xs font-semibold tracking-widest uppercase">Нам доверяют</span>
          {partners.map((p) => (
            <span key={p} className="font-display font-bold text-sm text-foreground/40 hover:text-foreground/70 transition-colors tracking-wider">{p}</span>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container py-16">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-black text-4xl md:text-5xl">АССОРТИМЕНТ</h2>
          <p className="text-foreground/40 max-w-sm text-sm">Категории для полки любой сети. Полный прайс — по запросу.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((p, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-transform" style={{ background: 'hsl(232 30% 12%)', border: `1px solid ${p.accent}33` }}>
              <div className="overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform opacity-80" />
              </div>
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, hsl(232 35% 8%) 30%, transparent 70%)` }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: p.accent }}>{p.tag}</span>
                <h3 className="font-display font-bold text-base mt-1 text-foreground">{p.name}</h3>
                <a href="#contacts" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold hover:gap-2 transition-all" style={{ color: p.accent }}>
                  Запросить прайс <Icon name="ArrowRight" size={14} />
                </a>
              </div>
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ background: p.accent, boxShadow: `0 0 8px ${p.accent}` }} />
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-black text-4xl md:text-5xl">БРЕНДЫ</h2>
          <p className="text-foreground/40 max-w-sm text-sm">Известные марки и азиатские хиты — всё в одном прайсе.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {brandsByCountry.map((group) => (
            <div key={group.country} className="rounded-2xl p-6" style={{ background: 'hsl(232 30% 12%)', border: `1px solid ${group.color}33` }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{group.flag}</span>
                <h3 className="font-display font-black text-xl" style={{ color: group.color }}>{group.country}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.brands.map((b) => (
                  <div key={b.name} className="rounded-xl px-3 py-2" style={{ background: `${group.color}15`, border: `1px solid ${group.color}40` }}>
                    <div className="font-display font-bold text-sm text-foreground">{b.name}</div>
                    <div className="text-xs text-foreground/40">{b.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-16 border-y" style={{ borderColor: 'hsl(var(--neon-pink) / 0.15)', background: 'hsl(var(--neon-pink) / 0.04)' }}>
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <Icon name="Handshake" size={32} style={{ color: 'hsl(var(--neon-pink))' }} />
            <h2 className="font-display font-black text-4xl md:text-5xl">УСЛОВИЯ СОТРУДНИЧЕСТВА</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {terms.map((t, i) => {
              const colors = ['hsl(var(--neon-pink))', 'hsl(var(--neon-purple))', 'hsl(var(--neon-cyan))', 'hsl(var(--neon-blue))'];
              const c = colors[i];
              return (
                <div key={t.t} className="rounded-2xl p-6" style={{ background: 'hsl(232 30% 12%)', border: `1px solid ${c}33` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${c}20`, border: `1px solid ${c}60` }}>
                    <Icon name={t.icon} size={22} style={{ color: c }} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">{t.t}</h3>
                  <p className="text-foreground/40 mt-2 text-sm">{t.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container py-16">
        <h2 className="font-display font-black text-4xl md:text-5xl mb-10">КАК МЫ РАБОТАЕМ</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl p-6 relative" style={{ background: 'hsl(232 30% 12%)', border: `1px solid ${s.color}33` }}>
              <span className="font-display font-black text-5xl" style={{ color: `${s.color}30` }}>{s.n}</span>
              <h3 className="font-display font-bold text-xl mt-2" style={{ color: s.color }}>{s.t}</h3>
              <p className="text-foreground/40 mt-2 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[2rem] p-8 md:p-12 relative overflow-hidden" style={{ background: 'hsl(232 30% 12%)', border: '1px solid hsl(var(--neon-purple) / 0.3)' }}>
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-10 blur-3xl" style={{ background: 'hsl(var(--neon-purple))' }} />
            <h2 className="font-display font-black text-4xl md:text-5xl mb-5">О КОМПАНИИ</h2>
            <p className="text-foreground/60 leading-relaxed">
              ООО «КАПА Импорт» — прямой импортёр и дистрибьютор снеков и напитков из Китая, Вьетнама и Южной Кореи. Работаем с заводами-производителями без посредников, обеспечивая легальный ввоз и полный пакет документов.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'Ship', t: 'Прямые заводы', d: 'Контракты с производителями КНР, VN, KR', c: 'hsl(var(--neon-pink))' },
              { icon: 'BadgeCheck', t: 'Легальный ввоз', d: 'Сертификаты, декларации, маркировка на RU', c: 'hsl(var(--neon-cyan))' },
              { icon: 'Warehouse', t: 'Свой склад', d: 'Товарный запас и быстрая отгрузка', c: 'hsl(var(--neon-purple))' },
              { icon: 'TrendingUp', t: 'Азиатские хиты', d: 'Вирусные товары, поднимающие оборот полки', c: 'hsl(var(--neon-blue))' },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl p-5" style={{ background: 'hsl(232 30% 12%)', border: `1px solid ${f.c}30` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3" style={{ background: `${f.c}15`, borderColor: `${f.c}50` }}>
                  <Icon name={f.icon} size={20} style={{ color: f.c }} />
                </div>
                <h3 className="font-display font-bold text-base text-foreground">{f.t}</h3>
                <p className="text-xs text-foreground/40 mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="delivery" className="container py-16">
        <div className="rounded-[2rem] p-8 md:p-12 relative overflow-hidden" style={{ background: 'hsl(232 30% 12%)', border: '1px solid hsl(var(--neon-cyan) / 0.3)' }}>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'hsl(var(--neon-cyan))' }} />
          <h2 className="font-display font-black text-4xl md:text-5xl mb-10">ЛОГИСТИКА</h2>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              { icon: 'Truck', t: 'Доставка на РЦ', d: 'Отгрузка на распределительные центры сетей', c: 'hsl(var(--neon-cyan))' },
              { icon: 'Map', t: 'По всей России', d: 'Собственная и партнёрская логистика', c: 'hsl(var(--neon-pink))' },
              { icon: 'CalendarClock', t: 'Плановые поставки', d: 'Регулярные отгрузки по графику сети', c: 'hsl(var(--neon-purple))' },
            ].map((d) => (
              <div key={d.t} className="rounded-xl p-5" style={{ background: 'hsl(232 35% 10%)', border: `1px solid ${d.c}25` }}>
                <Icon name={d.icon} size={28} style={{ color: d.c }} className="mb-3" />
                <h3 className="font-display font-bold text-lg text-foreground">{d.t}</h3>
                <p className="text-foreground/40 mt-2 text-sm">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-8">ОТДЕЛ ОПТОВЫХ ПРОДАЖ</h2>
            <div className="space-y-4">
              {[
                { icon: 'Phone', t: '+7 (900) 123-45-67', c: 'hsl(var(--neon-pink))' },
                { icon: 'Mail', t: 'b2b@kapaopt.ru', c: 'hsl(var(--neon-cyan))' },
                { icon: 'MapPin', t: 'Москва, ул. Складская, 7', c: 'hsl(var(--neon-purple))' },
                { icon: 'Building2', t: 'ООО «КАПА Импорт» · работаем по договору', c: 'hsl(var(--neon-blue))' },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ background: `${c.c}15`, borderColor: `${c.c}40` }}>
                    <Icon name={c.icon} size={18} style={{ color: c.c }} />
                  </div>
                  <span className="text-foreground/70 text-sm">{c.t}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {[
                { icon: 'Send', c: 'hsl(var(--neon-cyan))' },
                { icon: 'MessageCircle', c: 'hsl(var(--neon-pink))' },
                { icon: 'Youtube', c: 'hsl(var(--neon-purple))' },
              ].map((s) => (
                <button key={s.icon} className="w-10 h-10 rounded-full flex items-center justify-center border hover:scale-110 transition-transform" style={{ background: `${s.c}15`, borderColor: `${s.c}40` }}>
                  <Icon name={s.icon} size={18} style={{ color: s.c }} />
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] p-8" style={{ background: 'hsl(232 30% 12%)', border: '1px solid hsl(var(--neon-pink) / 0.25)' }}>
            <h3 className="font-display font-bold text-xl mb-5 text-foreground">Запросить прайс и КП</h3>
            <div className="space-y-3">
              {['Название сети / компании', 'Контактное лицо', 'Телефон или e-mail'].map((ph) => (
                <input key={ph} placeholder={ph} className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors" style={{ background: 'hsl(232 35% 10%)', border: '1px solid hsl(var(--neon-pink) / 0.2)' }} />
              ))}
              <textarea placeholder="Интересующие категории и объёмы" rows={3} className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors resize-none" style={{ background: 'hsl(232 35% 10%)', border: '1px solid hsl(var(--neon-pink) / 0.2)' }} />
              <Button className="w-full rounded-full font-bold h-12 text-sm" style={{ background: 'hsl(var(--neon-pink))', color: '#fff', boxShadow: '0 0 24px hsl(var(--neon-pink) / 0.4)' }}>
                Получить коммерческое предложение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: 'hsl(var(--neon-pink) / 0.15)' }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-black text-xl flex items-center gap-1">
            <span className="glow-text" style={{ color: 'hsl(var(--neon-pink))' }}>КАПА</span>
            <span className="text-foreground/30 mx-1">|</span>
            <span className="glow-cyan" style={{ color: 'hsl(var(--neon-cyan))' }}>ИМПОРТ</span>
          </div>
          <p className="text-xs text-foreground/25">© 2026 ООО «КАПА Импорт» · Оптовые поставки в торговые сети</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
