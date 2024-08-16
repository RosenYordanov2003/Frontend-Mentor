import {useState, useEffect} from "react";
import "../DessertSection/DessertSection.css"
import "../DessertSection/DessertSectionResponsive.css";
import DessertCard from "../DessertCard/DessertCard";
import data from "../../../data.json";

export default function DessertSection() {
    const[desserts, setDesserts] = useState([]);
    
    useEffect(() => {
      setDesserts(data);
    }, [])
    const dessertCardItems = desserts.map((x, index) => {
      const array = x.image.desktop.split("/");
      return <DessertCard key={index} category={x.category} name={x.name} price={x.price} imgName={array[array.length - 1]}/>
    })

    return(
        <section className="desserts">
          <h2 className="dessert-title">Desserts</h2>
          <div className="desserts-container">
            {dessertCardItems}
          </div>
        </section>
    )
}