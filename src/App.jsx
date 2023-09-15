import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import CadrSecton from "./assets/components/cards section";
import CartLIst from "./assets/components/cart list";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // onclick state.

  const [onClickData, onClickDataSet] = useState([]);

  // button click event heandle.

  let onclickFunction = (itemData) => {
    
    // let data=[...onClickData,itemData]



 let justification=()=>{

  for(let element of onClickData){
    if(element.title===itemData.title){
      return [...onClickData]
    }
  }
  return [...onClickData,itemData]
 }

let data=justification()

    onClickDataSet(data)
   
  };



  return (
    <>
      <section className=" w-11/12 mx-auto">
        <Header></Header>

        {/* this is for body section. */}
        <section className="flex gap-7">
          {/* for card secton */}
          <div className="grid grid-cols-3 w-3/4 gap-6">
            {data.map((item) => (
              <CadrSecton
                key={item.id}
                onclickFunction={onclickFunction}
                item={item}
              ></CadrSecton>
            ))}
          </div>

          {/* for cart section. */}
          <div className="w-1/4 p-6 bg-white rounded-xl h-[max-content]">
            <h1 className="text-xl text-blue-500 font-bold py-4 border-b-2 border-r-gray-400 text-center">
              Credit Hour Remaining 7 hr
            </h1>
            <h1 className="text-2xl text-black font-bold text-start mt-4">
              Course Name
            </h1>

            <ol className="my-6 list-decimal font-normal text-base text-gray-600 ml-5">
              {onClickData.map((item) => (
                <CartLIst tittle={item.title} key={item.id}></CartLIst>
              ))}
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
