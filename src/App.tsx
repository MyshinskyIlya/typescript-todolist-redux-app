import { TodoList } from "./components/TodoList";
import { UserList } from "./components/UserList";

function App() {
    return (
        <div>
            <UserList></UserList>
            <hr></hr>
            <TodoList></TodoList>
        </div>
    );
}
export default App;
