import { useState,useCallback, useEffect ,useRef} from 'react'
import "./App.css"

function App() {
  const [length, setlength] = useState(0)
   const [numberallowed,setnumallowed]=useState(false);
   const [charallowed,setcharallowed]=useState(false);
   const [password ,setpassword]=useState("")
    //ref hook 
  const passwordref=useRef(null)
    
   const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyz"
  if (numberallowed)str+="0123456789"
  if (charallowed) str+="!@#$%^&*()"
  for(let i =2;i<=length;i++){
  let char=Math.floor(Math.random()* str.length+1)
  pass+=str.charAt(char)
 }
 setpassword(pass)

},[length,charallowed,numberallowed,setpassword])

const passwordcopyfunc=useCallback(()=>{
  passwordref.current?.select()
  alert("copied to clipboard")
  window.navigator.clipboard.writeText(password)
},[password])
  useEffect(()=>{
  passwordgenerator()},[length,charallowed,numberallowed,passwordgenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 justify-center'>
    <h1 className="text-4xl text-center text-white" > password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password} className ="outlie-none w-full py-1 px-3 " placeholder="password"  ref={passwordref} readOnly></input>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={passwordcopyfunc}>copy</button>
      </div>
      <div className ="flex text-sm gap-x-2">
        <div className ="flex items-center  gap-x-1">
          <input type="range" min={8} max={100} value={length} className ="cursor-pointer" onChange={(e)=>{setlength(e.target.value)}}/>
          <label>length:{length}</label>
        </div>
        <div className ="flex items-center gap-x-2">
          <input type="checkbox" defaultChecked={numberallowed} id ="numberInput" onChange={()=>{setnumallowed((prev)=>!prev)}}></input>
        <label htmlFor="numberInput">Numbers</label></div>
        <div className ="flex items-center gap-x-2">
          <input type="checkbox" defaultChecked={charallowed} id ="charInput" onChange={()=>{setcharallowed((prev)=>!prev)}}></input>
        <label htmlFor="charInput">character</label>
        </div>
        <input type="text" />
      </div>
    </div>
    </>
  )
}

export default App
