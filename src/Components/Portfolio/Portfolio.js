import React, { useState, useEffect } from "react";
import Portofoliolist from "../Portfoliolist/Portofoliolist";
import "./Portfolio.scss";
import {
 
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  
} from "../../myData";

export default function Portfolio() {
  const [select, setselect] = useState("web");
  const [data, setdata] = useState([]);

  const list = [
    
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile app",
    },
    {
      id: "design",
      title: "Design",
    },
    
  ];

  useEffect(() => {
    switch (select) {
      
      case "web":
        setdata(webPortfolio);
        break;
      case "mobile":
        setdata(mobilePortfolio);
        break;
      case "design":
        setdata(designPortfolio);
        break;
      
      default:
        setdata(webPortfolio);
    }
  }, [select]);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portofoliolist
            title={item.title}
            active={select === item.id}
            setselect={setselect}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((data) => (
          <div className="item">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
