import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://lh3.googleusercontent.com/SnZZ7kdwOFj5lQ457HJE2LpzfTnkYQi2BG-Fj5dR23sfkN3pO4oegLaAaeH9YJ9wE47FJzhfwjZp2rlGItocgN7LBM1-ffteVKpo9tHOUunELM1lvg=w2048-rw')] bg-cover bg-center h-screen w-full">
        <header className="flex justify-between items-center px-6 py-4 bg-transparent bg-opacity-50 text-white">
          <div className="text-xl font-bold">Google DeepMind</div>

          <nav>
            <ul className="flex space-x-6 text-lg">
              <li className="cursor-pointer hover:text-gray-300">About</li>
              <li className="cursor-pointer hover:text-gray-300">Research</li>
              <li className="cursor-pointer hover:text-gray-300">
                Technologies
              </li>
              <li className="cursor-pointer hover:text-gray-300">Discover</li>
            </ul>
          </nav>

          <div className="flex space-x-4">
            <div className="p-2 border rounded-md cursor-pointer hover:bg-gray-800">
              🔍
            </div>
            <div className="p-2 border rounded-md cursor-pointer hover:bg-gray-800">
              💎
            </div>
          </div>
        </header>

        <section className="flex flex-col items-center justify-center h-full text-center text-white bg-opacity-40">
          <h1 className="text-[150px] font-semiBold">Gemini 2.0</h1>
          <h3 className="text-2xl mt-2">Built for the agentic era</h3>

          <div className="mt-6">
            <Link to={"/main"} className="cursor-pointer">
              <button className=" cursor-pointer px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-800 rounded-lg transition mr-4">
                Chat With Gemini →
              </button>
            </Link>
            <button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-800 rounded-lg transition">
              Build With Gemini →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home