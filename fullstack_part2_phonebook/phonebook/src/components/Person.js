const Person = ({ name, key }) => {
    console.log(name, key)
    return (
      <li style={{ listStyleType: "none"}}>{name}</li>
    )
  }
  
  export default Person