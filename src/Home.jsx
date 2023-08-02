import React, { useState, useEffect } from "react";
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
import { productUrl } from "./Utiles/Constants/Url";
// import { fetchdata1 } from "./redux/Slices/homeSlice";
import { fetchdata1 } from "./redux/Actions/Action";
import { useDispatch,useSelector } from "react-redux";
import { Setcurrentpost,setcurrentpage,setpages } from "./redux/Slices/homeSlice";

function Home() {
  let dispatch=useDispatch()
  const { categoryparams } = useParams();
  let navigate = useNavigate();
  let { addcart, cartindex } = Globalcontext();
  // const [data, setdata] = useState([]);
  // const [currentpost, setcurrentpost] = useState([]);
  // const [currentpage, setcurrentpage] = useState(1);
  // let [isloading, setloading] = useState(true);
  // Pages array of pagination
  let {data,isloading,currentpost,currentpage,pages}=useSelector(state=>state.home)
  let {logindata}=useSelector(state=>state.common)
  // console.log(logindata,'2222')

  // pages
  useEffect(()=>{
    dispatch(setpages())
  },[ currentpage,data])
  // let pages = [];
  // for (let i = 1; i <= Math.ceil(data.length / 8); i++) {
  //   pages.push(i);
  // }
  // console.log(cartindex,'22')

  const postperpage = 8;
  const lastindex = currentpage * postperpage;
  const firstindex = lastindex - postperpage;
  // console.log(firstindex); 

  // data fetch
  useEffect(() => {
    // productref.current.style.display = "none";
   dispatch(fetchdata1(categoryparams))
  }, [ categoryparams]);
  // useEffect(() => {
  //   // productref.current.style.display = "none";
  //   setloading(true);
  //   const fetchData = async () => {
  //   if (categoryparams === undefined) {
  //       const response = await axios.get(productUrl);
  //       setdata(response.data);
  //       // console.log(data,'000')
  //     } else {
  //       const response = await axios.get(`${productUrl}/category/${categoryparams}`);
  //       setdata(response.data);
  //     }

  //     setloading(false);
  //   };
  //   fetchData();
  // }, [categoryparams]);

  // pagination

  useEffect(() => {
    dispatch(Setcurrentpost(data.slice(firstindex, lastindex)));
  }, [firstindex, data]);

  // Login object 
  // let logindetail =sessionStorage.getItem('Logindetail')?JSON.parse(sessionStorage.getItem("Logindetail")):null;

  // console.log(logindata,'setlogindata');

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
                    {/* {console.log(currentpost,'22')} */}
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
                    <Button Name=' btn-secondary mb-3 addedtocart ' style={{ cursor: "pointer" }} label={"Added to cart"} onClick={notify2} />
                  ) : (
                    <>
                      {/* added to cart */}
                      <Button
                      className=' btn btn-primary mb-3'
                        onClick={e => {
                          sessionStorage.getItem('Logindetail') 
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

             <Pagination  pages={pages}  />

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
// export {categoryparams}
