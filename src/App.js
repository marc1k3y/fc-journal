import "./App.css"
// import { Auth } from "./components/auth"
import { Header } from "./components/header"
import { Journal } from "./components/journal"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        {/* <Auth /> */}
        <Journal />
      </div>
    </div>
  )
}

export default App
