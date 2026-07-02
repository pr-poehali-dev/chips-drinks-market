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
  { name: 'Снеки из Кореи', tag: '🇰🇷 80+ SKU', img: CHIP, color: 'bg-[hsl(var(--lime))]' },
  { name: 'Напитки из Китая', tag: '🇨🇳 90+ SKU', img: SODA, color: 'bg-[hsl(var(--cyan))]' },
  { name: 'Снеки из Вьетнама', tag: '🇻🇳 50+ SKU', img: CHIP, color: 'bg-accent' },
  { name: 'Азиатские лимитки', tag: '🌏 60+ SKU', img: SODA, color: 'bg-primary text-primary-foreground' },
];

const terms = [
  { icon: 'Boxes', t: 'Отгрузка от 1 паллеты', d: 'Гибкий объём под сеть любого масштаба' },
  { icon: 'Percent', t: 'Оптовые цены', d: 'Прогрессивная скидка от объёма заказа' },
  { icon: 'FileText', t: 'Отсрочка платежа', d: 'До 45 дней для проверенных сетей' },
  { icon: 'ShieldCheck', t: 'Все документы', d: 'Сертификаты, декларации, ЭДО' },
];

const steps = [
  { n: '01', t: 'Заявка', d: 'Оставляете запрос — получаете актуальный прайс' },
  { n: '02', t: 'КП и договор', d: 'Согласуем ассортимент, цены и условия' },
  { n: '03', t: 'Отгрузка', d: 'Формируем и доставляем партию на ваш РЦ' },
  { n: '04', t: 'Регулярность', d: 'Плановые поставки по графику сети' },
];

const partners = ['РИТЕЙЛ+', 'МЕГАМАРТ', 'ФРЕШ', 'СЕТЬ24', 'GLOBUS', 'СНЕК-МАРКЕТ'];

const brandsByCountry = [
  {
    flag: '🇨🇳',
    country: 'Китай',
    color: 'bg-[hsl(var(--cyan))]',
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
    flag: '🇰🇷',
    country: 'Южная Корея',
    color: 'bg-[hsl(var(--lime))]',
    brands: [
      { name: 'Harim', cat: 'Лапша' },
    ],
  },
  {
    flag: '🇻🇳',
    country: 'Вьетнам',
    color: 'bg-accent',
    brands: [
      { name: 'Vifon', cat: 'Лапша' },
    ],
  },
];

