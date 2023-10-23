import React from "react";
import CardProduct from "./CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PropulseSlice } from "../features/PropulseStore";
import { Container, Row } from "react-bootstrap";

function SectionProducts() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    console.log("fetching products");
    // fetch('https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/pizza')
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((jsonProducts) => {
        console.log("CHEGOU AQUI");
        if (Array.isArray(jsonProducts)) {
          console.log("JSON", jsonProducts);
          {
            dispatch(PropulseSlice.actions.setProducts(jsonProducts));
          }

          // console.log("dispatched",setPizzas(jsonPizza) );
        } else {
          console.error("JSON invalid.");
        }
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        <div className="title-collection">
          <h2>FOOTWEAR</h2>
        </div>

        <Row xs={1} md={4} className="g-4 cards-collection">
          {products.map((products, index) => {
            // console.log("pizza", pizza);
            return <CardProduct key={index} obj={products} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default SectionProducts;
