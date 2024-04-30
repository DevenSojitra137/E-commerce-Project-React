import React from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from "../app/counter/counterSlice";

function Side() {
  const [val, setval] = useState([]);
  const [search, setsearch] = useState();
  const [clicky, setclicky] = useState([]);
  const [cat, setcat] = useState([]);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        console.log(response);
        setval(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setclicky(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const searching = (e) => {
    setsearch(e.target.value);
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then(function (response) {
        // handle success

        setval(response.data.products);
        console.log(search);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Cate = (item) => {
    axios
      .get(`https://dummyjson.com/products/category/${item}`)
      .then(function (response) {
        // handle success

        setval(response.data.products);
        // setclicky(response.data.products);
        console.log(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const total = (item) => [
    console.log([...cat, item])
  ]
  return (
    <>
      <header style={{ background: "#000" }} className="p-3">
        <div className="container">
          <div className="d-flex ms-5">
            <div className="logo1">
              <img width={75} src={require("../images/logo.png")} alt="" />
            </div>
            <div className="d-flex align-items-center search">
              <input
                type="text"
                placeholder="Search products as per your interest"
                id=""
                onChange={searching}
              />
              <input
                className="w-25 ms-5 text-primary fw-bold"
                type="button"
                value="Login"
                id=""
              />
            </div>
            <div className="d-flex align-items-center become">
              <a href="" className="text-white fw-bold fs-6 ms-5">
                Become a Seller
              </a>
              <a href="" className="text-white fw-bold fs-6 ms-5">
                More
                <BiChevronDown />
              </a>
              <Link to={`/Addcart`}> <a href="" className="text-white fw-bold fs-6 ms-5">
                <FaShoppingCart /> Cart
              </a>
                </Link>
            </div>
          </div>
        </div>
      </header>
      <Row className="m-auto my-5 bar">
        <Col md={3}>
          <div className="mt-5 side">
            <div>
              <h3 className="pb-2 p-3">Filters</h3>
              <hr />
              <h6 className="p-2 mb-4 fs-3">CATEGORIES</h6>
            </div>
            <div>
              {clicky.map((item) => {
                return <h6 onClick={() => Cate(item)}>{item}</h6>;
              })}
              <hr />
            </div>

            <div>
              <h6 className="p-2 ms-3">BRAND</h6>

              <div>
                <input className="ms-4" type="checkbox" /> 4 GB
              </div>
              <div>
                <input className="ms-4 mt-3" type="checkbox" /> 3 GB
              </div>
              <div>
                {" "}
                <input className="ms-4 mt-3" type="checkbox" /> 2 GBe
              </div>
              <div>
                <input className="ms-4 mt-3" type="checkbox" /> 8 GB and Above
              </div>
              <div>
                <input className="ms-4 mt-3" type="checkbox" /> 6 GB
              </div>
              <hr />
            </div>

            <div>
              <h6 className="ms-4">
                INTERNAL STORAGE
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                BATTERY CAPACITY
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                SCREEN SIZE
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                PRIMARY CAMERA
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                SECONDARY CAMERA
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                PROCESSOR BRAND
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                SPECIALITY
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                RESOLUTION TYPE
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                OPERATING SYSTEM
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                NETWORK TYPE
                <BiChevronDown className="" />
              </h6>
              <hr />
              <h6 className="ms-4">
                SIM TYPE
                <BiChevronDown className="" />
              </h6>
              <hr />
            </div>
          </div>
        </Col>
        <Col md={9}>
          <div>
            {val.map((index) => {
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
                        onClick={() => dispatch(addtocart(index))}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Side;
