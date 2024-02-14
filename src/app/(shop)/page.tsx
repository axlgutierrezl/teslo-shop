// import { titleFont } from '@/config/fonts'
// import Image from 'next/image'

import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";


const products = initialData.products;



export default function Home() {
  return (
    // <main className="">
    //   <h1>Hola mundo</h1>
    //   <h1 className={`${titleFont.className} font-bold` }>Hola mundo</h1>
    //   <h1 className={`${titleFont.className}` }>Hola mundo</h1>
    // </main>
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      {/* <ProductGrid products={products} /> */}

      <ProductGrid products={products} />
    </>
  )
}
