import React from "react";
import Button from "./Utiles/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Pagination({ isloading, currentpage, setcurrentpage, pages }) {
  // let pages = [];
  // for (let i = 1; i <= Math.ceil({data}.length / 8); i++) {
  //   pages.push(i);
  // }
  

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
      setcurrentpage(pages.length);
    } else {
      setcurrentpage(currentpage - 1);
    }
  }

  function next() {
    if (currentpage >= pages.length) {
      setcurrentpage(pages[0]);
    } else {
      setcurrentpage(currentpage + 1);
    }
    console.log(currentpage);
  }

  return (
    <div className={isloading === true ? "d-none" : "d-flex btngrp mt-4"}>
      <Button
        className='btn-secondary'
        onClick={() => {
          prev(), gototop(50);
        }}
        label={<ArrowBackIosIcon />}
      />

      {/*        pagination number buttons        */}
      {pages.map((page, index) => {
        return (
          <>
            <button
              className='btn bg-light pagination-btn '
              onClick={() => {
                setcurrentpage(page), gototop(50);
              }}
              key={index}>
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
