import './App.css'
import UserCard from './components/userCard'
import A from './assets/a.jpg'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'

function App() {
 

  return (
      <div className='container'>
        {/* <UserCard name="Gayatri" desc="desc 1" image={A}/>
        <UserCard name="Jyotsna" desc="desc 2" image={A}/>
        <UserCard name="Babbar" desc="desc 3" image={A}/> */}
        {/* <Counter/> */}
        <Card name="Gayatri rajguru">
            <h1>Best web dev course</h1>
            <p>this is first para tag in main tag</p>
            <p>this is second tag in main tag</p>
        </Card> 
      </div>  
  )
}

export default App
 