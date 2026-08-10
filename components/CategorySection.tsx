"use client";

import Link from "next/link";
import {
  CookingPot,
  Factory,
  MonitorSmartphone,
  Home,
} from "lucide-react";


const categories = [
  {
    name: "Kitchen Appliances",
    icon: CookingPot,
  },
  {
    name: "Commercial Equipment",
    icon: Factory,
  },
  {
    name: "Consumer Electronics",
    icon: MonitorSmartphone,
  },
  {
    name: "Smart Home Products",
    icon: Home,
  },
];


export default function CategorySection() {

  return (

    <section className="bg-gray-100 py-12">

      <div className="mx-auto max-w-7xl px-4">

        <h2 className="mb-8 text-3xl font-bold text-[#0F172A]">
          Shop By Category
        </h2>


        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          {categories.map((category)=>{

            const Icon = category.icon;

            return (

              <Link
                key={category.name}
                href="/products"
                className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >

                <Icon
                  size={35}
                  className="text-[#2563EB]"
                />


                <h3 className="mt-4 font-bold text-[#0F172A]">
                  {category.name}
                </h3>


                <p className="mt-2 text-sm text-gray-500">
                  Explore products
                </p >


              </Link>

            );

          })}

        </div>


      </div>

    </section>

  );

}