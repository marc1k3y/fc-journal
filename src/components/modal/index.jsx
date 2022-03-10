import cn from "./style.module.css"

export const Modal = ({ visible, close, children }) => {
  return (
    <div className={cn.modalWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.modalContent}>
        <button onClick={() => close(false)}>X</button>
        {children}
      </div>
    </div>
  )
}