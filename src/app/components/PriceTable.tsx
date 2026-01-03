"use client";

type PriceItem = {
  unit: string;
  size: string;
  floor: string;
  price: string;
};

export default function PriceTable({ data }: { data: PriceItem[] }) {
  return (
    <div className="overflow-x-auto border rounded-xl shadow-sm bg-white">
      <table className="w-full text-left border-collapse">
        {/* Başlık */}
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3 text-sm font-semibold">Daire No</th>
            <th className="p-3 text-sm font-semibold">m²</th>
            <th className="p-3 text-sm font-semibold">Kat</th>
            <th className="p-3 text-sm font-semibold">Fiyat</th>
          </tr>
        </thead>

        {/* Satırlar */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 text-sm">{item.unit}</td>
              <td className="p-3 text-sm">{item.size}</td>
              <td className="p-3 text-sm">{item.floor}</td>
              <td className="p-3 text-sm font-medium">£{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
