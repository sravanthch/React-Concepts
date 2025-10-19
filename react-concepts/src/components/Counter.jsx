import { useState } from 'react'
import { Button } from 'primereact/button';
import RedirectHome from './RedirectHome';


const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='home-header'>
      <h2>{count}</h2>
      <Button label="-" onClick={() => setCount(count - 1)} />
      <Button label="+" onClick={() => setCount(count + 1)} />
      <div>
        <RedirectHome />
      </div>
    </div>
  )
}

export default Counter
