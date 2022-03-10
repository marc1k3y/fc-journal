import "./App.css"
import { Auth } from "./components/auth"
import { Header } from "./components/header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
      <Auth />
      </div>
    </div>
  )
}

export default App
