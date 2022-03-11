import cn from "./style.module.css"
import axios from "axios"
import { useState } from "react"
import { api } from "../../../constants"
import { MyButton } from "../../UI/button"

export const CreateForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  function create(e) {
    e.preventDefault()
    axios.post(`${api}spman/create`, {
      name, age
    })
      .then((res) => console.log(res.data))
  }
  return (
    <div className={cn.createFormWrapper}>
      <div className={cn.title}>Новый спортсмен</div>
      <form onSubmit={(e) => create(e)}>
        <div className={cn.name}>
          <div>Имя, фамилия</div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={cn.age}>
          <div>Возраст</div>
          <input type="number" value={age || ""} onChange={(e) => setAge(e.target.value)} />
        </div>
        <MyButton>Добавить</MyButton>
      </form>
    </div>
  )
}