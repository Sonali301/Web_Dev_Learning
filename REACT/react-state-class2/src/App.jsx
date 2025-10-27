import './App.css'
// import LudoBoard from './LudoBoard'
// import TodoList from './TodoList';
import Lottery from './Lottery';
import {sum} from "./helper";



function App() {

  let winCondition = (ticket) => {
    // return sum (ticket)  === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  }

  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      <Lottery n={3} winCondition={winCondition}/>

    </>
  );
}

export default App;
