
import './App.css';
import React, { useState } from 'react';

function App() {
      const animalList = [
      { vrsta: 'tigar' , ime: 'Leon', datum_rodjenja: new Date('2012-10-02')},
      { vrsta: 'pas', ime: 'Bela', datum_rodjenja: new Date('2020-06-03')},
      { vrsta: 'macka', ime: 'Krugi', datum_rodjenja: new Date('2018-08-09')},
      ];

      const [animals, setAnimals]= useState(animalList)

     const handleRemove = (index) => {
      const newAnimals = animals.filter((animal, i) => i !== index);

      setAnimals(newAnimals);
     }

     const handleMoveToTop = (index) => {
        const moveToTop = animals[index];

        const newAnimals = animals.filter((animal, i) => i !== index);

        setAnimals([moveToTop, ...newAnimals]);
     }






  return (<div className="App">
  <table>
      {animals.map((animal, index) => (
       <tr key={index}>
            <td>vrsta: {animal.vrsta} </td>
            <td>ime: {animal.ime} </td>
            <td>datum rodjenja:
            {animal.datum_rodjenja 
                    ? (animal.datum_rodjenja.toLocaleDateString())
                    : ("Nepoznat")}

            </td>
            <td>
            <button onClick={() => handleRemove(index)}>Remove</button>
            </td>
            <td>
            <button onClick={() => handleMoveToTop(index)}>Move to top</button>
            </td>
       </tr>
        ))}
        </table>
      </div>
    );
  }
export default App;
