import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from 'prop-types';

let tust = () => {
    toast.warn("Your 20 hour limit is already compleated or you are trying to cross your limit", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
  };

const BottomCredit = ({data}) => {
    let prehour = 0;
    for (let asset of data) {
      asset = parseInt(asset.credit);
      // if(prehour>20){
      //   prehour=0
      // }
      prehour = prehour + asset;
    
      if (prehour > 20) {
        prehour = prehour - asset;
        tust()
      }
    }
    return (
      <div>
        <h1 className="font-semibold text-base text-gray-800 py-4 border-y-2 border-gray-400 mb-4">
        Total Credit Hour : {prehour}
        </h1>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default BottomCredit;



BottomCredit.propTypes = {
    data: PropTypes.array
  };