import { useState } from "react";
import languages from "./data/languages";
function App() {
  const [selectedLng, setSelectedLng] = useState(languages[0])
  return (
    <>
      <header>
        <h1 className="m-2">Learn Web development</h1>
      </header>
      <main className="container my-5">
        {/* btn section */}
        <div>
          {languages.map((curLng) => (
            <button onClick={() => {setSelectedLng(curLng)}} key={curLng.id} className="btn btn-primary me-2">{curLng.title}</button>
          ))}
        </div>
        {/* description section */}
        <div className="card mt-5">
          <div className="card-body">
          <h3>{selectedLng.title}</h3>
          <p>{selectedLng.description}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
