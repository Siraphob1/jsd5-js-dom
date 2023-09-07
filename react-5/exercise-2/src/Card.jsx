const Card = ({ age, name, id, status, weight ,deleteHandler}) => {
  return (
    <div className="card">
      <div className="label">Age: {age}</div>

      <div className="label">ID: {id}</div>

      <div className="label">Name: {name}</div>

      <div className="label">Status: {status}</div>

      <div className="label">Weight: {weight}</div>
      <button type="button">Edit</button>
      <button  onClick={()=> deleteHandler(id)}>Delete</button>
    </div>
  );
};

export default Card;
