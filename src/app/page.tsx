import CoinAnimation from "./components/CoinAnimation";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between h-screen py-24 gap-32">
        <h1 className="text-6xl">COINFLIP</h1>
        <CoinAnimation />
    </div>
  );
}
