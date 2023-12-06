import React, { useState, useEffect } from "react";
import ProductsList from "./Products";
import Header from "./Header";
import AddProductForm from "./AddProductForm";
import DeleteProductForm from "./DeleteProductForm";
import axios from "axios";
import { StudentInfo } from "./StudentInfo";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleToggleProducts = () => {
    setShowProducts(!showProducts);
    setShowAddForm(false);
    setShowDeleteForm(false);
  };

  const handleToggleAddForm = () => {
    setShowAddForm(!showAddForm);
    setShowProducts(false);
    setShowDeleteForm(false);
  };

  const handleToggleDeleteForm = () => {
    setShowDeleteForm(!showDeleteForm);
    setShowProducts(false);
    setShowAddForm(false);
  };

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin); // Toggle admin state independently
  };

  const showInfo = () => {
    setIsShowingInfo(!isShowingInfo);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products", error);
      });
  }, []);

  return (
    <div>
      <Header
        showProducts={showProducts}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        isAdmin={isAdmin}
        showAddForm={showAddForm}
        showDeleteForm={showDeleteForm}
        onToggleProducts={handleToggleProducts}
        onToggleAdmin={handleToggleAdmin}
        onToggleAddForm={handleToggleAddForm}
        onToggleDeleteForm={handleToggleDeleteForm}
        showInfo={showInfo}
        isShowingInfo={isShowingInfo}
      />
      {isShowingInfo && <StudentInfo />}
      {showProducts && (
        <ProductsList
          isAdmin={isAdmin}
          products={products}
          searchQuery={searchQuery}
        />
      )}
      {showAddForm && <AddProductForm />}
      {showDeleteForm && <DeleteProductForm />}
    </div>
  );
}

export default App;
