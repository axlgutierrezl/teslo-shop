

//import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Category;
  }
}

const seedProducts = initialData.products;


const Page = ({ params }: Props) => {
  const { id } = params;
  const products = seedProducts.filter(product => product.gender === id);
  const labels: Record<Category, string> = {
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'para Todos'
  }

  // if (id === 'kids') {
  //   notFound(); // luego de esto no podemos agregar nada porque su return es never
  // }

  return (
    <>
      <Title
        title={`Artículos ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

    </>
    // <div>
    //   <h1>Category Page {id}</h1>
    // </div>
  )

}

Page.displayName = 'Page';
export default Page;