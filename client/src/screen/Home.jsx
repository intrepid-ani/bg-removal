import React from "react";

import Header from "../component/header.jsx";
import Steps from "../component/steps.jsx";
import Comparison from "../component/comparison.jsx";
import Testimonial from "../component/testimonial.jsx";
import Action from "../component/actionButton.jsx";

function Home() {
  return (
    <>
      <Header />
      <Steps />
      <Comparison />
      <Testimonial />
      <Action />
    </>
  );
}

export default Home;
