import { AddArticle } from "./components/AddArticles"
import { Articles } from "./components/Articles"

function App() {
  return <div className="container">
    <div className="row mt-5">
      <div className="col-md-8">
        <Articles />
      </div>
      <div className="col-md-4">
        <AddArticle />
      </div>
    </div>
  </div>
}

export default App
