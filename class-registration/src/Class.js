import Student from "./Student";
import { useState } from "react";

const Class = (props) => {
    const name = props.name;
    const students = props.students.map(student => {
                return <Student name={student.name} key={student.key}/>})
    const dates = [];
    const [showStudents, setShowStudents] = useState(false)

    const ShowStudents = () => {
        if (showStudents) {
            setShowStudents(true)
        } else {
            setShowStudents(false)
        }
    }

    return <div>
        <button className="class-card big-card" onClick={ShowStudents}>{name}</button>
        <div className='student-list'>
            {students}
        </div>
    </div>
}

export default Class;