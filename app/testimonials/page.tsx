export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Customer Testimonials
        </h1>

        <p className="text-gray-600 text-lg leading-8 mt-6">
          Trusted by importers and distributors around the world.
        </p >

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p>
              Hengyang Stan Trade exceeded our expectations. Excellent quality,
              professional communication and fast shipping.
            </p >
            <h3 className="mt-5 font-bold text-yellow-300">
              Jean M. – Cameroon
            </h3>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p>
              Very reliable supplier with competitive prices. We will definitely
              continue working together.
            </p >
            <h3 className="mt-5 font-bold text-yellow-300">
              Samuel K. – Kenya
            </h3>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p>
              Outstanding customer service and excellent product quality.
              Everything arrived exactly as ordered.
            </p >
            <h3 className="mt-5 font-bold text-yellow-300">
              Patrick N. – Ghana
            </h3>
          </div>

        </div>
      </div>
    </main>
  );
}