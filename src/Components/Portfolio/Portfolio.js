import React, { useState, useEffect } from "react";
import Portofoliolist from "../Portfoliolist/Portofoliolist";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../myData";

export default function Portfolio() {
  const [select, setselect] = useState("featured");
  const [data, setdata] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
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
    {
      id: "Security",
      title: "Security",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "featured":
        setdata(featuredPortfolio);
        break;
      case "web":
        setdata(webPortfolio);
        break;
      case "mobile":
        setdata(mobilePortfolio);
        break;
      case "design":
        setdata(designPortfolio);
        break;
      case "security":
        setdata(contentPortfolio);
        break;
      default:
        setdata(featuredPortfolio);
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
