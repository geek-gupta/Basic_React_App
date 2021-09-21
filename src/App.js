import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react"/>
      <Todo text="Master react"/>
      <Todo text="Explore react"/>
    </div>
  )
}

export default App;
