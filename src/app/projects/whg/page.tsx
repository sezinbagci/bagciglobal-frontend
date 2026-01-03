export default function WHGPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 space-y-16">

      {/* Başlık */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Warehouse Gardens (WHG)</h1>
        <p className="text-gray-700 text-lg">
          İngiltere’nin yükselen bölgelerinden birinde yer alan, yüksek kira getirisine sahip
          modern ve sürdürülebilir konut projesi. Uzun vadeli yatırımcılar için güçlü bir fırsat sunmaktadır.
        </p>
      </section>

      {/* Proje Görseli */}
      <section>
        <img
          src="/whg.jpg"
          alt="Warehouse Gardens Project"
          className="rounded-xl shadow-xl w-full object-cover max-h-[450px]"
        />
      </section>

      {/* Proje Bilgileri */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-xl shadow-sm bg-white">
          <h3 className="font-semibold text-lg mb-2">Lokasyon</h3>
          <p className="text-gray-600">Liverpool / UK</p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm bg-white">
          <h3 className="font-semibold text-lg mb-2">Teslim Tarihi</h3>
          <p className="text-gray-600">2026</p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm bg-white">
          <h3 className="font-semibold text-lg mb-2">Minimum Yatırım</h3>
          <p className="text-gray-600">£95,000</p>
        </div>
      </section>

      {/* Fiyat Tablosu Yeri */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Fiyat Listesi</h2>
        <p className="text-gray-600">
          WHG fiyat PDF'lerindeki tüm daireleri tablo formatında buraya ekleyeceğiz.
          (İki farklı PDF'yi tek listede birleştireceğiz.)
        </p>
      </section>

      {/* Taksit Hesaplayıcı */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Taksit Hesaplama</h2>
        <p className="text-gray-600">
          Peşinat, toplam fiyat ve taksit sayısı girildiğinde aylık ödeme hesaplamaları burada görünecek.
        </p>
      </section>

      {/* Danışman Butonu */}
      <section>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Danışman ile Görüş
        </a>
      </section>
    </div>
  );
}
