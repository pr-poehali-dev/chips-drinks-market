import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO = 'https://cdn.poehali.dev/projects/aa4a8a27-ddba-4aed-8f31-783dbea74182/files/97f3eb3e-3c95-4761-a27d-49b86b8235ec.jpg';
const CHIP = 'https://cdn.poehali.dev/projects/aa4a8a27-ddba-4aed-8f31-783dbea74182/files/9755dccc-0c52-44fb-a97f-fef77c2f093c.jpg';
const SODA = 'https://cdn.poehali.dev/projects/aa4a8a27-ddba-4aed-8f31-783dbea74182/files/2d65ddd8-0ebb-490f-8f4e-f20bf829cd98.jpg';

const nav = [
  { label: 'Главная', href: '#home' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Акции', href: '#sale' },
  { label: 'О нас', href: '#about' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

const products = [
  { name: 'Takis Fuego', tag: 'Мексика', price: 390, img: CHIP, color: 'bg-[hsl(var(--lime))]' },
  { name: 'Mtn Dew Baja', tag: 'США', price: 290, img: SODA, color: 'bg-[hsl(var(--cyan))]' },
  { name: 'Lays Ketchup', tag: 'Канада', price: 350, img: CHIP, color: 'bg-accent' },
  { name: 'Ramune Original', tag: 'Япония', price: 340, img: SODA, color: 'bg-primary text-primary-foreground' },
  { name: 'Cheetos Flamin', tag: 'США', price: 420, img: CHIP, color: 'bg-[hsl(var(--lime))]' },
  { name: 'Fanta Exotic', tag: 'Германия', price: 260, img: SODA, color: 'bg-accent' },
  { name: 'Doritos Blaze', tag: 'США', price: 410, img: CHIP, color: 'bg-[hsl(var(--cyan))]' },
  { name: 'A&W Root Beer', tag: 'США', price: 310, img: SODA, color: 'bg-primary text-primary-foreground' },
];

const sales = [
  { name: 'Pringles Box x6', old: 2400, price: 1490, off: '-38%', img: CHIP },
  { name: 'Pepsi Cherry 12шт', old: 3600, price: 2290, off: '-36%', img: SODA },
  { name: 'Snack Mix Party', old: 1900, price: 990, off: '-48%', img: CHIP },
];

const Index = () => {
  const [cart, setCart] = useState(0);
  const marquee = ['ИМПОРТ ИЗ 20 СТРАН', 'ДОСТАВКА ЗА 60 МИН', 'НОВИНКИ КАЖДУЮ НЕДЕЛЮ', 'ХИТЫ TIKTOK', 'ОСТРО • СЛАДКО • ВКУСНО'];

  return (
    <div className="min-h-screen font-body text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-display font-extrabold text-2xl tracking-tight flex items-center gap-2">
            <span className="bg-primary text-primary-foreground px-2 rotate-[-4deg] inline-block">SNACK</span>
            <span>RUSH</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-primary transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <Button className="rounded-full border-2 border-foreground bg-accent text-accent-foreground hover:bg-accent shadow-pop-sm font-bold gap-2">
            <Icon name="ShoppingCart" size={18} />
            {cart}
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
              🔥 Снеки, которых нет в обычных магазинах
            </span>
            <h1 className="font-display font-extrabold leading-[0.95] text-5xl md:text-7xl">
              ВКУС, <span className="text-primary text-stroke text-background">КОТОРЫЙ</span> ВЗРЫВАЕТ
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Импортные чипсы и газировка со всего мира. Острые, редкие и вирусные вкусы — прямо к твоей двери.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary shadow-pop font-bold text-base h-13 px-8" asChild>
                <a href="#catalog">Смотреть каталог</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground bg-background hover:bg-accent shadow-pop-sm font-bold text-base h-13 px-8" asChild>
                <a href="#sale">🏷️ Акции</a>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              {[['20+', 'стран'], ['500+', 'вкусов'], ['60 мин', 'доставка']].map(([a, b]) => (
                <div key={b}>
                  <div className="font-display font-extrabold text-3xl text-primary">{a}</div>
                  <div className="text-sm text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-accent border-2 border-foreground rounded-[2rem] rotate-3" />
            <img src={HERO} alt="Импортные снеки" className="relative rounded-[2rem] border-2 border-foreground w-full object-cover aspect-square shadow-pop" />
            <div className="absolute -top-6 -right-4 bg-primary text-primary-foreground font-display font-extrabold text-xl rounded-full w-24 h-24 flex items-center justify-center border-2 border-foreground animate-spin-slow">
              NEW
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container py-14">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">КАТАЛОГ</h2>
          <p className="text-muted-foreground max-w-sm">Самые вирусные снеки недели. Хватай, пока не разобрали.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div key={i} className={`group ${p.color} border-2 border-foreground rounded-2xl p-4 shadow-pop-sm hover:-translate-y-1.5 transition-transform`}>
              <div className="bg-background rounded-xl border-2 border-foreground overflow-hidden mb-3">
                <img src={p.img} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-xs font-bold uppercase opacity-70">{p.tag}</span>
              <h3 className="font-display font-bold text-lg leading-tight">{p.name}</h3>
              <div className="flex items-center justify-between mt-3">
                <span className="font-display font-extrabold text-xl">{p.price}₽</span>
                <button onClick={() => setCart((c) => c + 1)} className="bg-foreground text-background rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Plus" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale */}
      <section id="sale" className="py-16 bg-primary text-primary-foreground border-y-2 border-foreground relative overflow-hidden">
        <div className="container relative">
          <div className="flex items-center gap-3 mb-10">
            <Icon name="Flame" size={40} />
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">ГОРЯЧИЕ АКЦИИ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sales.map((s, i) => (
              <div key={i} className="bg-background text-foreground border-2 border-foreground rounded-2xl p-5 shadow-pop relative">
                <span className="absolute -top-4 -left-3 bg-[hsl(var(--lime))] text-foreground border-2 border-foreground font-display font-extrabold rounded-full px-4 py-1 rotate-[-8deg]">
                  {s.off}
                </span>
                <div className="bg-muted rounded-xl border-2 border-foreground overflow-hidden mb-4">
                  <img src={s.img} alt={s.name} className="w-full aspect-[4/3] object-cover" />
                </div>
                <h3 className="font-display font-bold text-xl">{s.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-display font-extrabold text-2xl text-primary">{s.price}₽</span>
                  <span className="line-through text-muted-foreground">{s.old}₽</span>
                </div>
                <Button onClick={() => setCart((c) => c + 1)} className="w-full mt-4 rounded-full border-2 border-foreground bg-accent text-accent-foreground hover:bg-accent font-bold">
                  В корзину
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-accent border-2 border-foreground rounded-[2rem] p-8 md:p-12 shadow-pop">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-5">О НАС</h2>
            <p className="text-lg text-foreground/80">
              SNACK RUSH — команда охотников за вкусом. Мы находим редкие снеки по всему миру и привозим их в Россию,
              чтобы ты пробовал то, о чём говорит весь интернет.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: 'Globe', t: 'Со всего мира', d: 'США, Япония, Корея, Мексика и ещё 16 стран' },
              { icon: 'BadgeCheck', t: 'Только оригинал', d: 'Проверенные поставщики, честные сроки' },
              { icon: 'Truck', t: 'Быстро', d: 'Доставим по городу за час' },
              { icon: 'Heart', t: 'С любовью', d: 'Пробуем всё сами перед продажей' },
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

      {/* Delivery */}
      <section id="delivery" className="container py-16">
        <div className="bg-[hsl(var(--cyan))] border-2 border-foreground rounded-[2rem] p-8 md:p-12 shadow-pop">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-10">ДОСТАВКА</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Bike', t: 'Курьер за 60 мин', d: 'По городу — 199₽, бесплатно от 2000₽' },
              { icon: 'Package', t: 'Пункты выдачи', d: 'Забирай сам из 40+ точек рядом' },
              { icon: 'MapPin', t: 'По всей России', d: 'СДЭК и Почта — 2–5 дней' },
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
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">КОНТАКТЫ</h2>
            <div className="space-y-4">
              {[
                { icon: 'Phone', t: '+7 (900) 123-45-67' },
                { icon: 'Mail', t: 'hello@snackrush.ru' },
                { icon: 'MapPin', t: 'Москва, ул. Вкусная, 7' },
                { icon: 'Clock', t: 'Ежедневно 10:00 — 23:00' },
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
              {['Send', 'Instagram', 'Youtube'].map((s) => (
                <button key={s} className="bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name={s} size={20} />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-background border-2 border-foreground rounded-[2rem] p-8 shadow-pop">
            <h3 className="font-display font-bold text-2xl mb-5">Напиши нам 👋</h3>
            <div className="space-y-4">
              <input placeholder="Имя" className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors" />
              <input placeholder="Телефон" className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors" />
              <textarea placeholder="Сообщение" rows={3} className="w-full border-2 border-foreground rounded-xl px-4 py-3 bg-muted focus:outline-none focus:bg-background transition-colors resize-none" />
              <Button className="w-full rounded-full border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary shadow-pop-sm font-bold h-12">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-10 border-t-2 border-foreground">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-extrabold text-2xl">
            <span className="bg-primary text-primary-foreground px-2 rotate-[-4deg] inline-block">SNACK</span> RUSH
          </div>
          <p className="text-sm text-background/60">© 2026 SNACK RUSH. Вкус со всего мира.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
