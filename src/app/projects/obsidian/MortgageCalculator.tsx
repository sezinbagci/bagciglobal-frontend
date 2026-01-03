"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState<number | "">("");
  const [deposit, setDeposit] = useState<number | "">("");
  const [rate, setRate] = useState<number>(6); // yıllık faiz %
  const [years, setYears] = useState<number | "">("");
  const [type, setType] = useState("1+0");

  // Hesaplama
  let loanAmount = 0;
  let monthlyPayment = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (price && deposit !== "" && years) {
    loanAmount = Number(price) - Number(deposit);
    const monthlyRate = rate / 100 / 12;
    const totalMonths = Number(years) * 12;

    monthlyPayment =
      (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

    totalPayment = monthlyPayment * totalMonths;
    totalInterest = totalPayment - loanAmount;
  }

  return (
    <div className="p-6 mt-12 border rounded-xl bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mortgage Hesaplama</h2>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Ev Fiyatı */}
        <div>
          <label className="block text-sm font-medium mb-1">Ev Fiyatı (£)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Ev fiyatını girin"
          />
        </div>

        {/* Peşinat */}
        <div>
          <label className="block text-sm font-medium mb-1">Peşinat (£)</label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Peşinat girin"
          />
        </div>

        {/* Faiz */}
        <div>
          <label className="block text-sm font-medium mb-1">Yıllık Faiz Oranı (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Kredi Süresi */}
        <div>
          <label className="block text-sm font-medium mb-1">Kredi Süresi (Yıl)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Örn: 10"
          />
        </div>

        {/* Daire Tipi */}
        <div>
          <label className="block text-sm font-medium mb-1">Daire Tipi</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option>1+0</option>
            <option>1+1</option>
            <option>2+1</option>
            <option>3+1</option>
          </select>
        </div>
      </div>

      {/* Sonuç */}
      {price && deposit !== "" && years && (
        <div className="mt-8 p-6 rounded-xl bg-gray-50 border">

          <h3 className="text-xl font-semibold mb-4">Hesaplama Sonuçları</h3>

          <div className="space-y-2 text-gray-700">
            <p><strong>Kredi Tutarı:</strong> £{loanAmount.toLocaleString()}</p>
            <p><strong>Aylık Ödeme:</strong> £{monthlyPayment.toFixed(2)}</p>
            <p><strong>Toplam Ödeme:</strong> £{totalPayment.toFixed(2)}</p>
            <p><strong>Toplam Faiz:</strong> £{totalInterest.toFixed(2)}</p>
            <p><strong>Taksit Sayısı:</strong> {Number(years) * 12} ay</p>
            <p><strong>Daire Tipi:</strong> {type}</p>
          </div>
        </div>
      )}
    </div>
  );
}
