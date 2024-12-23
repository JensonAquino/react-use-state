import languages from "./data/languages";
function App() {
  return (
    <>
      <header>
        <h1 className="m-2">Learn Web development</h1>
      </header>
      <main className="container my-5">
        {/* btn section */}
      <div>
        {languages.map((curLng) => (
          <button key={curLng.id} className="btn btn-primary me-2">{curLng.title}</button>
        ))}
      </div>  
      </main>
    </>
  )
}

export default App
