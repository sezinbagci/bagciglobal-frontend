export default function HomePage() {
  return (
    <div className="space-y-32 pb-32">
      {/* HERO SECTION */}
      <section className="w-full py-32" style={{ backgroundColor: "#06273a" }}>
  <div className="max-w-5xl mx-auto text-center px-6" style={{ color: "#f3f3f3" }}>

    <p className="uppercase tracking-widest text-sm opacity-80">
      UK REAL ESTATE INVESTMENT
    </p>

    <h1 className="mt-6 text-5xl font-bold leading-tight">
      Bagci& PKR Regional Investment ile <br /> Güvenilir Gayrimenkul Yatırımları
    </h1>

    <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
      İngiltere’de yüksek getirili, kurumsal yönetilen projelere erişim sağlayın.
      Yatırımcılar için kişiselleştirilmiş ödeme planları, proje analizi ve uçtan uca danışmanlık.
    </p>

    <div className="mt-10 flex items-center justify-center gap-4">

      <a
        href="/projects"
        className="px-6 py-3 rounded-lg font-semibold transition"
        style={{
          backgroundColor: "#f3f3f3",
          color: "#06273a",
        }}
      >
        Projelere Göz At
      </a>

      <a
        href="/contact"
        className="px-6 py-3 rounded-lg font-semibold transition shadow-lg"
        style={{
          backgroundColor: "#b29371",
          color: "#06273a",
        }}
      >
        İletişime Geç
      </a>

    </div>

  </div>
</section>


      {/* WHY SEZIN - Kurumsal Bölüm */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-12">
          Neden Bagci& PKR Regional Investment?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Kurumsal Projeler</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              İngiltere odaklı, kurumsal yönetilen ve kira getirisi yüksek projelere erişim sağlıyoruz.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Esnek Ödeme Planları</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Peşinat + taksit kombinasyonlarını yatırımcının bütçesine göre planlıyoruz.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Uçtan Uca Danışmanlık</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Proje seçimi, sözleşme, ödeme planı ve çıkış stratejisine kadar tüm süreçte yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="featured-projects">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Öne Çıkan Projeler
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Obsidian */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Obsidian</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Merkezi lokasyonda, modern dairelerden oluşan ve yüksek kira getirisi
              sunan seçkin bir proje.
            </p>
            <a
              href="/projects/obsidian"
              className="mt-auto text-sm font-medium text-slate-900 hover:underline"
            >
              Proje detaylarını incele →
            </a>
          </div>

          {/* WHG */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Warehouse Gardens (WHG)</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Gelişen bölgede, uzun vadeli kira potansiyeli yüksek modern bir konut projesi.
            </p>
            <a
              href="/projects/whg"
              className="mt-auto text-sm font-medium text-slate-900 hover:underline"
            >
              Proje detaylarını incele →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

