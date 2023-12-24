import HomeCard from "@/components/HomeCard/HomeCard";
import loadHomeData from "@/utils/loadHomeData";

const Home = async () => {
  const data = await loadHomeData();

  return (
    <div>
      <div className="text-center py-2 font-bold">
        Home Page
      </div>

      <div className="text-center py-2 font-bold">
        user Name
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-4">
        {data.map((dataInfo) => <HomeCard key={dataInfo.id} dataInfo={dataInfo} />)}
      </div>
    </div>
  )
}

export default Home;
