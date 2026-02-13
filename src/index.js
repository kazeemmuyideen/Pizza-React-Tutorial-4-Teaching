import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <Header />
      <Pizza />
      <Pizza />
      <Pizza />

      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open!
    </footer>
  );
  // return React.createElement("footer", null, "This is the footer");
}

function Pizza() {
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="spinaci pizza"></img>
      <h2>Pizza</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
