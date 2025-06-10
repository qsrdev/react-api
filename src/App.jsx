import { useState, useEffect } from "react";
import axios from "axios";

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
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-3 ">
          {actors.map((curActor) => (
            <div key={curActor.id} className="col">
              <div className="card mb-3 h-100">
                <img src={curActor.image} className="img-fluid rounded-top w-100 object-fit-cover" style={{ height: "300px" }} alt={`snapshot of ${curActor.name}`} />
                <div className="card-body">
                  <h5 className="card-title">{curActor.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {curActor.nationality} - {curActor.birth_year}
                  </h6>
                  <p className="card-text">{curActor.biography}</p>
                </div>
                <h5 className="text-center">Known For</h5>
                {curActor.known_for.map((curAward) => (
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{curAward}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
