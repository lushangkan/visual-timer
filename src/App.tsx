import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <main className="container">
      <span className="bg-amber-300 text-white">
        Tailwind is working!
      </span>
      <div className="">
        <Button>Click me</Button>
      </div>
    </main>
  );
}

export default App;
