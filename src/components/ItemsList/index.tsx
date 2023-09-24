import "./style.css";

const ItemsList = ({data}:{
  data:any
}) => {

  return (
    <ul className="ItemsList">
      {data.map((repo:any,i:number)=>(
        <li key={i}>
          <h2><a href={repo.html_url} target="_blank">{repo.name}</a></h2>
          <p className="description">{repo.description ? repo.description : "Sem descrição"}</p>
        </li>
      ))}
    </ul>
  )
}

export { ItemsList }