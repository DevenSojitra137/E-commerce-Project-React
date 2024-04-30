import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

function Addcart(){

    const carinfo = useSelector((state) => state.counter.value)
    // console.log(carinfo);
    const dispatch = useDispatch()  

    const [val, setval] = useState([])

    return(
        <div>
            <>
                
                    {carinfo.map((index) => {
                        return (
                          <>
                            <div className="d-flex">
                              <div className="mb-5">
                                <Link to={`/Info/${index.id}`}>
                                  <img
                                    style={{ width: "400px" }}
                                    src={index.thumbnail}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="ms-3">
                                <h2 className="mb-2">{index.title}</h2>
                                <div className="d-flex align-items-center mb-2">
                                  <h2 className="text-danger me-4">{index.price}</h2>
                                  <h3>{index.discountPercentage}% oFF</h3>
                                </div>
                                <h4 className="mb-3">
                                  only <b>{index.stock}</b> item avilable
                                </h4>
                                <h5 className="text-align-center">
                                  <FcRating />
                                  <FcRating />
                                  <FcRating />
                                  <FcRating />
                                  <span className="ms-2 spn">{index.rating}</span>
                                </h5>
                                <Link to={`/Info/${index.id}`}>
                                  <input
                                    type="button"
                                    value="Buy now"
                                    id=""
                                    className="bt1"
                                  />
                                </Link>
                                <input
                                  type="button"
                                  value="Add To Cart"
                                  id=""
                                  className="bt2 ms-3"
                                //   onClick={()=>dispatch(addtocart(index))}
                                />
                              </div>
                            </div>
                            <hr />
                          </>
                        );
                      })}
                
            </>
        </div>
    )
}

export default Addcart;