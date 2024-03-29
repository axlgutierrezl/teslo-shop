import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { ProductSlideshow, QuantitySelector, SizeSelector , ProductMobileSlideshow } from "@/components";


interface Props {
  params: {
    slug: string;
  }
}

const Page = ({ params }: Props) => {
  const slug = params.slug;
  const product = initialData.products.find(product => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* SlideShow*/}
      <div className="col-span-1 md:col-span-2 ">
        
        {/* Mobile SlideShow */}
        <ProductMobileSlideshow images={product.images} title={product.title} className="block md:hidden"/>

        {/* Desktop SlideShow */}
        <ProductSlideshow images={product.images} title={product.title} className="hidden md:block"/>

      </div>

      {/* Detalles */}
      <div className="col-span-1 md:col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes} />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={5} />

        {/* Button */}
        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>

      </div>

    </div>
  )

}

Page.displayName = 'Page';
export default Page;