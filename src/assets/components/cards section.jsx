
import { BiDollar } from "react-icons/bi";
import { TbBook } from "react-icons/tb";
import PropTypes from 'prop-types';
const CadrSecton = ({item,onclickFunction}) => {
    const{title,details,price,credit,image}=item
    return (
        <div className="p-4 rounded-xl bg-white">
            <img className="rounded-lg w-full h-48 object-cover" src={image} alt="" />
            <h1 className="  my-4 text-lg font-semibold">{title}</h1>
            <p className="text-sm font-normal text-gray-600 h-20 ">{details}</p>
            <div className="  text-base font-medium text-gray-500 flex justify-between items-center mt-8 mb-7">
                
                <span className="flex items-center gap-1" ><BiDollar/>Price : {price}</span>
                
                <span className="flex items-center gap-1" ><TbBook/>Credit : {credit}</span>
            </div>
            <button onClick={()=>onclickFunction(item)} className="text-white py-2 w-full bg-blue-500 rounded-lg text-lg font-semibold">Select</button>
        </div>
    );
};

export default CadrSecton;


CadrSecton.propTypes = {
    item: PropTypes.object,
    onclickFunction: PropTypes.func
    
   
  };

