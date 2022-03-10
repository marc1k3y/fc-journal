import { useState } from "react"
import cn from "./style.module.css"

export const Auth = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className={cn.authWrapper}>
      <div>Пожалуйста войдите</div>
      <form>
        <div>
          <div>Введите логин</div>
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          <div>Введите пароль</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>Войти</button>
      </form>
    </div>
  )
}