const Index = () => {
  const marquee = ['🇰🇷 ЮЖНАЯ КОРЕЯ', '🇨🇳 КИТАЙ', '🇻🇳 ВЬЕТНАМ', 'ПРЯМЫЕ КОНТРАКТЫ', 'ОТ 1 ПАЛЛЕТЫ', 'ПОСТАВКИ ПО ВСЕЙ РФ', 'ЭДО И СЕРТИФИКАТЫ'];

  return (
    <div className="min-h-screen font-body text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-display font-extrabold text-2xl tracking-tight flex items-center gap-2">
            <span className="bg-primary text-primary-foreground px-2 rotate-[-4deg] inline-block">КАПА</span>
            <span>ИМПОРТ</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-primary transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <Button className="rounded-full border-2 border-foreground bg-accent text-accent-foreground hover:bg-accent shadow-pop-sm font-bold gap-2" asChild>
            <a href="#contacts"><Icon name="Download" size={18} />Прайс-лист</a>
          </Button>
        </div>
      </header>

      {/* Marquee */}
      <div className="bg-primary text-primary-foreground border-b-2 border-foreground py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display font-bold text-sm mx-6 flex items-center gap-6">
              {m} <Icon name="Zap" size={16} />
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="relative container py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-[hsl(var(--lime))] border-2 border-foreground rounded-full px-4 py-1 text-sm font-bold mb-6 shadow-pop-sm">
              🌏 ООО «КАПА Импорт» — оптовый поставщик азиатских снеков и напитков
            </span>
            <h1 className="font-display font-extrabold leading-[0.95] text-5xl md:text-7xl">
              ОПТОВЫЕ <span className="text-primary text-stroke text-background">ПОСТАВКИ</span> В СЕТИ
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Прямые контракты с производителями Китая, Вьетнама и Южной Кореи. Наполняем полки федеральных и региональных сетей азиатскими хитами — стабильно и в объёме.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary shadow-pop font-bold text-base h-13 px-8" asChild>
                <a href="#contacts">Запросить прайс</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground bg-background hover:bg-accent shadow-pop-sm font-bold text-base h-13 px-8" asChild>
                <a href="#catalog">Ассортимент</a>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              {[['3', 'страны: КНР, VN, KR'], ['280+', 'позиций (SKU)'], ['от 1', 'паллеты отгрузка']].map(([a, b]) => (
                <div key={b}>
                  <div className="font-display font-extrabold text-3xl text-primary">{a}</div>
                  <div className="text-sm text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-accent border-2 border-foreground rounded-[2rem] rotate-3" />
            <img src={HERO} alt="Оптовые поставки снеков" className="relative rounded-[2rem] border-2 border-foreground w-full object-cover aspect-square shadow-pop" />
            <div className="absolute -top-6 -right-4 bg-primary text-primary-foreground font-display font-extrabold text-lg rounded-full w-24 h-24 flex items-center justify-center border-2 border-foreground animate-spin-slow text-center leading-tight">
              B2B
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-foreground text-background py-6 border-y-2 border-foreground overflow-hidden">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-background/60 text-sm font-semibold">Нам доверяют:</span>
          {partners.map((p) => (
            <span key={p} className="font-display font-extrabold text-lg opacity-80">{p}</span>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container py-14">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">АССОРТИМЕНТ</h2>
          <p className="text-muted-foreground max-w-sm">Категории для полки любой сети. Полный прайс — по запросу.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((p, i) => (
            <div key={i} className={`group ${p.color} border-2 border-foreground rounded-2xl p-4 shadow-pop-sm hover:-translate-y-1.5 transition-transform`}>
              <div className="bg-background rounded-xl border-2 border-foreground overflow-hidden mb-3">
                <img src={p.img} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-xs font-bold uppercase opacity-70">{p.tag}</span>
              <h3 className="font-display font-bold text-lg leading-tight">{p.name}</h3>
              <a href="#contacts" className="mt-3 inline-flex items-center gap-1 font-bold text-sm hover:gap-2 transition-all">
                Запросить прайс <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="container py-14">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">БРЕНДЫ</h2>
          <p className="text-muted-foreground max-w-sm">Известные марки и азиатские хиты — всё в одном прайсе.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {brandsByCountry.map((group) => (
            <div key={group.country} className={`${group.color} border-2 border-foreground rounded-2xl p-6 shadow-pop-sm`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{group.flag}</span>
                <h3 className="font-display font-extrabold text-2xl">{group.country}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.brands.map((b) => (
                  <div key={b.name} className="bg-background border-2 border-foreground rounded-xl px-4 py-2 shadow-pop-sm">
                    <div className="font-display font-bold text-base">{b.name}</div>
                    <div className="text-xs text-muted-foreground">{b.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-16 bg-primary text-primary-foreground border-y-2 border-foreground">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <Icon name="Handshake" size={40} />
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">УСЛОВИЯ СОТРУДНИЧЕСТВА</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {terms.map((t) => (
              <div key={t.t} className="bg-background text-foreground border-2 border-foreground rounded-2xl p-6 shadow-pop">
                <div className="bg-accent text-accent-foreground w-12 h-12 rounded-xl flex items-center justify-center border-2 border-foreground mb-4">
                  <Icon name={t.icon} size={24} />
                </div>
                <h3 className="font-display font-bold text-xl">{t.t}</h3>
                <p className="text-muted-foreground mt-2">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container py-16">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-10">КАК МЫ РАБОТАЕМ</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-2 border-foreground rounded-2xl p-6 bg-background shadow-pop-sm relative">
              <span className="font-display font-extrabold text-5xl text-primary/20">{s.n}</span>
              <h3 className="font-display font-bold text-xl mt-2">{s.t}</h3>
              <p className="text-muted-foreground mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-accent border-2 border-foreground rounded-[2rem] p-8 md:p-12 shadow-pop">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-5">О КОМПАНИИ</h2>
            <p className="text-lg text-foreground/80">
              ООО «КАПА Импорт» — прямой импортёр и дистрибьютор снеков и напитков из Китая, Вьетнама и Южной Кореи. Работаем с заводами-производителями без посредников, обеспечивая легальный ввоз и полный пакет документов.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: 'Ship', t: 'Прямые заводы', d: 'Контракты с производителями КНР, VN, KR' },
              { icon: 'BadgeCheck', t: 'Легальный ввоз', d: 'Сертификаты, декларации, маркировка на RU' },
              { icon: 'Warehouse', t: 'Свой склад', d: 'Товарный запас и быстрая отгрузка' },
              { icon: 'TrendingUp', t: 'Азиатские хиты', d: 'Вирусные товары, поднимающие оборот полки' },
            ].map((f) => (
              <div key={f.t} className="border-2 border-foreground rounded-2xl p-5 bg-background shadow-pop-sm">
                <div className="bg-primary text-primary-foreground w-11 h-11 rounded-xl flex items-center justify-center border-2 border-foreground mb-3">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className="font-display font-bold text-lg">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="delivery" className="container py-16">
        <div className="bg-[hsl(var(--cyan))] border-2 border-foreground rounded-[2rem] p-8 md:p-12 shadow-pop">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-10">ЛОГИСТИКА</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Truck', t: 'Доставка на РЦ', d: 'Отгрузка на распределительные центры сетей' },
              { icon: 'Map', t: 'По всей России', d: 'Собственная и партнёрская логистика' },
              { icon: 'CalendarClock', t: 'Плановые поставки', d: 'Регулярные отгрузки по графику сети' },
            ].map((d) => (
              <div key={d.t} className="bg-background border-2 border-foreground rounded-2xl p-6 shadow-pop-sm">
                <Icon name={d.icon} size={30} className="mb-3" />
                <h3 className="font-display font-bold text-xl">{d.t}</h3>
                <p className="text-muted-foreground mt-2">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">ОТДЕЛ ОПТОВЫХ ПРОДАЖ</h2>
            <div className="space-y-4">
              {[
                { icon: 'Phone', t: '+7 (900) 123-45-67' },
                { icon: 'Mail', t: 'b2b@snackopt.ru' },
                { icon: 'MapPin', t: 'Москва, ул. Складская, 7' },
                { icon: 'Building2', t: 'ООО «КАПА Импорт» · работаем по договору' },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground w-11 h-11 rounded-xl flex items-center justify-center border-2 border-foreground">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <span className="font-semibold text-lg">{c.t}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {['Send', 'MessageCircle', 'Youtube'].map((s) => (
                <button key={s} className="bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name={s} size={20} />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-background border-2 border-foreground rounded-[2rem] p-8 shadow-pop">
            <h3 className="font-display font-bold text-2xl mb-5">Запросить прайс и КП 👋</h3>
            <div className="space-y-4">
              <input placeholder="Название сети / компании" className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors" />
              <input placeholder="Контактное лицо" className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors" />
              <input placeholder="Телефон или e-mail" className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors" />
              <textarea placeholder="Интересующие категории и объёмы" rows={3} className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors resize-none" />
              <Button className="w-full rounded-full border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary shadow-pop-sm font-bold h-12">
                Получить коммерческое предложение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-10 border-t-2 border-foreground">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-extrabold text-2xl">
            <span className="bg-primary text-primary-foreground px-2 rotate-[-4deg] inline-block">КАПА</span> ИМПОРТ
          </div>
          <p className="text-sm text-background/60">© 2026 ООО «КАПА Импорт» · Оптовые поставки в торговые сети</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;