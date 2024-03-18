import Student from "./Student";
import { useState } from "react";

const Class = (props) => {
    const cname = props.cname;
    const students = props.students.map(student => {
                return <Student key={student.key} name={student.name}/>})
    const [showStudents, setShowStudents] = useState(false)

    const ShowStudents = () => {
        if (showStudents) {
            setShowStudents(false)
        } else {
            setShowStudents(true)
        }
    }

    return <>
        <button className="class-card big-card" onClick={ShowStudents}>{cname}</button>
        <div className='student-list'>
            {
                 showStudents ? students : null 
            }
        </div>
    </>
}

export default Class;