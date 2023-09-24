import "./style.css";

const Profile = ({data}:{
    data:any
}) => {

  return (
    <div className="Profile">
      <img src={data.avatar_url} alt="" />
      <div className="info">
        <div className="name">
            <h2>{data.name}</h2>
            <h3>@{data.login}</h3>
        </div>
        <p className="description">{data.bio ? data.bio : "Sem descrição"}</p>
      </div>
    </div>
  )
}

export { Profile }