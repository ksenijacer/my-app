
import './App.css';

function App() {
      const animalList = [
      { vrsta: 'tigar' , ime: 'Leon', datum_rodjenja: new Date('2012-10-02')},
      { vrsta: 'pas', ime: 'Bela', datum_rodjenja: new Date('2020-06-03')},
      { vrsta: 'macka', ime: 'Krugi', datum_rodjenja: new Date('2018-08-09')},
      ];



  return (<div className="App">
  <table>
      {animalList.map((animal, index) => (
       <tr key={index}>
            <td>vrsta: {animal.vrsta} </td>
            <td>ime: {animal.ime} </td>
            <td>datum rodjenja:
            {animal.datum_rodjenja 
                    ? (animal.datum_rodjenja.toLocaleDateString())
                    : ("Nepoznat")}

            </td>
       </tr>
        ))}
        </table>
      </div>
    );
  }
export default App;
