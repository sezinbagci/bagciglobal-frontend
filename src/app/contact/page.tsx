export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h1>

      <form className="grid gap-4 max-w-lg">
        <input type="text" placeholder="Adınız" className="border p-3 rounded-lg" />
        <input type="email" placeholder="E-posta" className="border p-3 rounded-lg" />
        <textarea placeholder="Mesajınız" className="border p-3 rounded-lg h-32" />
        <button className="bg-black text-white p-3 rounded-lg hover:bg-gray-800">
          Gönder
        </button>
      </form>
    </div>
  );
}
