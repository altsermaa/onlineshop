import axios from "axios";
import { DetailPageShow } from "./_components/DetailPageShow";

interface ParamType {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: ParamType) => {
  const { id } = params;

  const res = await fetch(
    `http://localhost:8000/getSingleProduct/${id}`, {
    cache: "no-store",
  }
  );

    if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const resultDetails = await res.json();
  
  console.log(resultDetails)

  return (
    <div><DetailPageShow /></div>
  );
};

export default DetailPage;
