export default function WhyChooseUs() {
  const items = [
    {
      title: "Factory Direct Prices",
      text: "Competitive pricing directly from trusted manufacturers.",
    },
    {
      title: "Quality Inspection",
      text: "Every product is carefully inspected before shipment.",
    },
    {
      title: "Worldwide Shipping",
      text: "Fast and reliable export to customers across the globe.",
    },
    {
      title: "OEM & ODM Service",
      text: "Customized branding and packaging available.",
    },
    {
      title: "Professional Team",
      text: "Experienced export specialists ready to assist you.",
    },
    {
      title: "24/7 Customer Support",
      text: "Quick responses before and after every order.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <h2 className="text-center text-3xl font-bold text-[#0B4EA2] sm:text-4xl">
        Why Choose Hengyang Stan Trade?
      </h2>

      <p className="mx-auto mb-12 mt-5 max-w-2xl text-center text-lg leading-8 text-slate-600 sm:mb-16">
        We provide reliable export solutions with quality products,
        competitive prices and professional service.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl bg-[#F8FAFC] p-7 shadow-[0_10px_30px_rgba(0,0,0,.08)] transition hover:-translate-y-1">
            <div className="mb-4 text-4xl">
              ✅
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#0B4EA2]">
              {item.title}
            </h3>

            <p className="leading-7 text-slate-600">
              {item.text}
            </p >
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}