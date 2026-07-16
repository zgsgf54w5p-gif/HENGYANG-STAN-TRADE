import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 lg:flex-row">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/images/company-banner.jpg"
            alt="Hengyang Stan Trade"
            width={700}
            height={500}
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <p className="mb-5 text-sm font-bold uppercase tracking-[6px] text-[#0B4EA2]">
            About Our Company
          </p >

          <h2 className="mb-8 text-5xl font-extrabold leading-tight text-[#071F3D]">
            Trusted Export Solutions <br /> from China
          </h2>

          <p className="mb-6 text-lg leading-9 text-gray-600">
            Hengyang Stan Trade Development Co., Ltd. is a trusted supplier
            of home appliances, kitchen equipment, consumer electronics and
            commercial products.
          </p >

          <p className="mb-10 text-lg leading-9 text-gray-600">
            We help importers, wholesalers and distributors worldwide source
            premium-quality products directly from China with competitive
            prices, reliable logistics and professional customer service.
          </p >

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl bg-blue-50 p-6 shadow-md">
              <h3 className="text-3xl font-bold text-[#0B4EA2]">500+</h3>
              <p className="mt-2 text-gray-600">Products Available</p >
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 shadow-md">
              <h3 className="text-3xl font-bold text-[#0B4EA2]">20+</h3>
              <p className="mt-2 text-gray-600">Countries Served</p >
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 shadow-md">
              <h3 className="text-3xl font-bold text-[#0B4EA2]">1000+</h3>
              <p className="mt-2 text-gray-600">Happy Clients</p >
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 shadow-md">
              <h3 className="text-3xl font-bold text-[#0B4EA2]">24/7</h3>
              <p className="mt-2 text-gray-600">Customer Support</p >
            </div>
          </div>

          <Link
            href="/about"
            className="inline-block rounded-xl bg-[#0B4EA2] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1E88E5]"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}