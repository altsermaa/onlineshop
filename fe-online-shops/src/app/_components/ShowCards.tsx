import { ProductCard } from "./Card";

export const ShowCards = ({ products } ) => {
  const keys = Object.keys(products);

  return (
    <div>
      <div className="flex flex-col gap-20">
        {keys.map((el, index) => {
          return (
            <div key={index}>
              <h2 className="mb-14 text-3xl text-white font-black">{el}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* {foods[el].slice(0, 6).map((food) => {
                  return (
                   
                    <ProductCard image={"/dress.jpeg"} productName="dress" description="here will be description" price={15000}/>
                    
                  );
                })} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
