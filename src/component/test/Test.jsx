import React from "react";
import { useState } from "react";
const Test = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const priceArr = ["110", "100", "22", "55", "15", "695"];
  const allProducts1 = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 95,
      category: "electronics",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 6,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 110,
      category: "electronics",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22,
      category: "men's clothing",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55,
      category: "men's clothing",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Womens Dress",
      price: 15,
      category: "women's clothing",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      category: "jewelery",
      rating: { rate: 4.6, count: 400 },
    },
  ];
  const allProducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 110,
      test: {
        category: "electronics",
      },
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 6,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 100,
      test: {
        category: "electronics",
      },
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22,
      test: {
        category: "men's clothing",
      },
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55,
      test: {
        category: "men's clothing",
      },
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Womens Dress",
      price: 15,
      test: {
        category: "women's clothing",
      },
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      test: {
        category: "jewelery",
      },
      rating: { rate: 4.6, count: 400 },
    },
  ];
  let [categoryFilters, setcategoryFilters] = useState(new Set());
  let [categoryPrice, setcategoryPrice] = useState(new Set());

  function updateFilters(checked, categoryFilter) {
    if (checked)
      setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
    if (!checked)
      setcategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
  }
  function updatePrice(checked, Price) {
    if (checked) setcategoryPrice((prev) => new Set(prev).add(Price));
    if (!checked)
      setcategoryPrice((prev) => {
        const next = new Set(prev);
        next.delete(Price);
        return next;
      });
  }
  const filteredProducts =
    categoryFilters.size === 0
      ? allProducts
      : allProducts.filter((p) => categoryFilters.has(p.test.category));

    const [filteredProductsPrice,setfilteredProductsPrice] = useState([]);
    const [a,setA] = useState([]);
  
  if (categoryFilters.size !== 0 && categoryPrice === 0) {
    setfilteredProductsPrice(allProducts.filter((p) =>
      categoryFilters.has(p.test.category)
    ))
  }
  if (categoryFilters.size === 0 && categoryPrice !== 0) {
    setfilteredProductsPrice(allProducts.filter((p) =>
      categoryPrice.has(p.price)
    ))
  }
  if (categoryFilters.size !== 0 && categoryPrice !== 0) {
    setA(allProducts.filter((p) =>
      categoryFilters.has(p.test.category)
    ))
    setfilteredProductsPrice (a.filter((p) =>
      categoryPrice.has(p.price)
    ))
  }
  if (categoryFilters.size === 0 && categoryPrice === 0) {
    filteredProductsPrice = allProducts;
  }
  console.log(categoryFilters,categoryPrice)
  console.log(filteredProductsPrice)
  // categoryFilters.size === 0 && categoryPrice === 0
  //   ? allProducts
  //   : filteredProducts.filter((p) => categoryFilters.has(p.test.category));

  return (
    <div>
      <h2>Test</h2>
      <div>
        <div className="d-flex justify-content-evenly">
          {categories.map((elm, index) => {
            return (
              <div className="form-check ms-2" key={index}>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => updateFilters(e.target.checked, elm)}
                  />
                  {elm}
                </label>
              </div>
            );
          })}
          {priceArr.map((elm, index) => {
            return (
              <div className="form-check ms-2" key={index}>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => updatePrice(e.target.checked, elm)}
                  />
                  {elm}
                </label>
              </div>
            );
          })}
        </div>
        <div className="d-flex flex-wrap">
          {filteredProductsPrice.map((prod) => {
            return (
              <div
                className="card m-3"
                style={{ width: "400px" }}
                key={prod.id}
              >
                <div className="card-body">
                  <p className="card-text">Id: {prod.id}</p>
                  <h3 className="card-title">Title: {prod.title}</h3>
                  <p className="card-text">Price: {prod.price}</p>
                  <p className="card-text">Category: {prod.test.category}</p>
                  <p className="card-text">Rating: {prod.rating.rate}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
