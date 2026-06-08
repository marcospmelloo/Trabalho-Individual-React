import { useState } from "react";
import logo from './assets/logo.png'
import flamengo from './assets/flamengo.png'
import powered from './assets/logo-futebolcard-powered-by.png'
import styles from './styles.module.css';

function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo Flamengo" className={styles.logo} />
        <h2>Login</h2>
      </nav>
      <main>
        <div className={styles.imagem}>
          <img src={flamengo} alt="" className={styles.flamengo}/>
        </div>
        <form className={styles.login}>
          <h1>Login</h1>
          <p>Já possui cadastro? Acesse abaixo.</p>
          <p>Caso seja sócio trocedor com FlaID acesse através do FlaID</p>
          <input type="email" placeholder="Email" className={styles.email}/>
          <input type="password" placeholder="Senha" className={styles.senha}/>
          <p className={styles.forget}>Esqueceu a senha?</p>
          <button
            className={styles.entrar}
          >
            Entrar
          </button>
          <p className={styles.conta}>
            Não possui uma conta? <a href="">Crie agora</a>
          </p>
          <button className={styles.flaID}>
            <p>Entrar com </p>
            <img src={logo} alt="logo" />
            <h2 className={styles.flaIdTexto}>Fla-ID</h2>
          </button>
        </form>
      </main>
      <footer>
        <img src={logo} alt="" className={styles.logoFooter}/>
        <img src={powered} alt="" className={styles.powered}/>
        <div className={styles.textoFooter}>
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
