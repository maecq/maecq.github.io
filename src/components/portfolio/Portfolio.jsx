import { useEffect, useState } from "react";
//import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  //webPortfolio,
  //mobilePortfolio,
  designPortfolio,
  //contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Developer",
    },
    
    {
      id: "design",
      title: "Administrative",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Experience</h1>
      <br></br>
      <br></br>
      <h2>Customer Support/Order Checker (2018-2021)</h2>
      <br></br>
      <h2>Gaspard Regalia Inc.</h2>
        <h3>Checks and validates all processed orders before sending to shipping </h3>
        <h3>Communicates with the processing staff and support staffs regarding shipping orders. </h3>
        <h3>Creates and manages a website for each client/school that would have an online order for their students</h3>
        <h3>Manages cancellations and refund orders using the created client's website. </h3>
        <h3>Monitor and manages recovered stocks after graduation season.</h3>
        

    </div>
  );
}