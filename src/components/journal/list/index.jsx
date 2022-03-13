import cn from "./style.module.css"
import axios from "axios"
import { api } from "../../../constants"
import { useEffect, useState } from "react"
import { Modal } from "../../modal"
import { MyButton } from "../../UI/button"
import gold from "../../../assets/gold.svg"
import silver from "../../../assets/silver.svg"
import bronze from "../../../assets/bronze.svg"
import { MedalsForm } from "./medalsForm"

export const List = ({query}) => {
  const [spmans, setSpmans] = useState([])
  const [modal, setModal] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  function addMedalsBtn(id) {
    setCurrentId(id)
    setModal(true)
  }

  useEffect(() => {
    axios.get(`${api}spman/all`)
      .then((res) => {
        setSpmans(res.data)
      })
  }, [])
  return (
    <div className={cn.listWrapper}>
      {spmans.filter(spman => spman.name.toLowerCase().includes(query)).map(spman =>
        <div key={spman._id} className={cn.spman}>
          <div className={cn.infoMedals}>
            <div className={cn.spmanInfo}>
              <div className={cn.name}>{spman.name}</div>
              <div className={cn.age}>Возраст: {spman.age}</div>
            </div>
            <div className={cn.medals}>
              <div>
                <img src={gold} alt="" />
                <div>{spman.medals?.gold?.length}</div>
              </div>
              <div>
                <img src={silver} alt="" />
                <div>{spman.medals?.silver?.length}</div>
              </div>
              <div>
                <img src={bronze} alt="" />
                <div>{spman.medals?.bronze?.length}</div>
              </div>
            </div>
          </div>
          <div className={cn.rating}>
            {spman.rating}
          </div>
          <div className={cn.addBtn}>
            <MyButton
              click={() => addMedalsBtn(spman._id)}>
              Медали
            </MyButton>
          </div>
          <Modal visible={modal} close={setModal}>
            <MedalsForm id={currentId} />
          </Modal>
        </div>)}
    </div>
  )
}