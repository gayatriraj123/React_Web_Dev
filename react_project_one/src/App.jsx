import './App.css'
import UserCard from './components/userCard'
import A from './assets/a.jpg'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'
import { createContext, useState } from 'react'
import Button from './components/Button/Button'
import Card1 from './components/Card1/Card1'
import LogOut from './components/LogOut'
import LoginBtn from './components/LoginBtn'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponet from './components/TimerComponet'
import ChildA from './components/Child/ChildA'

  //step 1:
  //create context
  const UserContext = createContext();
  //step 2: wrap all the child inside a provider
  //step 3: pass the value
  //step 4: consumer ke andar jake consume karlo
  const ThemeContext = createContext();

function App() {
  // const[user, setUser] = useState({name:"gayatri"});
  const [theme, setTheme] = useState('light');
  return(
    <>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildA/>
        </div>
        
      </ThemeContext.Provider>
      {/* <UserContext value = {user}>
        <ChildA/>
      </UserContext> */}
    </>
  )
  ///////////
    // const [count, setCount] = useState(0);

    // function handleClick()
    // { 
    //   setCount(count+1);
    // }
    //////////////
    const [name, setName ]= useState(' ');
    /////////////////
    const[isLoggedIn, setLoggedIn] = useState(false);

    // if(!isLoggedIn)
    // {
    //   return (
    //     <LoginBtn/>
    //   )
    // }


    // return (
    //   <div>
    //     <h1>
    //       Welcome to everyone to web dev course
    //     </h1>
    //     <div>
    //       {isLoggedIn && <LogOut/>}
    //     </div>
    //   </div>
    // )

    // if(isLoggedIn)
    // {
    //     return(
    //       <LogOut/>
    //     )
    // }
    // else{
    //   return(
    //     <LoginBtn/>
    //   )
    // }

  // return (
  //     <div className='container'>

  //       {isLoggedIn ? <LoginBtn/> : <LogOut/>}  

  //       {/* <Card1 name = {name} setName={setName}/>
  //       <p>iam parent components and its value is {name }</p> */}

  //       {/* <Button handleClick ={handleClick}>
  //       <Button/> */}
  //       {/* <Button handleClick ={handleClick}>
  //         <h1>{count}</h1>
  //       </Button> */}


  //       {/* <UserCard name="Gayatri" desc="desc 1" image={A}/>
  //       <UserCard name="Jyotsna" desc="desc 2" image={A}/>
  //       <UserCard name="Babbar" desc="desc 3" image={A}/> */}
  //       {/* <Counter/> */}
  //       {/* <Card name="Gayatri rajguru">
  //           <h1>Best web dev course</h1>
  //           <p>this is first para tag in main tag</p>
  //           <p>this is second tag in main tag</p>
  //       </Card>  */}
  //     </div>  
  // )

  function handleClick()
  {
      alert(" I am Click");
  }
  function handleMouseOver()
  {
    alert(" Mouse on Paragraph ")
  }
  function handleInputChange(e)
  {
    // console.log("input me value chnaged hue hai")
    console.log(" value till not", e.target.value)
  }
  function handleSubmit(e)
  {
    e.preventDefault();   // becouse of that form do not reload
    //i am writing costom behavior down
    alert(" can i submit form")

  }

  //first -> side effect function
  // second -> clean up funtion
  // third -> comma saperated dependancy list 

  ///////variation:1
  //runs on every render

  const[count, setCount] = useState(0);
  const[total, setTotal] = useState(1);
  // useEffect(()=>{
  //   alert("i will run on each render")
  // })

  function handleClick(){
    setCount(count+1);
  }
  function handleClickTotal(){
    setTotal(total+1);
  }

  // variation 2:that runs on only first render
  // useEffect(()=>{
  //   alert("i will run on only first render")
  // },[])

  //varriation 3:
  // useEffect(()=>{
  //     alert("i will run evry time when count is updated")
  // },[count])

  //variation 4: multiple dependancies
  // useEffect(()=>{
  //   alert("i will run every time when count and total updated")
  // },[count,total])

  // variation 5: clean up function
  // useEffect(()=>{
  //     alert("count is updated")
  //     return()=>{
  //       alert(" count is unmounted from UI")
  //     }
  // },[count])




  // return (
  //   <div>
  //     <UserContext.Provider>
  //          <ChildA/>
  //     </UserContext.Provider>
      
  //     {/* <button onClick={handleClick}>
  //       click me
  //     </button>
  //     <br/>
  //     count is:{count}

  //     <button onClick={handleClickTotal}>
  //       update total
  //     </button>
  //     <br/>
  //     total is:{total} */}
  //   {/* <p onMouseOver={handleMouseOver} style={{border:"solid black 2px"}}>
  //     I am Paragraph
  //   </p>
  //    <button onClick={handleClick}>
  //       Click me
  //    </button>  */}
  //    {/* <form onSubmit={handleSubmit}>
  //     <input type='text' onChange={handleInputChange}>
  //     </input>
  //     <button type='submit'>Submit</button>
  //    </form> */}
  //    {/* <button onClick={alert("immediate invoke")}>
  //     click me 
  //    </button>
  //    <button onClick={() => alert("button are clicked")}> 
  //     click me
  //    </button> */}
     
  //   {/* // runs on every render */}
  //   {/* <LoggerComponent/> */}
  //   {/* //it will runs on first render */}
  //   {/* <TimerComponet/> */}
    
  //   </div>
  // )
}

export default App
// export {UserContext}
export  {ThemeContext}
 