import { useState, useEffect } from 'react';
import personsService from './services/persons'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const personsToShow = filter
    ? persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const addPerson = (event) => {
    event.preventDefault()
    const alreadyExistsPerson = persons.filter(person => 
      person.name === newName)

    if (alreadyExistsPerson.length) {
      if (window.confirm(`${newName} is already added to phonebook, replace te old number with a new one?`)) {
        const updatedPersonObject = {
          ...alreadyExistsPerson[0],
          number: newNumber
        }
        personsService
          .update(updatedPersonObject.id, updatedPersonObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('');
          })
      }
    } else if (newName && newNumber) {
      const newPersonObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(newPersonObject)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('');
          setMessage({
            text: `Added ${createdPerson.name}`,
            isError: false
          })
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        }) 
    }
  }

  const deletePerson = id => {
    const personForDelete = persons.filter(p => p.id === id)[0]
    if (window.confirm(`Delele ${personForDelete.name} ?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          setMessage({
            text: `Information of ${personForDelete.name} has already been removed from server`,
            isError: true
          })
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message}/>

      <Filter 
        filter={filter} 
        onChangeHandler={handleFilterChange}
      />

      <h2>Add a new</h2>

      <PersonForm
        formSubmitHandle={addPerson}
        nameValue={newName}
        nameChangeHandle={handleNameChange}
        numberValue={newNumber}
        numberChangeHandle={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons 
        persons={personsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App