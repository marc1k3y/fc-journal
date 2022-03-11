import cn from "./style.module.css"
import { useState } from "react"
import axios from "axios"
import { api } from "../../../../constants"
import { MyButton } from "../../../UI/button"

export const MedalsForm = ({ id }) => {
  const [medal, setMedal] = useState("gold")
  const [info, setInfo] = useState("")
  const [medals, setMedals] = useState({
    gold: [],
    silver: [],
    bronze: []
  })

  function add() {
    switch (medal) {
      case "gold":
        setMedals({ ...medals, gold: [...medals.gold, info] })
        break
      case "silver":
        setMedals({ ...medals, silver: [...medals.silver, info] })
        break
      case "bronze":
        setMedals({ ...medals, bronze: [...medals.bronze, info] })
        break
      default:
        break
    }
  }

  function pushMedals() {
    axios.put(`${api}spman/medals?id=${id}`, { medals })
      .then((res) => console.log(res))
  }
  return (
    <div className={cn.medalsFormWrapper}>
      <div className={cn.constructor}>
        <select onChange={(e) => setMedal(e.target.value)}>
          <option value="gold">золото</option>
          <option value="silver">серебро</option>
          <option value="bronze">бронза</option>
        </select>
        <div className={cn.info}>
          <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <MyButton click={add}>Добавить</MyButton>
      </div>
      <div className={cn.addedMedals}>
        {medals.gold.length > 0 &&
          <div className={cn.medals}>
            <div className={cn.title}>Золото</div>
            {medals.gold?.map((gm, index) => <div key={index}>{++index}. {gm}</div>)}
          </div>}
        {medals.silver.length > 0 &&
          <div className={cn.medals}>
            <div className={cn.title}>Серебро</div>
            {medals.silver?.map((sm, index) => <div key={index}>{++index}. {sm}</div>)}
          </div>}
        {medals.bronze.length > 0 &&
          <div className={cn.medals}>
            <div className={cn.title}>Бронза</div>
            {medals.bronze?.map((bm, index) => <div key={index}>{++index}. {bm}</div>)}
          </div>}
      </div>
      <MyButton click={pushMedals}>Сохранить</MyButton>
    </div>
  )
}