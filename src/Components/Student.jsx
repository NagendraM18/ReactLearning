import { Children } from 'react';
import '../index.css';

function StudentCard(propes)
{
  const {studentsNames , children , age="we ar default value"}=propes

   return (
    <>
    
   <h1>{studentsNames}</h1>
   <h1>{age}</h1>
   {children}

    </>
   );
}
export default StudentCard;