import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Auth } from "./components/auth"
import { Header } from "./components/header"
import { Journal } from "./components/journal"

function App() {
  const id = localStorage.getItem("id")
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`http://192.168.0.23:4000/api/trainer/check?id=${id}`)
      .then(() => setIsAuth(true))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h1>Загрузка..</h1>

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        {isAuth ? <Journal /> : <Auth setIsAuth={setIsAuth} />}
      </div>
    </div>
  )
}

export default App
