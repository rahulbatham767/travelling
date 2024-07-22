import React from "react";
import TourImage from "./TourImage";

const TourCard = () => {
  const data = [
    {
      url: "https://www.incredibleindia.org/content/dam/incredibleindia/images/places/jhansi/jhansi-jhansi-fort-0.jpg/jcr:content/renditions/cq5dam.web.1800.600.jpeg",
      title: "Jhansi Fort",
      para: "Travel with comfort and ease at just 10 Rupees per kilometer.",
    },
    {
      url: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/12120742/Madhavi-Gaur.png",
      title: "Taj Mahal",
      para: "Travel with comfort and ease at just 10 Rupees per kilometer. ",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-5xl"> Choose Your Tour</h1>
      <TourImage data={data} />
    </div>
  );
};

export default TourCard;
