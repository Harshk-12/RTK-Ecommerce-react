import React from "react";
import Button from "./Utiles/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch,useSelector } from "react-redux";


import { setcurrentpage} from "./redux/Slices/homeSlice";

function Pagination({ pages}) {
  
  let dispatch=useDispatch()
  let {currentpage, isloading}=useSelector(state=>state.home)
  // let {isloading,currentpage}=useSelector(state=>state.home)


  function gototop(top) {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
  // previous and next button
  function prev() {
    console.log(currentpage);
    if (currentpage === pages[0]) {
      dispatch(setcurrentpage(pages.length));
    } else {
      dispatch(setcurrentpage(currentpage - 1));
    } 
  }

  function next() {
    if (currentpage >= pages.length) {
      dispatch(setcurrentpage(pages[0]));
    } else {
      dispatch(setcurrentpage(currentpage + 1));
    }
    console.log(currentpage);
  }

  return (
    <div className={isloading === true ? "d-none" : "d-flex btngrp mt-4"}>

            {/* prev btn */}
      <Button
        className='btn-secondary'
        onClick={() => {
           prev()
          gototop(50);
        }}
        label={<ArrowBackIosIcon />}
      />

      {/*        pagination number buttons        */}
      {pages.map((page, index) => {
        return (
          <>
            <button
            key={index}
              className='btn bg-light pagination-btn '
              onClick={() => {
                  dispatch(setcurrentpage(page)), gototop(50);
              }}
              >
              {page}
            </button>
          </>
        );
      })}

      {/*           next button */}
      <Button
        className={"btn btn-secondary"}
        onClick={() => {
        next(), gototop(50);
        }}
        label={<ArrowForwardIosIcon />}
      />
    </div>
  );
}

export default Pagination;
