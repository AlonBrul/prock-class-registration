import '../App.css';
import User from './User';

function HomePage() {
  return (
    <div>
      <div class="dashboard">
        <button class="menu-btn fa-solid fa-bars"></button>
      </div>

      <User />

      <div class="class"></div>
    </div>
  );
}

export default HomePage;
