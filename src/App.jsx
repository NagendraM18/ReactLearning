// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css';
import './Components/Student.jsx';
import StudentCard from './Components/Student.jsx';

function App() {

    

    
  
      return(  
      <>
         <h1>COLLEGE MANAGEMNET SYSTEM</h1>
          <StudentCard  studentsNames="Nagendra"  />
          <StudentCard studentsNames="kiran" >
             <p>We are in exploring the child  insde the props</p>
          </StudentCard>
      </>
      );
}
export default App;

