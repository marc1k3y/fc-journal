import { useState } from "react"
import { Modal } from "../modal"
import { MyButton } from "../UI/button"
import { CreateForm } from "./createForm"
import { List } from "./list"
import cn from "./style.module.css"

export const Journal = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className={cn.journalWrapper}>
      <div className={cn.title}>Журнал спортсменов</div>
      <div className={cn.journal}>
        <div className={cn.controlPanel}>
          <div className={cn.create}>
            <MyButton click={() => setModal(true)}>
              добавить
            </MyButton>
          </div>
          <div className={cn.seacrh}>
            <div>поиск</div>
            <input type="text" />
          </div>
        </div>
        <List />
      </div>
      <Modal visible={modal} close={setModal}>
        <CreateForm />
      </Modal>
    </div>
  )
}