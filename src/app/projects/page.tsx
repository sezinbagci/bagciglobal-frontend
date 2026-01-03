import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-10">Projelerimiz</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/projects/obsidian" className="border p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Obsidian</h2>
          <p className="text-gray-600">
            Modern mimari ile tasarlanmış, yüksek kira getirili bir proje.
          </p>
        </Link>

        <Link href="/projects/whg" className="border p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">WHG</h2>
          <p className="text-gray-600">
            Uzun vadeli yatırım fırsatı sunan kurumsal bir proje.
          </p>
        </Link>
      </div>
    </div>
  );
}
