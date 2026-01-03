export default function ContactPageEN() {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

      <form className="grid gap-4 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          className="border p-3 rounded-lg h-32"
        />

        <button className="bg-black text-white p-3 rounded-lg hover:bg-gray-800">
          Send Message
        </button>
      </form>
    </div>
  );
}
