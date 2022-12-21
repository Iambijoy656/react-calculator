import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult('')

  }
  const backSpace = () => {
    setResult(result.slice(0, result.length - 1))

  }

  const calculate = () => {

    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult('error')
    }

  }





  return (
    <div className=" w-1/2 mx-auto my-10">
      <form action="" className=''>
        <input value={result} type="text" placeholder="0" className="input input-bordered text-right  text-black input-lg w-full max-w-full my-2" />
      </form>

      <div className='grid grid-cols-3 gap-4'>
        <button onClick={clear} className='btn bg-gray-500'>Clear</button>
        <button onClick={backSpace} className='btn bg-gray-500'>C</button>
        <button name='/' onClick={handleClick} className='btn bg-gray-500'>&divide;</button>
        <button name='7' onClick={handleClick} className='btn btn-accent'>7</button>
        <button name='8' onClick={handleClick} className='btn btn-accent'>8</button>
        <button name='-' onClick={handleClick} className='btn bg-gray-500'>&ndash;</button>
        <button name='9' onClick={handleClick} className='btn btn-accent'>9</button>
        <button name='4' onClick={handleClick} className='btn btn-accent'>4</button>
        <button name='*' onClick={handleClick} className='btn bg-gray-500'>&times;</button>

        <button name='5' onClick={handleClick} className='btn btn-accent'>5</button>
        <button name='6' onClick={handleClick} className='btn btn-accent'>6</button>
        <button name='+' onClick={handleClick} className='btn bg-gray-500'>+</button>
        <button name='1' onClick={handleClick} className='btn btn-accent'>1</button>
        <button name='2' onClick={handleClick} className='btn btn-accent'>2</button>
        <button name='' onClick={calculate} className='btn bg-gray-500'>=</button>
        <button name='3' onClick={handleClick} className='btn btn-accent'>3</button>

        <button name='0' onClick={handleClick} className='btn btn-accent'>0</button>
        <button name='.' onClick={handleClick} className='btn btn-accent'>.</button>

      </div>



    </div>
  );
}

export default App;
