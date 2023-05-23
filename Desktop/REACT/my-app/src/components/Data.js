import React, { useEffect, useState } from "react";
import "./Data.css";
import axios from "axios";

// let baseUrl = "https://api.football-data.org/v4/areas/";
function Data() {
  // let res = await fetch(baseUrl);
  // let data = await res.json();
  // console.log(data);

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([{ player: [{ knownName: 0 }] }]);

  const options = {
    method: "GET",
    url: "https://soccer-data.p.rapidapi.com/team/squad",
    params: { teamId: "803" },
    headers: {
      "X-RapidAPI-Key": "89dd7fae42msh9894aee38ca9aaap14ec8bjsn360b2a2f6a15",
      "X-RapidAPI-Host": "soccer-data.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const file = response.data;
      setData(file);
      // console.log(file);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  function handleChange(e) {
    const item = e.target.value;
    handleSearch(item);
  }
  function handleSearch(value) {
    const newData = data.filter((item) => item.player.knownName === value);
    setSelected(newData);
    console.log(newData);
  }

  return (
    <div className="head1">
      <div className="wrap">
        <h1>Player Lists</h1>
        <form action="#" className="sort">
          <label for="Names">Sort By:</label>
          <select name="Names" id="name" onChange={(e) => handleChange(e)}>
            <option value="Sven Ulreich">Sven Ulreich</option>
            <option value="Tom Mickel">Tom Mickel</option>
            <option value="Daniel Heuer Fernandes">
              Daniel Heuer Fernandes
            </option>
            <option value="Leo Oppermann">Leo Oppermann</option>
            <option value="Bryan Hein">Bryan Hein</option>
          </select>
        </form>
        <ul className="player">
          {data !== [] && (
            <li>Medium name: {selected[0].player.knownNameMedium}</li>
          )}
          <li>Age: {selected[0].player.age}</li>
          {data !== [] && <li>Country: {selected[0].player.country?.name}</li>}
          {data !== [] && (
            <li>Position: {selected[0].player.position?.name}</li>
          )}
          {data !== [] && (
            <li>Shirt number: {selected[0].player.shirtNumber}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Data;
