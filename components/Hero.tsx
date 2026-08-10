"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Truck, ShieldCheck } from "lucide-react";


export default function Hero() {

  return (

<section className="bg-[#071F3D] overflow-hidden">


<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">


<div className="grid items-center gap-8 lg:grid-cols-2">



{/* LEFT CONTENT */}

<motion.div

initial={{opacity:0, x:-40}}

animate={{opacity:1, x:0}}

transition={{duration:0.6}}

className="text-white"

>


<span className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-black">

GLOBAL SUPPLIER FROM CHINA

</span>




<h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">

Quality Products

<span className="block text-yellow-400">

For Global Importers

</span>

</h1>




<p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">

Source premium kitchen appliances, consumer electronics
and commercial equipment directly from a reliable Chinese supplier.

</p >




<div className="mt-7 flex flex-wrap gap-3">


<Link
href="/products"
className="flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300"
>

Explore Products

<ArrowRight size={18}/>

</Link>



<Link
href="/quote"
className="rounded-lg border border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-[#071F3D]"
>

Request Quote

</Link>


</div>



{/* TRUST */}

<div className="mt-8 grid grid-cols-3 gap-3">


<div className="rounded-lg bg-white/10 p-3">

<Globe size={20} className="text-yellow-400"/>

<p className="mt-2 text-xs">
Worldwide
Shipping
</p >

</div>



<div className="rounded-lg bg-white/10 p-3">

<Truck size={20} className="text-yellow-400"/>

<p className="mt-2 text-xs">
Fast
Logistics
</p >

</div>




<div className="rounded-lg bg-white/10 p-3">

<ShieldCheck size={20} className="text-yellow-400"/>

<p className="mt-2 text-xs">
Quality
Control
</p >

</div>


</div>


</motion.div>





{/* RIGHT PRODUCT IMAGE */}


<motion.div

initial={{opacity:0, scale:0.9}}

animate={{opacity:1, scale:1}}

transition={{duration:0.6}}

className="relative"

>


<div className="rounded-3xl bg-white p-5 shadow-2xl">


<Image

src="/images/airfryer.jpg"

alt="Featured product"

width={600}

height={600}

priority

className="h-75 w-full object-contain sm:h-[420px]"

/>


</div>




{/* Floating card */}


<div className="absolute -bottom-5 left-5 rounded-xl bg-yellow-400 px-5 py-3 shadow-xl">

<p className="text-xl font-extrabold text-black">
500+
</p >

<p className="text-xs font-bold">
Products
</p >

</div>



</motion.div>



</div>


</div>


</section>

  );
}