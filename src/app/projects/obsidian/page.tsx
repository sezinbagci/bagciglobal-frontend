"use client";

import { useState } from "react";

export default function ObsidianPage() {
  // Mortgage calculator states
  const [price, setPrice] = useState<number | "">("");
  const [deposit, setDeposit] = useState<number | "">("");
  const [rate, setRate] = useState<number>(6);
  const [years, setYears] = useState<number | "">("");
  const [type, setType] = useState("1+1");

  const showMortgage =
    price && deposit !== "" && years ? true : false;

  // mortgage calculation
  let loanAmount = 0;
  let monthlyPayment = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (showMortgage) {
    loanAmount = Number(price) - Number(deposit);
    const monthlyRate = rate / 100 / 12;
    const totalMonths = Number(years) * 12;

    monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalMonths));

    totalPayment = monthlyPayment * totalMonths;
    totalInterest = totalPayment - loanAmount;
  }

  return (
    <div className="max-w-5xl mx-auto py-24 space-y-16">

      {/* Başlık */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Obsidian Projesi</h1>
        <p className="text-gray-700 text-lg">
          İngiltere’de yüksek kira potansiyeline sahip modern bir konut projesi.
          Konumu, mimarisi ve yatırım geri dönüşüyle öne çıkar.
        </p>
      </section>

      {/* Görsel */}
      <section>
        <img
          src="/obsidian.jpg"
          alt="Obsidian Project"
          className="rounded-xl shadow-xl w-full object-cover max-h-[450px]"
        />
      </section>

      {/* Temel Bilgiler */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Lokasyon", value: "Birmingham / UK" },
          { title: "Teslim Tarihi", value: "2026" },
          { title: "Minimum Yatırım", value: "£120,000" },
        ].map((item, i) => (
          <div key={i} className="p-5 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Ek Detaylar */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Ek Detaylar</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border">
          {[
            ["Rota ID", "UK10"],
            ["Fiyat", "£460,000 – £742,268"],
            ["Proje Tipi", "Investment"],
            ["Ön Ödeme", "%25"],
            ["Teslim Tarihi", "Ekim 2026"],
            ["Oda Tipleri", "1+0, 1+1, 2+1, 3+1"],
            ["Metrekare", "40 – 142 m²"],
            ["Otopark", "0"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-gray-500 text-sm">{label}</p>
              <p className="font-semibold text-lg">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proje İmkanları */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Proje İmkanları</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["Wifi", "Spor Salonu", "Şehir Manzarası", "Klima", "Kablolu TV", "Cafe"],
            ["Güvenlik", "Doğa Manzarası", "Asansör", "Alarm Sistemi", "Çocuk Parkı", "Restoran"],
          ].map((list, index) => (
            <ul key={index} className="space-y-3">
              {list.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span> {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Fiyat Listesi */}
{/* Fiyat Listesi */}
<section className="mt-16 text-center">
  <h2 className="text-2xl font-bold mb-4">Fiyat Listesi</h2>

  <p className="text-gray-600 mb-6">
    Güncel daire tipleri ve fiyat bilgileri için fiyat listesini inceleyebilirsiniz.
  </p>

  <a
    href="/obsidian-price-list.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
               bg-[#06273a] text-[#f3f3f3] font-medium
               hover:opacity-90 transition"
  >
    📄 Fiyat Listesi için Tıklayın
  </a>
</section>


      {/* Mortgage Calculator */}
      <section className="p-6 mt-16 border rounded-xl bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Mortgage Hesaplama</h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="number"
            placeholder="Ev Fiyatı (£)"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Peşinat (£)"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Faiz Oranı (%)"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Kredi Süresi (Yıl)"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />
        </div>

        {/* Results */}
        {showMortgage && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">Hesaplama Sonuçları</h3>
            <p><strong>Kredi Tutarı:</strong> £{loanAmount.toLocaleString()}</p>
            <p><strong>Aylık Ödeme:</strong> £{monthlyPayment.toFixed(2)}</p>
            <p><strong>Toplam Ödeme:</strong> £{totalPayment.toFixed(2)}</p>
            <p><strong>Toplam Faiz:</strong> £{totalInterest.toFixed(2)}</p>
          </div>
        )}
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

