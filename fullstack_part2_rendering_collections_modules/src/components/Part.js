const Part = ({ content }) => {
    console.log(content)
    return (
      <li>{content.name}: {content.exercises}</li>
    )
}

export default Part