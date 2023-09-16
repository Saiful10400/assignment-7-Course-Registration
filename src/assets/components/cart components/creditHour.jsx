import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let tust = () => {
  toast.warn("You are crossing your Credit hour limit", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    theme: "dark",
  });
};
const CreditHour = ({ data }) => {

let prehour=20
  for (let asset of data) {
   asset=parseInt(asset.credit)
if(prehour<0){
  prehour=0
}
prehour=prehour-asset
if(prehour<0){
  prehour=prehour+asset
  tust()

}
  }
  return (
    <div>
      <h1 className="text-xl text-blue-500 font-bold py-4 border-b-2 border-r-gray-400 text-center">
        Credit Hour Remaining {prehour} hr
      </h1>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CreditHour;
