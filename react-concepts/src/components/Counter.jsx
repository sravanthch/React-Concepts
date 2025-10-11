import { useState } from 'react'
import { Button } from 'primereact/button';
        

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='home-header'>
        <h2>{count}</h2>
        <Button label="-" onClick={()=>setCount(count-1)}/>
        <Button label="+" onClick={()=>setCount(count+1)}/>
    </div>
  )
}

export default Counter
