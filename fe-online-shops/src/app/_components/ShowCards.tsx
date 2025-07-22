import { ProductCard } from "./Card";

export interface Product {
  _id: string, 
  productName: string, 
  image: string, 
  price: number, 
  description: string, 
  categoryId: string
}

export type CategoryProductType ={
  //  [categoryName: string]: Product[]  
  products: Record<string, Product[]>;
}

export const ShowCards = ({ products }: CategoryProductType ) => {
  const keys = Object.keys(products);

  return (
    <div className="w-full px-4 lg:px-10 py-3 border-b">
      <div className="flex flex-col gap-20">
        {keys.map((el, index) => {
          return (
            <div key={index}>
              <h2 className="mt-14 mb-2 text-xl font-black">{el}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {products[el].slice(0, 6).map((product) => {
                  return (
                    <div key={index}>
                    <ProductCard image={"/dress.jpeg"} productName={product.productName} description={product.description} price={product.price} _id={product._id} categoryId={product.categoryId}/>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
