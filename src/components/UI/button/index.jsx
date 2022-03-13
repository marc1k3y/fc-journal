import cn from "./style.module.css"

export const MyButton = ({ click, children }) => {
  return (
    <div className={cn.wrapper}>
      <button onClick={click}>{children}</button>
    </div>
  )
}