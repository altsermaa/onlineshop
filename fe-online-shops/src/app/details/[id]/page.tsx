import axios from "axios";
import { DetailPageShow } from "./_components/DetailPageShow";

interface ParamType {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: ParamType) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8000/getSingleProduct/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data.fetchedData);

  return (
    <div>
      <DetailPageShow
        productName={data.fetchedData.productName}
        price={data.fetchedData.price}
        image={data.fetchedData.image}
        _id={data.fetchedData._id}
        categoryId={data.fetchedData.categoryId}
        description={data.fetchedData.description}
      />
    </div>
  );
};

export default DetailPage;
