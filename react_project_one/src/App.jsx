import './App.css'
import UserCard from './components/userCard'
import A from './assets/a.jpg'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'
import { useState } from 'react'
import Button from './components/Button/Button'
import Card1 from './components/Card1/Card1'

function App() {
  ///////////
    const [count, setCount] = useState(0);

    function handleClick()
    { 
      setCount(count+1);
    }
    //////////////
    const [name, setname ]= useState(' ');

  return (
      <div className='container'>

        <Card1 name = {name}/>

        {/* <Button handleClick ={handleClick}>
        <Button/> */}
        {/* <Button handleClick ={handleClick}>
          <h1>{count}</h1>
        </Button> */}


        {/* <UserCard name="Gayatri" desc="desc 1" image={A}/>
        <UserCard name="Jyotsna" desc="desc 2" image={A}/>
        <UserCard name="Babbar" desc="desc 3" image={A}/> */}
        {/* <Counter/> */}
        {/* <Card name="Gayatri rajguru">
            <h1>Best web dev course</h1>
            <p>this is first para tag in main tag</p>
            <p>this is second tag in main tag</p>
        </Card>  */}
      </div>  
  )
}

export default App
 