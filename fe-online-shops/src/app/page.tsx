import axios from "axios";
import { Header } from "./_components/Header";
import { ShowCards } from "./_components/ShowCards";

const Home = async () => {
  const data = await axios.get("http://localhost:8000/getAllProducts");
  console.log(data)


  return (
    <div className="w-[360px] lg:w-[930px] mx-auto">
      {/* <Header /> */}
      <ShowCards products={data.data.products} />
    </div>
  );
}

export default Home;