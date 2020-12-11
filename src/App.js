import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import MovieWatch from "./components/Movies/MovieWatch/MovieWatch";
import NavBar from "./components/NavBar/NavBar";
import SingleMovie from "./components/SingleMovie/SingleMovie";

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <NavBar query={query} handleQuery={setQuery} />
        <main className="container">
          <Switch>
            <Route path="/movies-collection">
              <Movies query={query} />
            </Route>
            <Route path="/watch/:imdbID">
              <MovieWatch />
            </Route>
            <Route path="/:movieId">
              <SingleMovie />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
