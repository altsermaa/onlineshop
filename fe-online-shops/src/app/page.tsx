import { Header } from "./_components/Header";
import { ShowCards } from "./_components/ShowCards";

const Home = async () => {
  const response = await fetch("http://localhost:8000/getAllProducts", {
    cache: "no-store"
  });
  const data = await response.json();
  console.log(data);

  return (
    <div className="w-[360px] lg:w-[930px] mx-auto">
      {/* <Header /> */}
      <ShowCards products={data.products} />
    </div>
  );
}

export default Home;