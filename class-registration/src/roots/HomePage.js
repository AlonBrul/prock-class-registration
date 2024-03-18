import '../App.css';
import ClassList from '../ClassList'
import User from '../User';

function HomePage() {
  const students = [{key: 1, name: 'אלון'}, {key: 2, name: 'דניאל'}, {key: 3, name: 'אביתר'}]
  return (
    <>
      <div className="dashboard">
        <User />
        <button className="menu-btn fa-solid fa-bars"></button>
      </div>
      <ClassList>
        {[
          {key: 1, cname: 'ג-ד 2', students: students},
          {key: 2, cname: 'ה-ו 5', students: students},
        ]}
      </ClassList>
    </>
  );
}

export default HomePage;