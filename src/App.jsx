import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo Flamengo" className="logo" />
        <h2>Login</h2>
      </nav>
      <main>
        <div className="Imagem">
          <img src={flamengo} alt="" className="flamengo" />
        </div>
        <form className="Login">
          <h1>Login</h1>
          <p>Já possui cadastro? Acesse abaixo.</p>
          <p>Caso seja sócio trocedor com FlaID acesse através do FlaID</p>
          <input type="email" placeholder="Email" className="Email"/>
          <input type="password" placeholder="Senha" className="Senha"/>
          <p className="forget">Esqueceu a senha?</p>
          <button
            className="Entrar"
          >
            Entrar
          </button>
          <p className="conta">
            Não possui uma conta? <a href="">Crie agora</a>
          </p>
          <button className="FlaID">
            <p>Entrar com </p>
            <img src={logo} alt="logo" />
            <h2 className="FlaIdTexto">Fla-ID</h2>
          </button>
        </form>
      </main>
      <footer>
        <img src={logo} alt="" className="logoFooter" />
        <img src={powered} alt="" className="powered" />
        <div className="Texto-footer">
          <div>
            <p>Termos de uso</p>
            <p>Aviso de privacidade</p>
          </div>
          <div>
            <p>Perguntas Frequentes</p>
            <p>Política de Cancelamento</p>
          </div>
          <div>
            <p>Entre ou cadastre-se</p>
            <p>Compre seu ingresso</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
