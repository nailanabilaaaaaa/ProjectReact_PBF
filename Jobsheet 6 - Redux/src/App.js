import Table from "./containers/Table";
import CreateToDo from "./containers/CreateTodo";

function App(){
  return (
    <div className="container">
      <CreateToDo />
      <Table />
    </div>
  );
}

export default App;