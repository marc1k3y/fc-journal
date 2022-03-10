import cn from "./style.module.css"
import { useState } from "react"
import { MyButton } from "../../UI/button"

export const CreateForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  return (
    <div className={cn.createFormWrapper}>
      <div className={cn.title}>Новый спортсмен</div>
      <form>
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