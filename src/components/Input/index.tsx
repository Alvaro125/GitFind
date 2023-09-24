import { Button } from "../Button";
import "./style.css";

const Input = ({onClick,onChange,value}:{
  onClick: any,
  onChange: any,
  value: string
}) => {

  return (
    <div className="Search">
      <input type="text" placeholder="@usuario" onChange={onChange} value={value}/>
      <Button onClick={onClick}>Buscar</Button>
    </div>
  )
}

export { Input }