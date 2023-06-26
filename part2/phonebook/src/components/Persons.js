function Person({ person, deletePerson }) {
    return (
        <p>
            {person.name} {person.number} <button onClick={deletePerson}>delete</button>
        </p>
    )
}
  
function Persons({ persons, deletePerson }) {
    return (
        <div>
            {persons.map(person => 
                <Person 
                    key={person.id}
                    person={person}
                    deletePerson={() => deletePerson(person.id)}
                />
            )}
        </div>
    )
}

export default Persons