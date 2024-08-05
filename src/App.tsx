import './App.css'
import {useState} from 'react'


export default function App() {
  const [done, setDone] = useState("empty password")
  const [password, setPassword] = useState("")
  const [statements, setStatements] = useState([
    "Please enter any the password"
  ])
  const actionHandler = function(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setPassword(e.target.value)
    setDone("complete password")
    console.log(password+" => "+password.length)
    if(password === ''){
      console.log(password.length)
      setStatements([
        "Please enter any the password"
      ])
      setDone("empty password")
    }
  }
  return (
    <main>
      <div className='app'>
        <form>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={done}
            placeholder="Enter the password"
            onChange={actionHandler}
            />
        </form>
        <ol>
          {statements.map((statement) => {
            return <li>{statement}</li>
          })}
        </ol>
      </div>
    </main>
  )
}