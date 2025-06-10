import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const apiUrl = "https://lanciweb.github.io/demo/api/actors";
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      const actorsList = res.data;
      setActors(actorsList);
      console.log(actorsList);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Stars of Hollywood</h1>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-3">
          {actors.map((curActor) => (
            <div className="card ">
              <img src={curActor.image} className="card-img-top" alt={curActor.name} />
              <div className="card-body">
                <h5 className="card-title">{curActor.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {curActor.nationality} - {curActor.birth_year}
                </h6>
                <p className="card-text">{curActor.biography}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
