import React from "react";
import Footer from "../../src/components/dummy";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>Home</h1>
      <Footer />
    </div>
  );
};

export default Home;
