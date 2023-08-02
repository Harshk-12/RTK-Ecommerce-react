import React, { useEffect, useRef, useState } from "react";
import { Globalcontext } from "./Context";
import emptycart from "./assets/7612.jpg";
import{ MdOutlineKeyboardBackspace} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Button from "./Utiles/Button";


function Cart() {
  //
  const [subtotal, setsubtotal] = useState(0);
  const [totalamount, settotalamount] = useState(0);
  let navigate=useNavigate()

  // const [totalprice , settotalprice]=useState('')
  const cartref = useRef();

  let { setcart, cartindex, counter, setcounter } = Globalcontext();
  console.log(cartindex);

  let remove = (e, index) => {
    let filteredarray = cartindex.filter((item, itemid) => {
      return itemid !== index;
    });

    setcart(filteredarray);
    setcounter((counter -= 1));

    console.log(counter);
  };

  useEffect(() => {
    if (counter === 0) {
      cartref.current.style.display = "block";
    } else {
      cartref.current.style.display = "none";
    }
  }, [counter]);

  function quantityChange(value, index) {
    // setsubtotal(subtotal+=item.price)
    // setitemquantity(value)
    let updatedCart = cartindex.map((item, id) => {
      console.log(subtotal);

      return index === id ? { ...item, quantity: value } : item;
    });
    setcart(updatedCart);
    // console.log(updatedCart)
  }

  useEffect(() => {
    let total = 0;
    cartindex.forEach((item) => {
      total += item.quantity * item.price;
    });
    settotalamount(Math.floor(total));
  }, [cartindex]);

  console.log(totalamount, "2");

  //

  return (
    <>
      {/* empty cart image */}
      <div className="emptycartimage" ref={cartref}>
        <img src={emptycart} alt="image" />
      </div>
      {/*  */}
       
       {/* Back button */}
       <MdOutlineKeyboardBackspace className="back-btn" onClick={()=>navigate(-1)} />
       {/*  */}

      <section className={counter === 0 ? "hideaccount" : " "}>
        {/* first row */}
        <div className="row px-5 mt-5 gx-5">
          <div className="col-8 ">
            <div className="d-flex justify-content-between border-bottom">
              <h2>Shopping Cart </h2>
              <h2>Items</h2>
            </div>
          </div>

          <div className="col-3 mx-auto text-center ">
            <h2 className=" pb-2 border-bottom">Order Summary</h2>
          </div>
        </div>
        {/*  */}

        {/* second row */}

        <div className="row gx-5">
          <div className="col-8 ">
            {/* first row */}
            <div className="px-5 d-flex mt-5" style={{ gap: "8vw" }}>
              <h5 className=" cartitems">Product Details</h5>
              <h5>Quantity</h5>
              <h5>Price</h5>
              <h5>Total</h5>
            </div>

            {/* second row */}
            <div className="mt-5">
              <div className="px-5">
                {cartindex.map((item, index) => {
                  return (
                    <>
                      <div
                        className=" mt-5 d-flex align-items-center "
                        style={{ gap: "8vw" }}
                        key={index}
                      >
                        {/* product details */}
                        <div className="cartitems d-flex align-items-center ">
                          <div style={{ height: "7rem", width: "19rem" }}>
                            <img
                              src={item.image}
                              alt="image"
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </div>

                          <div className="ms-4" style={{width:'20vw'}}>
                            <p>{item.title}</p>
                            <p
                              className="text-danger"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => remove(e, index)}
                            >
                              Remove
                            </p>
                            {/* {console.log(index)} */}
                          </div>
                        </div>
                        {/*  */}

                        {/*  quantity  */}

                        <form className=" cart-quantity ">
                          <input
                            className="text-center"
                            type="number"
                            min={1}
                            max={5}
                            defaultValue="1"
                            value={item.quantity}
                            onChange={(e) =>
                              quantityChange(parseInt(e.target.value), index)
                            }
                          />
                        </form>

                        {/*  */}

                        {/* Price */}
                        <div className="fs-5 fw-normal">
                          <p style={{ width: "90px" }}> ${item.price} </p>
                        </div>

                        <div className=" fs-5 fw-normal">
                          <p style={{ width: "90px" }}>
                            ${item.quantity * item.price}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

            </div>
          </div>
              {/*  */}
 {/* 2nd row- 2nd col */}

          <div className="col-3">
            <div className="mt-5 d-flex justify-content-between">
              <h5>Items</h5>
              <h5>${totalamount}</h5>
            </div>

            <div className="d-flex flex-column mt-5">
              <h5>Shipping</h5>
              <p>Standard shipping-$10.00</p>
            </div>

            <div className="mt-3">
              <h5>Promo Code</h5>
              <form
                action="/"
                className="d-flex flex-column border-bottom pb-5"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Promo Code"
                />
                <Button Cla="mt-3 " label='Apply'/>
              </form>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <h5>Subtotal</h5>
              <h5>${totalamount + 10}</h5>
            </div>

            <div className="mt-4 d-block">
              <Button label='Checkout'/>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      {/*  */}
    </>
  );
}

export default Cart;
