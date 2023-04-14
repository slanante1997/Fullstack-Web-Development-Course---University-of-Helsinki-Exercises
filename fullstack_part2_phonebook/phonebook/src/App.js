import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phoneNum: '040-1234567', id: 1},
    
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const contactObject = {
      name: newName,
      id: persons.length + 1,
      phoneNum: newNumber
    }

    setPersons(persons.concat(contactObject))
    console.log(persons);
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with 
        <input value={filter}
         onChange = {handleFilterChange} />
      </div>

      <ul style={{ listStyleType: "none", margin: 0, padding: 0}}>
        {filter && persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person =>
          <Person key = {person.name} name = {person.name} number = {person.phoneNum} />)}
      </ul>

      <h4>Add Contact:</h4>
      <form onSubmit = {addContact}>
        <div>
          name: <input value = {newName}
                 onChange = {handleNoteChange}/>
        </div>
        <div>
          number: <input value = {newNumber}
                  onChange = {handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0}}>
        {persons.map(person => 
          <Person key = {person.name} name = {person.name} number = {person.phoneNum} />)}
          
      </ul>
      

      ...
    </div>
  )
}

export default App