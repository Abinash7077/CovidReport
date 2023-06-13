
import React,{useState} from "react";
import { MdOutlineNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = () => {
    const [show, setShow] = useState(false);
  const nightClick=()=>{
    setShow(false)
  }
  const lightClick=()=>{
    setShow(true)
  }
  return (
    <>
     <header className="py-2 App-header flex items-center justify-end">
      {show ? (
          <MdOutlineNightlight
            className="text-slate-900 text-right text-[28px]"
            onClick={nightClick}
          />
        ) : (
          <CiLight
            className="text-slate-900 text-right text-[28px]"
            onClick={lightClick}
          />
        )}
      </header>
      
    </>
  );
}

export default Header;
