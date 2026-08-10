import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import Link from "next/link";
import {
  Globe2,
  Factory,
  ShieldCheck
} from "lucide-react";


export default function Home() {

  return (

    <main className="bg-gray-100">


      {/* Hero */}
      <Hero />



      {/* Categories */}
      <CategorySection />




      {/* Featured Products */}

      <section className="bg-white py-12">


        <div className="mx-auto max-w-7xl px-4 sm:px-6">


          <div className="mb-8 flex items-center justify-between">


            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-[#0B4EA2]">
                Popular Products
              </span>


              <h2 className="mt-2 text-3xl font-extrabold text-[#071F3D]">
                Featured Collection
              </h2>


            </div>



            <Link
              href="/products"
              className="font-bold text-[#0B4EA2]"
            >
              View All →
            </Link>


          </div>



          <ProductGrid />


        </div>


      </section>






      {/* Why Choose Us */}

      <section className="bg-gray-100 py-14">


        <div className="mx-auto max-w-7xl px-4 sm:px-6">


          <h2 className="mb-10 text-center text-3xl font-extrabold text-[#071F3D]">

            Why Importers Choose Us

          </h2>




          <div className="grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl bg-white p-7 shadow-sm">


              <Globe2
                className="text-[#0B4EA2]"
                size={35}
              />


              <h3 className="mt-5 text-xl font-bold text-[#071F3D]">

                Worldwide Shipping

              </h3>


              <p className="mt-3 text-gray-600">

                Reliable export solutions connecting China with global markets.

              </p >


            </div>






            <div className="rounded-2xl bg-white p-7 shadow-sm">


              <Factory
                className="text-[#0B4EA2]"
                size={35}
              />


              <h3 className="mt-5 text-xl font-bold text-[#071F3D]">

                Factory Direct Supply

              </h3>


              <p className="mt-3 text-gray-600">

                Competitive prices for wholesalers, distributors and businesses.

              </p >


            </div>






            <div className="rounded-2xl bg-white p-7 shadow-sm">


              <ShieldCheck
                className="text-[#0B4EA2]"
                size={35}
              />


              <h3 className="mt-5 text-xl font-bold text-[#071F3D]">

                Export Quality

              </h3>


              <p className="mt-3 text-gray-600">

                Professional sourcing and quality-focused products.

              </p >


            </div>



          </div>


        </div>


      </section>







      {/* Big Supplier Banner */}

      <section className="bg-[#071F3D] py-16 text-center text-white">


        <div className="mx-auto max-w-4xl px-6">


          <h2 className="text-3xl font-extrabold sm:text-4xl">

            Looking For A Reliable China Supplier?

          </h2>


          <p className="mt-4 text-gray-300">

            Get professional sourcing support and competitive quotations for your market.

          </p >



          <Link

            href="/quote"

            className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"

          >

            Request Quote

          </Link>


        </div>


      </section>



    </main>

  );
}