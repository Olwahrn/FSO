import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const alreadyAdded = persons.some(person => person.name === newName)

    if (alreadyAdded){
      alert(`${newName} is already added to the phonebook`)
      return;
    }
    setPersons(persons.concat({newName, newNumber}))
    setNewName('')
    setNewNumber('')
    const nameObject = {
      name: newName,
      number: newNumber
     }
    setPersons(persons.concat(nameObject))
    setNewName('')
    }
  
  const renderNames = (namelist) => {
    return namelist
    .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map((name, index) => (
        <li key={index}>{name.name} {name.number}</li>
     ))
  }
  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)



  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form>
          Filter by <input
            onChange = {handleFilter}
            />



        </form>


      </div>
      <h2>Add info</h2>
      <form onSubmit = {addName}>
        <div>name: <input
         value={newName} 
         onChange={handleNameChange}
         /></div>
         <div>number:<input
         pattern="[0-9]*"
         value = {newNumber}
         onChange = {handleNumberChange}
         />
         
         </div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        <p>{renderNames(persons)}</p>
    </div>
  )

}

export default App


