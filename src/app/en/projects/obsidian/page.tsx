"use client";

import { useState } from "react";

export default function ObsidianPageEN() {
  const [price, setPrice] = useState<number | "">("");
  const [deposit, setDeposit] = useState<number | "">("");
  const [rate, setRate] = useState<number>(6);
  const [years, setYears] = useState<number | "">("");

  const showMortgage = price && deposit !== "" && years ? true : false;

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

      {/* Title */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Obsidian Project</h1>
        <p className="text-gray-700 text-lg">
          A modern residential development in the UK with strong rental yield
          potential, standing out with its location, architecture, and return
          on investment.
        </p>
      </section>

      {/* Image */}
      <section>
        <img
          src="/obsidian.jpg"
          alt="Obsidian Project"
          className="rounded-xl shadow-xl w-full object-cover max-h-[450px]"
        />
      </section>

      {/* Key Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Location", value: "Birmingham / UK" },
          { title: "Completion Date", value: "2026" },
          { title: "Minimum Investment", value: "£120,000" },
        ].map((item, i) => (
          <div key={i} className="p-5 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Additional Details */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Additional Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border">
          {[
            ["Route ID", "UK10"],
            ["Price Range", "£460,000 – £742,268"],
            ["Project Type", "Investment"],
            ["Deposit", "25%"],
            ["Completion", "October 2026"],
            ["Unit Types", "Studio, 1 Bed, 2 Bed, 3 Bed"],
            ["Size", "40 – 142 m²"],
            ["Parking", "None"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-gray-500 text-sm">{label}</p>
              <p className="font-semibold text-lg">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Project Amenities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["Wi-Fi", "Gym", "City View", "Air Conditioning", "Cable TV", "Café"],
            ["Security", "Nature View", "Elevator", "Alarm System", "Playground", "Restaurant"],
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

      {/* Price List */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Price List</h2>

        <p className="text-gray-600 mb-6">
          Please review the price list for available units and updated pricing
          information.
        </p>

        <a
          href="/obsidian-price-list.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                     bg-[#06273a] text-[#f3f3f3] font-medium
                     hover:opacity-90 transition"
        >
          📄 View Price List
        </a>
      </section>

      {/* Mortgage Calculator */}
      <section className="p-6 mt-16 border rounded-xl bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Mortgage Calculator</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="number"
            placeholder="Property Price (£)"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Deposit (£)"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Loan Term (Years)"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="border px-3 py-2 rounded-md"
          />
        </div>

        {showMortgage && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">Calculation Results</h3>
            <p><strong>Loan Amount:</strong> £{loanAmount.toLocaleString()}</p>
            <p><strong>Monthly Payment:</strong> £{monthlyPayment.toFixed(2)}</p>
            <p><strong>Total Payment:</strong> £{totalPayment.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> £{totalInterest.toFixed(2)}</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section>
        <a
          href="/en/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Speak with an Advisor
        </a>
      </section>
    </div>
  );
}
