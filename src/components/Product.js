import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [details, setDetails] = useState({});
  const Location = useLocation();
  useEffect(() => {
    setDetails(Location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative ">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
               {details.isNew &&(
                    <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">sale</p>
               )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
