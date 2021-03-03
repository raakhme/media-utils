import { useMediaQuery, media } from "./media";
import "./styles.css";

console.log(media.xs`color: white`);
console.log(media.lg`color: white`);

export default function App() {
  const matches = useMediaQuery("(min-width: 400px)");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
