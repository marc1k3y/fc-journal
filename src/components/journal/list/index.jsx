import cn from "./style.module.css"
import axios from "axios"
import { api } from "../../../constants"
import { useEffect, useState } from "react"

export const List = () => {
  const [spmans, setSpmans] = useState([])

  useEffect(() => {
    axios.get(`${api}spman/all`)
      .then((res) => {
        setSpmans(res.data)
      })
  }, [])
  return (
    <div className={cn.listWrapper}>
      {spmans.map(spman =>
        <div key={spman._id} className={cn.spman}>
          <div className={cn.name}>{spman.name}</div>
          <div className={cn.age}>{spman.age}</div>
        </div>)}
    </div>
  )
}