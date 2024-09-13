import React from 'react'
import Person from './Person'    //used for refactoring

function NameList() {
    const names = ["Hisham", "Shafeeq", "Suneer"]
    const persons = [
        {
            id: 1,
            name: "Hisham",
            age: 22
        },
        {
            id: 2,
            name: "Shafeeq",
            age: 21
        },
        {
            id: 3,
            name: "Suneer",
            age: 20
        }
    ]



    // const Info = persons.map(person => (
    //     <h2 key={person.id}>I'm {person.name}. I'm {person.age} years old</h2>
    // )
    // )

    // refactor
    const Info = persons.map(person => <Person key={person.id} person={person} />)

  return (
    <div>
        {Info}
        {/* <h1>{names[0]}</h1> 
        <h1>{names[2]}</h1> 
        <h1>{names[1]}</h1>       */}

        {/* map */}
        {
            names.map(name => <h2>{name}</h2>)
        }

        {/* filter */}
        {/* {
            names.filter(name => (name.length>6))
        } */}
    </div>
)
}

export default NameList
