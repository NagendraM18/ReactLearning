export function TeacherCard(propes)
{
    const { Name,subject }=propes
    return(
        <>
     <h1>{Name}</h1>
     <h1>{subject}</h1>
        </>
    )
}
