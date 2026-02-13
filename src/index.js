import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 /*style={{ color: "red", fontSize: "25", textTransform: "uppercase" }}*/
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

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
      <h3>Pizza</h3>
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
