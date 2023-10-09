import useAxios from "../hooks/useAxios"
import { MarketImg } from "../icons/icons";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
  const { response, loading } = useAxios('coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  if(loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    )
  }

  return (
    // <section className="mt-8">
    <div className="mt-8 md-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-[95% max-w-[1200px] mx-auto rounded-md p-6">
      <h1 className="text-2xl mb-2 font-semibold text-yellow-800 flex items-center">Markets <span className="ml-1"><MarketImg /></span></h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b">
      <div className="flex items-center gap-1 w-full">
        <p className="font-semibold ml-10">Coin</p>
      </div>
      <span className="font-semibold w-full text-center">Current Price</span>
      <span className="font-semibold flex gap-1 ml-8 text-center">24h</span>
      <div className="hidden sm:block">
          <p className="font-semibold mr-12 text-center">Market Cap</p>
      </div>
      </div>
      {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
    </div>
  )
}

export default Markets