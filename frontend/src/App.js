import React, { useState } from "react";
import "./App.css";
import api from "./services/api";
import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/sessions", { email });
    const { _id } = response.data;
    localStorage.setItem('user',_id);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"></img>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn " type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
