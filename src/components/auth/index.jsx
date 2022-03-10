import cn from "./style.module.css"
import { useState } from "react"
import axios from "axios"
import { MyButton } from "../UI/button"

export const Auth = ({ setIsAuth }) => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  function log(e) {
    e.preventDefault()
    axios.post("http://192.168.0.23:4000/api/trainer/login", {
      login, password
    })
      .then((res) => {
        setIsAuth(true)
        localStorage.setItem("id", res.data)
      })
      .catch((e) => console.log(e.message))
  }

  return (
    <div className={cn.authWrapper}>
      <div>Пожалуйста войдите</div>
      <form onSubmit={(e) => log(e)}>
        <div>
          <div>Введите логин</div>
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          <div>Введите пароль</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}