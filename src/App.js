import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import Condition from './components/Condition';
import ShoppingList from './components/ShoppingList';
import SharedButton from './components/SharedButton';
import Board from './components/TicTacToe';
import Form from './components/Form';
import NewForm from './components/NewForm';
import Accordion from './components/Accordion';
import Messenger from './components/Messenger';

export default function App() {
  return (
    <div>

      <Messenger/>

      <Accordion/>

      <NewForm /> 

      <Form/>

      <Board />

      <h1> Counters that update separately</h1>
      <MyButton/>
      <br/>
      <MyButton/>

      <br/>
      <SharedButton/>
      

      <AboutPage/>

      <Profile/>

      <Condition />

      <ShoppingList/>
    </div>
  );
}

