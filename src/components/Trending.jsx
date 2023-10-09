import useAxios from "../hooks/useAxios"
import { TrendingUp } from "../icons/icons";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

const Trending = () => {
  const { response, loading } = useAxios('search/trending');

  if(loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    )
  }

  return (
    // <div className="mt-8">
    <div className="mt-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-[95% max-w-[1200px] mx-auto rounded-md p-6">
  <h1 className="text-2xl mb-2 font-semibold text-yellow-800 flex items-center">Trending <span className="ml-1"><TrendingUp /></span></h1>
  {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
</div>



  )
}

export default Trending