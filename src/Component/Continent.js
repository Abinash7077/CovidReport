import React, { useState } from "react";
import CountryData from "../Component/CountryData";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";

import { countryName } from "../redux/nameSlide";

const Continent = ({ name, id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(true);
  const ClickHandler = () => {
    setShow(!show);
    dispatch(
      countryName({
        _name: name,
      })
    );
  };
  return (
    <>
      <div
        className="w-full flex my-4 justify-between items-center flex-col mx-auto"
        key={id}
      >
        <button
          className="text-[18px] flex items-center justify-between px-10  h-[50px] bg-slate-400  rounded-lg text-white py-2  w-full"
          onClick={ClickHandler}
        >
          <p>{name} </p>
          <ul className="flex itemm-center">
            {close ? (
              <li>
                <BiDownArrow onClick={() => setClose(false)} />
              </li>
            ) : (
              <li>
                <BiUpArrow onClick={() => setClose(true)} />
              </li>
            )}
          </ul>
        </button>
      </div>
      {show ? (
        <div className="w-full my-2">
          <CountryData />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Continent;
