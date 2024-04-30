import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiChevronDown } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { AiTwotoneStar, AiOutlinePercentage } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";


function Info() {
  const [data, setdata] = useState([]);
  const [first, setfirst] = useState([]);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setdata(response.data);
        setfirst(response.data.images);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const clickhandle = (deven) => {
    setdata({ ...data, thumbnail: deven })
  }



  return (
    <>
      <div className="main">
        <header style={{ background: "#000" }} className="p-3 mb-3">
          <div className="container">
            <div className="d-flex ms-5">
              <div className="logo1">
                <img width={75} src={require("../images/logo.png")} alt="" />
              </div>
              <div className="d-flex align-items-center search">
                <input type="text" id="" placeholder="Search products as per your interest" />
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
                <Link to={`/Addcart`}> <button className="text-white fw-bold fs-6 ms-5">
                  <FaShoppingCart /> Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Container>
          <Row>
            <Col md={2}>
              <div className="phone">
                {first.map((item) => {
                  return (
                    <>
                      <img src={item} alt="" width={150} onClick={() => clickhandle(item)} className="mb-3 imge" />
                    </>
                  );
                })}
              </div>
            </Col>
            <Col md={5}>
              <div className="main">
                <img src={data.thumbnail} alt="" width={450} />
              </div>
            </Col>
            <Col className="mt-3" md={5}>
              <h5 className="fs-3">{data.title}</h5>
              <div>
                <span className="bg-success fs-6 ps-1 pe-1 text-white rounded">
                  4.4 <AiTwotoneStar className="fs-5 pb-1" />
                </span>
                <span className="ms-2">2,30,108 Ratings & 12,214 Reviews</span>
              </div>
              <div>
                <h6 className="text-success mt-2">
                  Extra <BiRupee />
                  5000 off
                </h6>
              </div>
              <div className="d-flex align-items-center">
                <h2>

                  ${data.price}
                </h2>
                <h6 className="ms-2 text-secondary">
                  $
                  <del>6990</del>
                </h6>
                <h6 className="ms-3 text-success">
                  12
                  <AiOutlinePercentage /> off
                </h6>
              </div>
              <h6>+ ₹99 Secured Packaging Fee</h6>
              <h5>Available offers</h5>
              <h6>
                <MdLocalOffer className="text-success me-3" />
                Bank Offer5% Cashback on Flipkart Axis Bank Card{" "}
                <span className="text-info">T&C</span>
              </h6>
              <h6>
                <MdLocalOffer className="text-success me-3" />
                Bank Offer₹2000 Off On HDFC Bank Credit Card TransactionsT&C
              </h6>
              <h6>
                <MdLocalOffer className="text-success me-3" />
                Bank Offer₹2000 Off On HDFC Bank Debit Card EMI TransactionsT&C
              </h6>
              <h6>
                <MdLocalOffer className="text-success me-3" />
                Special PriceGet extra ₹5000 off (price inclusive of
                cashback/coupon)T&C
              </h6>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Info;
