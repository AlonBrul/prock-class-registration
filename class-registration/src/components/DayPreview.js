import ClassList from "../ClassList"
const DayPreview = () => {
    const students = [{key: 1, name: 'אלון'}, {key: 2, name: 'דניאל'}, {key: 3, name: 'אביתר'}]

    return <ClassList>
        {[
          {key: 1, cname: 'ג-ד 2', students: students},
          {key: 2, cname: 'ה-ו 5', students: students},
        ]}
      </ClassList>
}

export default DayPreview