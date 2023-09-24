import "./style.css";

const Button = ({onClick, children}:{
  onClick:any,
  children: any
}) => {

  return (
    <button onClick={onClick}>{children}</button>
  )
}

export { Button }