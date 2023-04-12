import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
    
  ])
  
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(contactObject))
    console.log(persons);
    setNewName('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addContact}>
        <div>
          name: <input value = {newName}
                 onChange = {handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0}}>
        {persons.map(person => 
          <Person key = {person.id} name = {person.name} />)}
      </ul>
      

      ...
    </div>
  )
}

export default App