import './App.css';

import FirstComponent from "./components/FirstComponent"
import AnotherComponent from "./components/AnotherComponent";
import Images from "./components/Images"
import Hooks from "./components/Hooks"
import List from "./components/List"
import RenderCond from "./components/RenderCond"
import Fragment from "./components/Fragment"
import Container from "./components/Container"

function App() {
  return (
    <div className="App">
      <h2>Ola react</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond />
      <Fragment />
      <Container>
        <h1>Container Filho</h1>
      </Container>
    </div>
  );
}

export default App;
