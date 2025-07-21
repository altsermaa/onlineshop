// import axios from "axios";
import { Header } from "./_components/Header";
import { ShowCards } from "./_components/ShowCards";

const Home = async () => {
  const hhe = await fetch( "https://localhost:8000/getAllProducts");

  console.log(hhe)

  return (
    <div className="w-[360px] lg:w-[930px]">
      <Header />
      {/* <ShowCards products={data} /> */}
    </div>
  );
}

export default Home