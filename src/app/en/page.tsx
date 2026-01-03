export default function HomePageEN() {
  return (
    <div className="space-y-32 pb-32">
      {/* HERO SECTION */}
      <section className="w-full py-32" style={{ backgroundColor: "#06273a" }}>
        <div
          className="max-w-5xl mx-auto text-center px-6"
          style={{ color: "#f3f3f3" }}
        >
          <p className="uppercase tracking-widest text-sm opacity-80">
            UK REAL ESTATE INVESTMENT
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Reliable Property Investments <br />
            with Bagci & PKR Regional Investment
          </h1>

          <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
            Access high-yield, professionally managed real estate projects in the UK.
            We provide tailored payment plans, detailed project analysis, and
            end-to-end investment consultancy.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/en/projects"
              className="px-6 py-3 rounded-lg font-semibold transition"
              style={{
                backgroundColor: "#f3f3f3",
                color: "#06273a",
              }}
            >
              View Projects
            </a>

            <a
              href="/en/contact"
              className="px-6 py-3 rounded-lg font-semibold transition shadow-lg"
              style={{
                backgroundColor: "#b29371",
                color: "#06273a",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Bagci & PKR Regional Investment?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Institutional Projects</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide access to UK-focused, professionally managed projects
              with strong rental income potential.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Flexible Payment Plans</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Down payment and installment options are structured according to
              each investor’s financial capacity.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">End-to-End Consultancy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We support you throughout the entire process, from project selection
              and contracts to payment planning and exit strategies.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="featured-projects">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Obsidian */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Obsidian</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A premium residential project offering modern apartments in a
              central location with strong rental yield potential.
            </p>
            <a
              href="/en/projects/obsidian"
              className="mt-auto text-sm font-medium text-slate-900 hover:underline"
            >
              View project details →
            </a>
          </div>

          {/* WHG */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">
              Warehouse Gardens (WHG)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A modern residential development in a growing area with long-term
              rental income potential.
            </p>
            <a
              href="/en/projects/whg"
              className="mt-auto text-sm font-medium text-slate-900 hover:underline"
            >
              View project details →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
