import Home from "./home/Home"
import { Routes, Route} from 'react-router-dom'
import Courses from "./courses/courses.jsx"
import Signup from "./Components/Signup.jsx"
import Contact from "./Components/Contact.jsx"

function App() {

  return (
    <>
    <div >
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/course" element={<Courses/>}/> 
       <Route path="/signup" element={<Signup/>}/> 
       <Route path="/contact" element={<Contact/>}/>  
    </Routes>
  
    </div>
   
    </>
  )
}

export default App
