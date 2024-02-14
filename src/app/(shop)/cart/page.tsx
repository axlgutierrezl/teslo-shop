import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function () {
  
  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de Compra" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar productos</span>
            <Link href="/" className="underline mb-5">
              Continuar comprando
            </Link>


            {/* Items */}
            {
              productsInCart.map(product => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={150}
                    height={100}
                    alt={product.title}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p className="">{product.title}</p>
                    <p className="">{product.sizes[0]}</p>
                    <p className="">${product.price}</p>
                    <div className="mt-3">
                      <QuantitySelector quantity={5} />
                    </div>


                    <button className="underline mt-3">
                      Remover
                    </button>

                  </div>


                </div>





              ))
            }

          </div>

          {/* Checkout - Resumen de orden */}

          {/* <div className="absolute top-10 right-10 bg-white rounded-xl shadow-xl p-7"> primera solucion*/} 
          {/* <div className="right-10 bg-white rounded-xl shadow-xl p-7 h-[300px]"> segunda solucion */}
          <div className="right-10 bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de Orden</h2>

            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right">5 articulos</span>

              <span>SubTotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>

            </div>

            <div className="mt-5 mb-2 w-full">
              <Link href="/checkout/address" className="flex btn-primary justify-center">
                Checkout
              </Link>
            </div>

          </div>


        </div>

      </div>
    </div>
  )

}