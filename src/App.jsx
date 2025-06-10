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
      <h1 className="text-center bg-warning sticky-top">Stars of Hollywood</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-3 ">
          {actors.map((curActor) => (
            <div key={curActor.id} className="col">
              <div className="card mb-3 h-100 border-dark bg-dark text-white bg-gradient">
                <img src={curActor.image} className="img-fluid rounded-top w-100 object-fit-cover" style={{ height: "300px" }} alt={`snapshot of ${curActor.name}`} />
                <div className="card-body">
                  <h5 className="card-title">{curActor.name}</h5>
                  <h6 className="card-subtitle mb-2 text-warning">
                    {curActor.nationality} - {curActor.birth_year}
                  </h6>
                  <p className="card-text">{curActor.biography}</p>
                </div>
                <div class="card-header text-center bg-dark">Known For</div>
                {curActor.known_for.map((curAward) => (
                  <ul class="list-group list-group-flush border-secondary ">
                    <li class="list-group-item bg-warning bg-gradient fst-italic">{curAward}</li>
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
