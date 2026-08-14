"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Search, User, FileText } from "lucide-react";

export default function Navbar() {

  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  const categories = [
    "Kitchen Appliances",
    "Commercial Equipment",
    "Electronics",
    "New Arrivals",
    "Bulk Orders",
  ];


  const links = [
    { name:"Home", href:"/" },
    { name:"Products", href:"/products" },
    { name:"About", href:"/about" },
    { name:"Testimonials", href:"/testimonials" },
    { name:"Contact", href:"/contact" },
  ];



  const handleSearch = (event?: React.FormEvent) => {

    event?.preventDefault();

    const trimmed = searchQuery.trim();

    if(trimmed){
      router.push(`/products?search=${encodeURIComponent(trimmed)}`);
    }else{
      router.push("/products");
    }

    setOpen(false);
  };



  return (

<header className="sticky top-0 z-50 border-b border-slate-700/40 shadow-[0_12px_40px_rgba(2,6,23,0.22)]">


{/* MAIN HEADER */}

<div className="bg-[linear-gradient(90deg,#0F172A_0%,#111827_40%,#1D4ED8_100%)]">


 <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center gap-6 px-6 lg:px-8">


{/* LOGO */}

<Link href="/" className="flex items-center gap-2">


<div className="h-12 w-12 overflow-hidden rounded-full bg-white">

<Image
src="/images/logo2.jpg"
alt="Hengyang Stan Logo"
width={48}
height={48}
className="h-full w-full object-cover"
/>

</div>



<div className="hidden sm:block">

<h1 className="text-lg font-black tracking-[0.2em] text-white">
HENGYANG STAN
</h1>


<p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
TRADE Development Co., Ltd
</p >


</div>


</Link>





{/* SEARCH */}

<form 
onSubmit={handleSearch} 
className="hidden w-[360px] lg:flex xl:w-[420px]"
>


<div className="flex w-full">


<input

value={searchQuery}

onChange={(e)=>setSearchQuery(e.target.value)}

placeholder="Search products..."

className="h-12 flex-1 rounded-l-lg px-4 text-white outline-none"

/>



<button
type="submit"
className="flex h-12 w-14 items-center justify-center rounded-r-lg bg-[#FFD700] text-[#0F172A] transition hover:bg-yellow-400"
>
<Search size={20}/>
</button>


</div>


</form>






{/* ACTION BUTTONS */}
<nav className="hidden lg:flex items-center gap-7">

{links.map((link)=>(

<Link
key={link.href}
href={link.href}
className="text-base font-semibold text-white transition hover:text-orange-300"
>

{link.name}

</Link>

))}

</nav>


<div className="ml-auto flex items-center gap-2 text-white">





<Link

href="/quote"

className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-4 text-center text-base font-semibold text-white sm:block"

>


<FileText

size={20}

className="mx-auto mb-1 text-[#d6b913]"

/>


Quote


</Link>







<Link

href="/contact"

className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-4 text-center text-base font-semibold text-white sm:block"

>


<User

size={20}

className="mx-auto mb-1 text-[#d6b913]"

/>


Contact


</Link>







<button

onClick={()=>setOpen(!open)}

className="md:hidden"

>

<Menu size={32}/>

</button>



</div>


</div>







{/* MOBILE SEARCH */}


<form

onSubmit={handleSearch}

className="px-4 pb-3 md:hidden"

>


<div className="flex">


<input

value={searchQuery}

onChange={(e)=>setSearchQuery(e.target.value)}

placeholder="Search products..."

className="h-10 flex-1 rounded-l-lg px-3 text-white"

/>



<button
type="submit"
className="flex h-10 w-11 items-center justify-center rounded-r-lg bg-[#FFD700] text-[#1b44a4] transition hover:bg-yellow-400"
>
<Search size={12}/>
</button>


</div>


</form>



</div>








{/* CATEGORY BAR */}


<div className="bg-[#1D4ED8]">


<div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-6 overflow-x-auto px-4 py-4 text-base text-white scrollbar-hide sm:px-6 lg:px-8">


{categories.map((item)=>(

<Link

key={item}

href="/products"

className="whitespace-nowrap font-semibold transition hover:text-orange-200"

>


{item}


</Link>


))}


</div>


</div>








{/* MOBILE MENU */}



{

open && (

<div className="bg-white p-5 shadow-lg md:hidden">


{

links.map((link)=>(


<Link

key={link.href}

href={link.href}

onClick={()=>setOpen(false)}

className={`block border-b py-3 font-semibold transition ${
pathname === link.href
? "text-orange-500"
: "text-[#071F3D]"
}`}

>


{link.name}


</Link>


))


}


</div>

)

}



</header>


  );
}