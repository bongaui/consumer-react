import logo from "./logo.svg";
import { BongaButton } from "@bongaui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <BongaButton color="primary">Primary</BongaButton>
      <BongaButton color="secondary">Secondary</BongaButton>
      <BongaButton color="tertiary">Tertiary</BongaButton>
      <BongaButton>Default</BongaButton>

      <h2>Block Width</h2>
      <BongaButton color="primary" expand="block">
        A block button
      </BongaButton>

      <h2>Full Width</h2>
      <BongaButton color="secondary" expand="full">
        A full-width button
      </BongaButton>
    </div>
  );
}

export default App;
