import React from 'react'
import slider1 from './assets/images/1_slider.png'
import storyImg from './assets/images/story.png'
const heroSlides = [
  {
    title: 'Premium Dry Fruits from Jammu',
    subtitle: 'Authentic quality, fresh packaging, and fast delivery.',
    image: slider1,
    buttonText: 'Shop Collection',
  },
  {
    title: 'Handpicked Nuts with Pure Flavor',
    subtitle: 'From trusted farmers to your home with care.',
    image:
      'https://images.unsplash.com/photo-1600181956655-3a8f5dbb8b1f?auto=format&fit=crop&w=1200&q=80',
    buttonText: 'Explore Products',
  },
]

const products = [
  {
    name: 'Almonds',
    price: '₹699 / kg',
    description: 'Premium California almonds with rich texture.',
    image:
      'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=520&q=80',
  },
  {
    name: 'Walnuts',
    price: '₹899 / kg',
    description: 'Fresh Kashmir walnuts full of natural goodness.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=520&q=80',
  },
  {
    name: 'Pistachios',
    price: '₹1,199 / kg',
    description: 'Roasted pistachios, crunchy and flavorful.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=520&q=80',
  },
  {
    name: 'Saffron',
    price: '₹399 / g',
    description: 'Pure Kashmiri saffron for premium aroma.',
    image:
      'https://images.unsplash.com/photo-1549662872-0ca81f9bb0c9?auto=format&fit=crop&w=520&q=80',
  },
]

const features = [
  {
    title: 'Authentic Source',
    description: 'Handpicked directly from trusted farmers in Jammu.',
    icon: '🌿',
  },
  {
    title: 'Premium Quality',
    description: 'Every batch is carefully inspected for the best quality.',
    icon: '✨',
  },
  {
    title: 'Fresh Packaging',
    description: 'Packed after order confirmation to preserve freshness.',
    icon: '📦',
  },
  {
    title: 'Fast Delivery',
    description: 'Delivered fresh and safe across India.',
    icon: '🚚',
  },
]

const processSteps = [
  {
    title: 'Farm',
    description: 'Sourced from the best orchards in Jammu.',
    icon: '🌾',
  },
  {
    title: 'Selection',
    description: 'Handpicked & sorted by experts.',
    icon: '🧑‍🌾',
  },
  {
    title: 'Quality Check',
    description: 'Strict quality inspections.',
    icon: '✔️',
  },
  {
    title: 'Packing',
    description: 'Hygienically packed for freshness.',
    icon: '📦',
  },
  {
    title: 'Your Home',
    description: 'Delivered with care to your doorstep.',
    icon: '🏠',
  },
]

