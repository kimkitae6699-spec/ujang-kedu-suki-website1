/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  ChevronRight, 
  Star, 
  MapPin, 
  Clock, 
  Instagram, 
  CheckCircle2, 
  Flame, 
  CreditCard,
  Banknote,
  QrCode
} from 'lucide-react';

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-8 tracking-wide uppercase">
        <Flame className="w-4 h-4" />
        <span>Fresh fried every order • Street snack favorit</span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-stone-900 mb-6 uppercase leading-[0.9]">
        Udang Keju <br/>
        <span className="text-orange-600">Crispy Premium</span> <br/>
        Street Price
      </h1>
      <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl font-medium">
        Udang asli, keju lumer, digoreng fresh saat order.
      </p>
      <div className="text-4xl font-black text-stone-900 mb-12 bg-stone-100 px-8 py-4 rounded-3xl border-2 border-stone-200">
        3 PCS – 10K
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="https://wa.me/6285739512536" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-all hover:scale-105 shadow-xl shadow-orange-600/30">
          ORDER SEKARANG
          <Phone className="w-5 h-5 ml-2" />
        </a>
        <a href="#menu" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-stone-900 bg-white border-2 border-stone-200 hover:border-stone-300 transition-colors">
          Lihat Menu
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Udang asli terasa",
    "Crispy coating premium",
    "Keju lumer di dalam",
    "Fresh fried saat order"
  ];
  return (
    <div className="bg-stone-900 text-stone-100 py-8 border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-orange-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-stone-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualCraving() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="/foto1.png" alt="Crispy Udang Keju" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-stone-900 tracking-tight leading-tight">Street Food <br/><span className="text-orange-600">Rasa Premium</span></h2>
            <p className="text-2xl text-stone-600 mb-10 leading-relaxed">
              Udang juicy, keju lumer, coating crispy golden. Setiap porsi digoreng saat kamu order.
            </p>
            <ul className="space-y-6">
              {[
                "Real shrimp – udang asli terasa",
                "Ultra crispy – tekstur crunchy setiap gigitan",
                "Cheese melt – keju lumer di dalam"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold text-stone-800">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-32 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">Menu Kami</h2>
          <p className="text-xl text-stone-600">Pilih porsi sesuai selera kamu.</p>
        </div>
        
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:shadow-xl transition-all">
            <div>
              <h3 className="text-3xl font-black text-stone-900 mb-3">Udang Keju</h3>
              <p className="text-lg text-stone-600 mb-4">Crispy golden coating dengan keju lumer di dalam.</p>
              <div className="inline-block px-4 py-2 bg-stone-100 text-stone-800 text-sm font-black tracking-widest uppercase rounded-xl">3 PCS</div>
            </div>
            <div className="text-right shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-6">
              <div className="text-4xl font-black text-orange-600">10K</div>
              <a href="https://wa.me/6285739512536?text=Halo,%20saya%20mau%20pesan%20Udang%20Keju%203%20PCS" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-full text-white bg-stone-900 hover:bg-stone-800 transition-colors">
                Order
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-stone-900 p-10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest">
              Best Value
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-3">Combo Box</h3>
              <p className="text-lg text-stone-400 mb-4">Perfect untuk sharing bareng teman atau keluarga.</p>
              <div className="inline-block px-4 py-2 bg-stone-800 text-stone-200 text-sm font-black tracking-widest uppercase rounded-xl">10 PCS</div>
            </div>
            <div className="text-right shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-6">
              <div className="text-4xl font-black text-orange-500">30K</div>
              <a href="https://wa.me/6285739512536?text=Halo,%20saya%20mau%20pesan%20Combo%20Box%2010%20PCS" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-full text-stone-900 bg-white hover:bg-stone-100 transition-colors">
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { text: "Serius ini enak banget. Crispy + kejunya mantap." },
    { text: "Harga 10K tapi rasanya kayak snack cafe." },
    { text: "Udangnya kerasa banget." }
  ];
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-20 text-stone-900 tracking-tight">Kata Mereka</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-xl text-stone-800 font-medium leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="py-32 bg-stone-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Instagram className="w-16 h-16 mx-auto mb-8 text-orange-500" />
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Follow Us on Instagram</h2>
        <a href="https://instagram.com/ujangkedusuki_mataram" target="_blank" rel="noreferrer" className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors">
          @ujangkedusuki_mataram
        </a>
      </div>
      
      <div className="flex gap-6 px-4 overflow-x-auto pb-8 snap-x hide-scrollbar">
        {[
          { alt: "Udang Keju Premium", src: "/foto1.png" },
          { alt: "Crispy Shrimp", src: "/foto2.png" },
          { alt: "Street Food Vibe", src: "/foto3.png" },
          { alt: "Golden Coating", src: "/foto4.png" }
        ].map((item, i) => (
          <div key={i} className="shrink-0 w-72 h-72 md:w-96 md:h-96 relative rounded-[2rem] overflow-hidden snap-center group">
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Instagram className="w-12 h-12 text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="py-32 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Location */}
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-stone-200">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-stone-900 mb-8">Lokasi & Jam Buka</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-stone-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-bold text-stone-900 mb-1">Mataram</p>
                  <p className="text-stone-500">Kunjungi outlet kami</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <Clock className="w-6 h-6 text-stone-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-bold text-stone-900 mb-1">16.00 – 23.00</p>
                  <p className="text-stone-500">Buka setiap hari</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-stone-200">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-stone-900 mb-8">Metode Pembayaran</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 px-8 py-6 bg-stone-50 rounded-2xl border border-stone-100">
                <Banknote className="w-8 h-8 text-stone-600" />
                <span className="text-xl font-bold text-stone-900">Cash</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-6 bg-stone-50 rounded-2xl border border-stone-100">
                <QrCode className="w-8 h-8 text-stone-600" />
                <span className="text-xl font-bold text-stone-900">QRIS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-40 bg-orange-600 text-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Lagi lapar?</h2>
        <p className="text-2xl md:text-3xl mb-16 text-orange-100 font-medium">Udang keju panas siap digoreng untuk kamu.</p>
        <a href="https://wa.me/6285739512536" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-12 py-6 text-2xl font-black rounded-full text-orange-600 bg-white hover:bg-stone-100 transition-transform hover:scale-105 shadow-2xl shadow-black/20">
          ORDER SEKARANG
          <Phone className="w-8 h-8 ml-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-white text-2xl font-black mb-2 tracking-tight">UjangKedu Suki</h4>
          <p className="text-stone-500 font-medium">Premium Street Snack</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <a href="https://instagram.com/ujangkedusuki_mataram" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
            <Instagram className="w-6 h-6" />
            <span className="font-medium">@ujangkedusuki_mataram</span>
          </a>
          <a href="https://wa.me/6285739512536" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <span className="font-medium">085739512536</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-200">
      <Hero />
      <TrustBar />
      <VisualCraving />
      <Menu />
      <Testimonials />
      <InstagramSection />
      <InfoSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
