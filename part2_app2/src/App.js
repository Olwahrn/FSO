import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <form>
        Filter by <input onChange={handleFilter} />
      </form>
    </div>
  )
}

const RenderNames = ({ namelist, filter }) => {
  const filteredNames = namelist.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredNames.map((name, index) => (
        <li key={index}>
          {name.name} {name.number}
        </li>
      ))}
    </div>
  )
}

const AddName = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();
    const alreadyAdded = persons.some((person) => person.name === newName);

    if (alreadyAdded) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }
  return (
    <div>
      <h2>Add info</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input
            pattern="[0-9]*"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [filter, setFilter] = useState('');

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <AddName persons={persons} setPersons={setPersons} />
      <RenderNames namelist={persons} filter={filter} />
    </div>
  )
}

export default App;
