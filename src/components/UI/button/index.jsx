import "./style.module.css"

export const MyButton = ({ click, children }) => {
  return (
    <button onClick={click}>{children}</button>
  )
}