const Person = ({ name, number }) => {
    return (
      <li style={{ listStyleType: "none"}}>{name}, {number}</li>
    )
  }
  
  export default Person