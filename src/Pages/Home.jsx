import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Globalcontext } from "./Context";
import Crousel from "./Crousel";
import Footer from "./Footer";
import Button from "./Utiles/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify, notify2 } from "./Utiles/Toaster";
import Spinner from "./Utiles/Spinner";
import Pagination from "./Pagination";

function Home() {
  let { categoryparams } = useParams();
  let navigate = useNavigate();
  let { addcart, cartindex } = Globalcontext();
  const [data, setdata] = useState([]);
  const [currentpost, setcurrentpost] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  let [isloading, setloading] = useState(true);
  const postperpage = 8;

  const lastindex = currentpage * postperpage;
  const firstindex = lastindex - postperpage;
  console.log(firstindex);

  // Pages array of pagination
  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / 8); i++) {
    pages.push(i);
  }

  // data fetch
  useEffect(() => {
    // productref.current.style.display = "none";
    setloading(true);
    const fetchData = async () => {
      if (categoryparams === undefined) {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setdata(response.data);
        // console.log(data,'000')
      } else {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryparams}`);
        setdata(response.data);
      }

      setloading(false);
    };
    fetchData();
  }, [categoryparams]);

  // pagination
  useEffect(() => {
    setcurrentpost(data.slice(firstindex, lastindex));
  }, [firstindex, data]);

  // Login object
  let logindetail = JSON.parse(sessionStorage.getItem(""));

  console.log(data);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Crousel />
      <Spinner isloading={isloading} marginleft='49%' margintop='10%' />

      {/* <Toaster /> */}

      <div>
        {/* ////////product page view */}
        <div>
          <div className='d-flex align-items-center justify-content-center flex-column pb-3' style={{ backgroundColor: "#EEEEEE", minHeight: "70vh" }}>
            <div className='productp container-fluid'>
              {currentpost.map((item, index) => (
                <div className='product bg-white  border-opacity-25 rounded p-2' style={{ borderColor: "#F1C27B" }} key={index}>
                  {/* Main page products */}
                  <div className='hover14 '>
                    <div className='imagediv mb-4 '>
                      <img
                        src={item.image}
                        alt='image'
                        className='image mt-4 '
                        onClick={() => {
                          navigate(`/singlepage/${item.id}`);
                        }}
                      />
                    </div>
                  </div>
                  <ul className='productul '>
                    <li>{item.category}</li>
                    <li>{item.title}</li>
                    <li>Price: ${item.price}</li>
                  </ul>

                  {/* add to card */}
                  {cartindex.find(i => i.id === item.id) !== undefined ? (
                    <Button className=' btn-secondary mb-3 addedtocart ' style={{ cursor: "pointer" }} label={"Added to cart"} onClick={()=>logindetail?notify2():navigate('/signin')} />
                  ) : (
                    <>
                      {/* added to cart */}
                      <Button
                        className=' btn btn-primary mb-3'
                        onClick={e => {
                          logindetail
                            ? (addcart(e, {
                                image: item.image,
                                id: item.id,
                                price: item.price,
                                quantity: "1",
                                title: item.title,
                              }),
                              notify())
                            : navigate("/signin");
                        }}
                        label={"Add to cart"}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            <Pagination isloading={isloading} pages={pages} currentpage={currentpage} setcurrentpage={setcurrentpage} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
