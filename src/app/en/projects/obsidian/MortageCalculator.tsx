"use client";

import { useState } from "react";

export default function MortgageCalculatorEN() {
  const [price, setPrice] = useState<number | "">("");
  const [deposit, setDeposit] = useState<number | "">("");
  const [rate, setRate] = useState<number>(6); // annual interest %
  const [years, setYears] = useState<number | "">("");
  const [type, setType] = useState("Studio");

  let loanAmount = 0;
  let monthlyPayment = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (price && deposit !== "" && years) {
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
    <div className="p-6 mt-12 border rounded-xl bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mortgage Calculator</h2>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Property Price */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Property Price (£)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter property price"
          />
        </div>

        {/* Deposit */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Deposit (£)
          </label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter deposit"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Loan Term (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="e.g. 10"
          />
        </div>

        {/* Unit Type */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Unit Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option>Studio</option>
            <option>1 Bedroom</option>
            <option>2 Bedroom</option>
            <option>3 Bedroom</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {price && deposit !== "" && years && (
        <div className="mt-8 p-6 rounded-xl bg-gray-50 border">

          <h3 className="text-xl font-semibold mb-4">
            Calculation Results
          </h3>

          <div className="space-y-2 text-gray-700">
            <p><strong>Loan Amount:</strong> £{loanAmount.toLocaleString()}</p>
            <p><strong>Monthly Payment:</strong> £{monthlyPayment.toFixed(2)}</p>
            <p><strong>Total Payment:</strong> £{totalPayment.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> £{totalInterest.toFixed(2)}</p>
            <p><strong>Total Installments:</strong> {Number(years) * 12} months</p>
            <p><strong>Unit Type:</strong> {type}</p>
          </div>
        </div>
      )}
    </div>
  );
}
