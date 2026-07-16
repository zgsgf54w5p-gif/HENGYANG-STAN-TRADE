import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071F3D] via-[#0B4EA2] to-[#1E88E5] py-52 text-white">

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.3em] text-black">
            About Hengyang Stan Trade
          </span>

          <h1 className="mt-10 text-6xl font-extrabold leading-tight md:text-8xl">
            Building Trust Through
            <br />
            Global Trade
          </h1>

          <p className="mx-auto mt-12 max-w-4xl text-xl leading-10 text-gray-200">
            Hengyang Stan Trade Development Co., Ltd. is committed to delivering
            premium-quality home appliances, electronics, kitchen equipment and
            commercial solutions to businesses around the world.
          </p >

          <div className="mt-16 flex flex-wrap justify-center gap-6">

            <Link
              href="/products"
              className="rounded-xl bg-yellow-400 px-10 py-5 text-lg font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-white px-10 py-5 text-lg font-bold transition duration-300 hover:bg-white hover:text-[#0B4EA2]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* ================= COMPANY STORY ================= */}

      <section className="py-40">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-2">

          <div>

            <Image
              src="/images/company-banner.jpg"
              alt="Company"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl"
            />

          </div>

          <div>

            <span className="font-bold uppercase tracking-[0.3em] text-yellow-500">
              WHO WE ARE
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#0B4EA2]">
              Your Trusted Export Partner
            </h2>

            <p className="mt-10 text-lg leading-10 text-gray-600">
              Hengyang Stan Trade Development Co., Ltd. is a professional
              international trading company located in Hengyang, Hunan, China.
            </p >

            <p className="mt-8 text-lg leading-10 text-gray-600">
              We specialize in sourcing premium home appliances, consumer
              electronics, kitchen equipment and commercial products while
              providing dependable export services for customers worldwide.
            </p >

            <p className="mt-8 text-lg leading-10 text-gray-600">
              Every product is carefully selected, inspected and prepared for
              international shipment to ensure our customers receive quality,
              reliability and outstanding value.
            </p >

            <p className="mt-8 text-lg leading-10 text-gray-600">
              Our experienced team works closely with importers, wholesalers,
              retailers and distributors to build long-term business
              relationships based on trust, transparency and excellent customer
              service.
            </p >

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="bg-gray-50 py-40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="font-bold uppercase tracking-[0.3em] text-yellow-500">
              OUR PURPOSE
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#0B4EA2]">
              Mission & Vision
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-600">
              We believe international business should be simple,
              transparent and beneficial for every customer.
            </p >

          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-12 shadow-xl">

              <div className="text-6xl">🎯</div>

              <h3 className="mt-8 text-3xl font-bold text-[#0B4EA2]">
                Our Mission
              </h3>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                To connect businesses around the world with premium-quality
                products from China while providing exceptional service,
                competitive pricing and reliable logistics.
              </p >

            </div>

            <div className="rounded-3xl bg-white p-12 shadow-xl">

              <div className="text-6xl">🌍</div>

              <h3 className="mt-8 text-3xl font-bold text-[#0B4EA2]">
                Our Vision
              </h3>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                To become one of the most trusted global trading companies by
                delivering value, quality and long-term partnerships to every
                customer we serve.
              </p >

            </div>

          </div>

        </div>

      </section>
            {/* ================= CORE VALUES ================= */}

      <section className="py-40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="font-bold uppercase tracking-[0.3em] text-yellow-500">
              OUR VALUES
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#0B4EA2]">
              The Principles That Drive Us
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-600">
              Every partnership we build is based on trust, professionalism,
              quality and long-term cooperation.
            </p >

          </div>

          <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-6xl">🤝</div>

              <h3 className="mt-8 text-2xl font-bold text-[#0B4EA2]">
                Integrity
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Honest communication and transparent business relationships are
                the foundation of everything we do.
              </p >

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-6xl">⭐</div>

              <h3 className="mt-8 text-2xl font-bold text-[#0B4EA2]">
                Quality
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                We carefully inspect every product to ensure it meets
                international quality standards before shipment.
              </p >

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-6xl">🚀</div>

              <h3 className="mt-8 text-2xl font-bold text-[#0B4EA2]">
                Innovation
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                We continuously explore new products and market trends to offer
                modern solutions for our customers.
              </p >

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100 hover:-translate-y-2 transition">
              <div className="text-6xl">🌍</div>

              <h3 className="mt-8 text-2xl font-bold text-[#0B4EA2]">
                Global Service
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                We proudly support customers worldwide with reliable export
                services and responsive communication.
              </p >

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-gray-50 py-40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="font-bold uppercase tracking-[0.3em] text-yellow-500">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#0B4EA2]">
              Your Reliable Business Partner
            </h2>

          </div>

          <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <div className="text-5xl">🏆</div>
              <h3 className="mt-8 text-2xl font-bold">
                Premium Quality
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                High-quality products carefully selected for international markets.
              </p >
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <div className="text-5xl">💰</div>
              <h3 className="mt-8 text-2xl font-bold">
                Competitive Prices
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                Factory-direct sourcing with excellent value for wholesalers.
              </p >
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <div className="text-5xl">🚢</div>
              <h3 className="mt-8 text-2xl font-bold">
                Worldwide Shipping
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                Fast and secure delivery to customers around the world.
              </p >
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <div className="text-5xl">📞</div>
              <h3 className="mt-8 text-2xl font-bold">
                Professional Support
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                Friendly customer service before, during and after every order.
              </p >
            </div>

          </div>

        </div>

      </section>

      {/* ================= COMPANY STATISTICS ================= */}

      <section className="bg-[#071F3D] py-40 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">

            <div className="rounded-3xl bg-white/10 p-10 text-center">
              <h2 className="text-6xl font-extrabold text-yellow-400">
                500+
              </h2>
              <p className="mt-4">Products</p >
            </div>

            <div className="rounded-3xl bg-white/10 p-10 text-center">
              <h2 className="text-6xl font-extrabold text-yellow-400">
                20+
              </h2>
              <p className="mt-4">Countries Served</p >
            </div>

            <div className="rounded-3xl bg-white/10 p-10 text-center">
              <h2 className="text-6xl font-extrabold text-yellow-400">
                1000+
              </h2>
              <p className="mt-4">Satisfied Customers</p >
            </div>

            <div className="rounded-3xl bg-white/10 p-10 text-center">
              <h2 className="text-6xl font-extrabold text-yellow-400">
                24/7
              </h2>
              <p className="mt-4">Customer Support</p >
            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPORT PROCESS ================= */}

      <section className="py-40 bg-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="font-bold uppercase tracking-[0.3em] text-yellow-500">
              EXPORT PROCESS
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#0B4EA2]">
              How We Work
            </h2>

          </div>

          <div className="mt-24 grid gap-10 md:grid-cols-5">

            <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg">
              <div className="text-5xl">1️⃣</div>
              <h3 className="mt-6 font-bold">Inquiry</h3>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg">
              <div className="text-5xl">2️⃣</div>
              <h3 className="mt-6 font-bold">Quotation</h3>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg">
              <div className="text-5xl">3️⃣</div>
              <h3 className="mt-6 font-bold">Production</h3>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg">
              <div className="text-5xl">4️⃣</div>
              <h3 className="mt-6 font-bold">Inspection</h3>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg">
              <div className="text-5xl">5️⃣</div>
              <h3 className="mt-6 font-bold">Worldwide Delivery</h3>
            </div>

          </div>

        </div>

      </section>
            {/* ================= GLOBAL PARTNERS ================= */}

      <section className="bg-gradient-to-r from-[#071F3D] via-[#0B4EA2] to-[#1E88E5] py-40 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-yellow-400">
            GLOBAL NETWORK
          </span>

          <h2 className="mt-6 text-5xl font-extrabold">
            Trusted By Customers Worldwide
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-200">
            Hengyang Stan Trade Development Co., Ltd. proudly serves
            wholesalers, distributors, retailers and importers across
            Africa, Asia, Europe and many other international markets.
            Our mission is to build long-term business relationships
            through quality products, competitive pricing and reliable
            export services.
          </p >

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-yellow-400">
                Africa
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Supplying premium products to wholesalers and distributors
                throughout African markets.
              </p >
            </div>

            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-yellow-400">
                Asia
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Supporting businesses with dependable sourcing and export
                solutions across Asia.
              </p >
            </div>

            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-yellow-400">
                Europe
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Delivering reliable products that meet international
                standards and customer expectations.
              </p >
            </div>

          </div>

        </div>

      </section>

      {/* ================= CUSTOMER REVIEWS ================= */}

      <section className="bg-gray-50 py-40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="font-bold uppercase tracking-[0.3em] text-yellow-500">
              CUSTOMER REVIEWS
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#0B4EA2]">
              What Our Customers Say
            </h2>

          </div>

          <div className="mt-24 grid gap-10 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <div className="text-4xl text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Excellent communication, professional service and
                outstanding product quality. We highly recommend
                Hengyang Stan Trade.
              </p >

              <h3 className="mt-8 text-2xl font-bold">
                Jean M.
              </h3>

              <p className="text-gray-500">
                Importer • Cameroon
              </p >

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <div className="text-4xl text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Fast delivery, competitive prices and professional
                customer support from start to finish.
              </p >

              <h3 className="mt-8 text-2xl font-bold">
                Samuel K.
              </h3>

              <p className="text-gray-500">
                Distributor • Kenya
              </p >

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <div className="text-4xl text-yellow-400">
                ★★★★★
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                One of our most trusted suppliers in China.
                Excellent products and reliable export services.
              </p >

              <h3 className="mt-8 text-2xl font-bold">
                Patrick N.
              </h3>

              <p className="text-gray-500">
                Wholesaler • Ghana
              </p >

            </div>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="bg-white py-44">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-[#071F3D] via-[#0B4EA2] to-[#1E88E5] px-10 py-24 text-center text-white shadow-2xl">

          <span className="rounded-full bg-yellow-400 px-6 py-3 font-bold uppercase tracking-[0.3em] text-black">
            Let's Work Together
          </span>

          <h2 className="mt-10 text-6xl font-extrabold">
            Ready To Grow Your Business?
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-gray-200">
            Whether you are a wholesaler, retailer or distributor,
            Hengyang Stan Trade is ready to become your trusted export
            partner. Contact us today and discover high-quality products
            with professional worldwide service.
          </p >

          <div className="mt-16 flex flex-wrap justify-center gap-6">

            <Link
              href="/products"
              className="rounded-xl bg-yellow-400 px-10 py-5 text-lg font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-white px-10 py-5 text-lg font-bold transition hover:bg-white hover:text-[#0B4EA2]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}