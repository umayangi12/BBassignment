import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Characters from "./Characters";
import "../App.css";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //check whether data is loading or not

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.group(result.data); //result getting from the API
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <header
        className="center"
        style={{ fontSize: "37px", fontFamiliy: "Calibri" }}
      >
        <h2>The Breaking Bad</h2>
      </header>
      <p style={{ fontSize: "15px", fontFamiliy: "Calibri" }}>
        <center>
          A breaking bad mobie (or simply El Camino) is a 2019 American crime
          thriller film. Part of the Breaking bad franchise, it serves as a
          sequel and epilogue to the televison serices Breaking Bad. It
          continues the story of Jesse Pinkman, who partnered with former
          teacher Walter White throughout the sericesto build a crystal meth
          empire based in Albuquerque. Series creator Vince Gilligan wrote,
          directed and produced EL Camino; Aarion Paul reprised his role as
          Jesse Pinkman. Sevaral actors involved in Breaking Bad also reprised
          their roles, including Jesse Plemons, Krystem Ritter, Charles Baker,
          Matt Jone and Robert Forster. Foster died on the day of EL Camino's
          release, making the film one of his final on-screen appearances.
        </center>
      </p>
      <br />
      <br />
      <br />
      <div className="container">
        <a className="cards">
          {items.map((item) => (
            <Characters key={item.char_id} item={item}></Characters>
          ))}
        </a>
      </div>
    </div>
  );
}
