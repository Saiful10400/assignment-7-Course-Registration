import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import CadrSecton from "./assets/components/cards section";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <section className=" w-11/12 mx-auto">
        <Header></Header>

        {/* this is for body section. */}
        <section className="flex gap-7">
          {/* for card secton */}
          <div className="grid grid-cols-3 w-3/4 gap-6">
            {data.map((item) => (
              <CadrSecton item={item}></CadrSecton>
            ))}
          </div>



          {/* for cart section. */}
          <div className="w-1/4 p-6 bg-white rounded-xl h-[max-content]">
            <h1 className="text-xl text-blue-500 font-bold px-4 border-b-2 border-r-gray-400 text-center">
              Credit Hour Remaining 7 hr
            </h1>
            <h1 className="text-2xl text-black font-bold text-start mt-4">
              Course Name
            </h1>

              <ol className="my-6 list-decimal font-normal text-base text-gray-600 ml-5">
                <li>hellow saiufl</li>
                <li>hellow gourob.</li>
              </ol>

            <h1 className="text-base font-semibold text-gray-800 py-4 border-y-2 border-gray-400 mb-4">
              Total Credit Hour : 13
            </h1>
            <h1 className="font-semibold text-base text-gray-800">
              Total Price : 48000 USD
            </h1>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