function Feature({ text }) {
  return (
    <div className="rounded-full border border-[#6D4425]/20 bg-white/80 lg:px-4 lg:py-2 px-2 py-1 lg:text-sm text-nowrap text-xs font-medium text-[#6D4425] shadow-sm">
      {text}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-brand-800 text-xl font-semibold">House of Charly</p>
            <span className="text-sm text-slate-500">The Choice of Every Home</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex text-slate-600">
            <a href="#home" className="hover:text-brand-700">
              Home
            </a>
            <a href="#products" className="hover:text-brand-700">
              Products
            </a>
            <a href="#story" className="hover:text-brand-700">
              Our Story
            </a>
            <a href="#contact" className="hover:text-brand-700">
              Contact
            </a>
          </nav>
          <button className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-700/20 hover:bg-brand-800">
            Order Now
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl ">
        <section id="home" className="grid  items-center">
          {/* <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm text-brand-700 shadow-sm">
              Direct from Jammu • No Artificial Processing • Premium Quality
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Authentic Dry Fruits Sourced from Jammu.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Bringing you the finest dry fruits & nuts, handpicked from the pristine valleys of Jammu.
            </p>
                                 <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-700 px-7 py-3 text-white shadow-lg shadow-brand-700/20 hover:bg-brand-800">
                Shop Collection
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-7 py-3 text-slate-700 hover:border-brand-400 hover:text-brand-700">
                Know Our Story
              </button>
            </div>
          </div> */}
          {/* <div className="rounded-[2rem] bg-brand-900/5 shadow-soft">
            <img src={heroSlides[slideIndex].image} alt="Hero" className="h-[420px] w-full  object-cover shadow-xl" /> */}
          {/* <div className="mt-6 flex items-center justify-between gap-3">
              <button onClick={prevSlide} className="rounded-full bg-white/90 px-4 py-2 text-brand-700 shadow-sm hover:bg-white">
                Prev
              </button>
              <div className="space-y-1 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Featured Story</p>
                <p className="text-lg font-semibold text-slate-900">{heroSlides[slideIndex].title}</p>
              </div>
              <button onClick={nextSlide} className="rounded-full bg-brand-700 px-4 py-2 text-white shadow-sm hover:bg-brand-800">
                Next
              </button>
            </div> */}
          {/* </div> */}
          <div className="relative overflow-hidden shadow-soft">
            <img
              src={heroSlides[0].image}
              alt="Hero"
              className="h-[420px] lg:h-[420px] w-full object-cover"
            />

            {/* Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f2ea]/55 via-[#f8f2ea]/20 to-transparent" />

            {/* Content */}
            <div className="absolute -left-2 inset-0 flex items-center">
              <div className="max-w-lg px-6 sm:px-10 lg:px-16">
                {/* <p className="mb-2 text-[9px] font-semibold tracking-[0.3em] uppercase text-amber-900">
                  House of Charly
                </p> */}

                <h1 className="font-serif text-2xl leading-tight text-[#2E1F18] sm:text-3xl lg:text-4xl">
                  Authentic Dry Fruits
                  <br />
                  Sourced from Jammu.
                </h1>

                <p className="mt-3 max-w-md text-xs leading-6 text-neutral-700 sm:text-sm">
                  Bringing you the finest dry fruits & nuts, handpicked directly from trusted farms
                  in Jammu. Freshly packed and delivered with care.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                  <button className="rounded-full bg-[#6D4425] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#55341c] sm:px-5 sm:py-2.5">
                    Shop Collection
                  </button>

                  <button className="rounded-full border border-[#6D4425] bg-white/70 px-4 py-2 text-xs font-medium text-[#6D4425] backdrop-blur sm:px-5 sm:py-2.5">
                    Know Our Story
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-2 lg:left-10 bottom-5 mt-6 flex flex-wrap gap-2 sm:gap-3 ">
              <Feature text="Direct from Jammu" />
              <Feature text="No Artificial Processing" />
              <Feature text="Premium Quality" />
            </div>
          </div>
        </section>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Trusted by Every Home</h3>
        </div>
        <section className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 px-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-sm text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="products" className="mt-12 lg:px-10 px-2">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-700">
                Featured Dry Fruits
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Shop our premium collection
              </h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft"
              >
                <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
                <div className="flex flex-col gap-1 px-4 py-3">
                  <p className="text-[16px] uppercase tracking-[0.32em] text-brand-700">
                    {product.name}
                  </p>
                  <p className=" text-[12px] text-slate-600 truncate">{product.description}</p>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-brand-700">{product.price}</p>
                  </div>
                  <button className=" mt-4 w-full rounded-lg bg-brand-700 px-3 py-2 text-[11px] font-semibold text-white shadow-sm hover:bg-brand-800">
                    Shop Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="story"
          className="mt-10 rounded-2xl bg-brand-50 px-2 py-12 shadow-soft sm:px-12 lg:px-10 flex flex-col lg:flex-row gap-4"
        >
          <div className="flex-1">
            <img src={storyImg} alt="Our Story" className="w-full h-auto  rounded-sm" />
          </div>
          <div className="grid gap-8 lg:items-center flex-1">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-700">Our Story</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Every great home deserves food it can trust.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
                House of Charly began with one simple mission—bring authentic dry fruits directly
                from Jammu to families without compromising quality. Every product is sourced
                carefully, packed freshly, and delivered with honesty.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-2xl font-semibold text-brand-700">120k+</p>
                  <p className="mt-2 text-sm text-slate-600">Happy families served across India.</p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-2xl font-semibold text-brand-700">4.9/5</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Average customer satisfaction rating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mt-14 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-700">
                From Jammu to Your Home
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                The journey of every dry fruit batch.
              </h3>
            </div>
            <div className="grid gap-4 text-center sm:grid-cols-5 sm:items-center">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="space-y-3 rounded-2xl border border-slate-200 bg-brand-50 p-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    {step.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="text-xs leading-5 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-2xl bg-white p-10 shadow-soft lg:px-10 px-2">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-700">Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Stay in touch for new arrivals and offers.
              </h3>
            </div>
            <button className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-800">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
