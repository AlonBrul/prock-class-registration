import Class from './Class'
const ClassList = ({children}) => {

    return <div className="class-list">
        { children.map(child => { return <Class key={child.key} cname={child.cname} students={child.students}/>}) }
        </div>
}

export default ClassList