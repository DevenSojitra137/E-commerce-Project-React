import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearch } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";


function Na() {
  const [Search, setsearch] = useState([])
  const [val, setval] = useState([])

  const search = (e) => {
    setsearch(e.target.value);
      axios
        .get(`https://dummyjson.com/products/search?q=${search}`)
        .then(function (response) {
          // handle success
          console.log(response);
          setval(response.data.products)
          
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  return (
    <>
      

    </>
  );
}

export default Na;
