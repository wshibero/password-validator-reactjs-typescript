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
    let endstatement: string[] = []
    let regex = new RegExp("[!@#$%^&*()-=1234567890]")
    console.log(password+" => "+password.length)
    if (password.length < 8){
      endstatement.push("The password must be more than 8 characters")
    }
    if(regex.test(password) === false){
      endstatement.push("The password must contain some special characters")
    }
    if (endstatement.length > 0){
      setStatements(endstatement)
      setDone("incomplete password")
    }else{
      setDone("complete password")
      setStatements(["The password is valid"])
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
        <ol style={{ listStyleType: 'none' }}>
          {statements.map((statement) => {
            return <li>{statement}</li>
          })}
        </ol>
      </div>
    </main>
  )
}