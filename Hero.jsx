function Hero() {
  return (
    <section className="min-h-[80vh] px-8 py-20 bg-[#080812] text-white flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mb-4 text-purple-400 font-medium">
            Interactive Resume Builder
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build Resumes That Stand Out
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-8">
            Create clean, professional resumes with live preview, smart sections,
            and export-ready templates.
          </p>

          <div className="mt-8 flex gap-4">
            {/* TODO: Get Started click par message show karna */}
            <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition font-semibold">
              View Templates
            </button>
          </div>

          {/* TODO: Button click ke baad yaha message show karna */}
          <p className="mt-5 text-sm text-green-400">
            Builder coming soon...
          </p>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-2xl">
          <div className="bg-[#111124] rounded-2xl p-6">
            <div className="h-6 w-32 bg-purple-500/60 rounded mb-6"></div>

            <div className="space-y-3">
              <div className="h-4 w-full bg-white/20 rounded"></div>
              <div className="h-4 w-5/6 bg-white/20 rounded"></div>
              <div className="h-4 w-3/4 bg-white/20 rounded"></div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="h-24 bg-purple-500/20 rounded-xl"></div>
              <div className="h-24 bg-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;