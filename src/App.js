import "./App.css";
import memberStore from "./stores/memberStore";
import MemberList from "./components/MemberList";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My library</h1>
      <h2>Our Members</h2>
      <MemberList /> <BookList />
    </div>
  );
}

export default App;
