import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import Condition from './components/Condition';
import ShoppingList from './components/ShoppingList';
import SharedButton from './components/SharedButton';

export default function App() {
  return (
    <div>
      <h1> Counters that update separately</h1>
      <MyButton/>
      <br/>
      <MyButton/>

      <br/>
      <SharedButton/>
      

      {/* <AboutPage/> */}

      {/* <Profile/> */}

      {/* <Condition /> */}

      {/* <ShoppingList/> */}
    </div>
  );
}

