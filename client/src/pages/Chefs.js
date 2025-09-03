import React, { useEffect, useState } from "react";
import axios from "axios";

function Chefs() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios.get("/api/chefs")
      .then((res) => setChefs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Our Chefs</h1>
      {chefs.map((chef) => (
        <div key={chef._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h2>{chef.name}</h2>
          <p><strong>Location:</strong> {chef.location}</p>
          <p><strong>Specialties:</strong> {chef.specialties.join(", ")}</p>
          {chef.image && <img src={chef.image} alt={chef.name} width="200" />}
        </div>
      ))}
    </div>
  );
}

export default Chefs;
