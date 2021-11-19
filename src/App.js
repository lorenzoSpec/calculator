import './App.css';
import Digit from './components/digits';

function App() {
  return (
    <div id="calculator">
      <Digit digit={"0"} id={"zero"} />
      <Digit digit={"1"} id={"one"} />
      <Digit digit={"2"} id={"two"} />
      <Digit digit={"3"} id={"three"} />
      <Digit digit={"4"} id={"four"} />
      <Digit digit={"5"} id={"five"} />
      <Digit digit={"6"} id={"six"} />
      <Digit digit={"7"} id={"seven"} />
      <Digit digit={"8"} id={"eight"} />
    </div>
  );
}

export default App;