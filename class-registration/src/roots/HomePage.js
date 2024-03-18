import '../App.css';
import ClassList from '../ClassList'
import Class from '../Class';
import User from '../User';

function HomePage() {
  const students = [{key: 1, name: 'אלון'}, {key: 2, name: 'דניאל'}, {key: 3, name: 'אביתר'}]
  return (
    <div>
      <div className="dashboard">
        <User />
        <button className="menu-btn fa-solid fa-bars"></button>
      </div>
      <ClassList>
        <Class name='ג-ד 2' students={students} />
        <Class name='ה-ו 5' students={students} />
      </ClassList>
    </div>
  );
}

export default HomePage;