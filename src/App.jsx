import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import CadrSecton from "./assets/components/cards section";
import CartLIst from "./assets/components/cart list";
import CreditHour from "./assets/components/cart components/creditHour";
import BottomCredit from "./assets/components/cart components/creditHourbottom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


let tust = () => {
  toast.warn("You already select this item.", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    theme: "dark",
  });
};






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

  // this is the value of time and price management in bookmark.


  
  // 
  
  let onclickFunction = (itemData) => {
    
    // let data=[...onClickData,itemData]



 let justification=()=>{

  for(let element of onClickData){
    if(element.title===itemData.title){
      tust()
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
      <ToastContainer></ToastContainer>
        <Header></Header>

        {/* this is for body section. */}
        <section className="flex md:flex-row flex-col gap-7">
          {/* for card secton */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-3/4 gap-6">
            {data.map((item) => (
              <CadrSecton
                key={item.id}
                onclickFunction={onclickFunction}
                item={item}
              ></CadrSecton>
            ))}
          </div>

          {/* for cart section. */}
          <div className="w-full md:w-1/4 p-6 bg-white rounded-xl h-[max-content]">
            <CreditHour data={onClickData} ></CreditHour>
            <h1 className="text-2xl text-black font-bold text-start mt-4">
              Course Name
            </h1>

            <ol className="my-6 list-decimal font-normal text-base text-gray-600 ml-5">
              {onClickData.map((item) => (
                <CartLIst tittle={item.title} key={item.id}></CartLIst>
              ))}
            </ol>
            <BottomCredit data={onClickData}></BottomCredit>


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
