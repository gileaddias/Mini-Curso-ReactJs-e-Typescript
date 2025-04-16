import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const [name, setName] =useState('Gilead')
  const [age, setAge] =useState(90);
  const [bg, setBg] = useState('#FF0000');

  const[list, setList] = useState{[
    "O rato roeu a roupa do rei de Roma",
    "aqui vai uma frase poetica",
    "A inspiração dessse programador é pouca"
  ]};

  const handle31 = () => {
    setAge(31);
    setBg("#00FF00");
  }
  const handle31 = () => {
    setAge(90);
    setBg("#FF0000");
  }

return (
  <div style={{backgroundColor: bg}}>
    <Header name={name} age={age} />

    <button onClick={handle31}>Tenho 31 anos</button>
    <button onClick={handle90}>Tenho 90 anos</button>

    {age === 90 &&
      <button onClick={handle31}>Tenho 31 anos</button>      
    }
    {age === 31 &&
      <button onClick={handle90}>Tenho 90 anos</button>      
    }

    <hr />
    <ul>
      {list.map((item, index)=>(
        <li> key={index}>{frase}</li>
      ))}
    </ul>

    <Footer/>
  </div>
)
}

export default App;