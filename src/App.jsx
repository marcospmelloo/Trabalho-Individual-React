import { useState, useEffect } from "react";
import logo from './assets/logo.png'
import flamengo from './assets/flamengo.png'
import powered from './assets/logo-futebolcard-powered-by.png'
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgb(0, 0, 0);
  height: 80px;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  `;

  const Logo = styled.img`
  width: 3rem;
  `;

  const Main = styled.main`
    background-color: rgb(12, 12, 12);
    display: flex;
    flex-direction: row;
  `;

  const ImagemFlamengo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const Login = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 4rem;
    margin-left: 50px;

    h1 {
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
    }

    input {
      margin-top: 1rem;
      margin-bottom: 10px;
      padding-left: 20px;
    }
  `;

  const Email = styled.input`
    width: 25rem;
    height: 3rem;
    border-radius: 16px;
    border: 1px solid rgb(68, 67, 67);
    background-color: rgb(27, 27, 27);
  `;

  const Senha = styled.input`
    margin-top: 1rem;
    width: 25rem;
    height: 3rem;
    border-radius: 16px;
    border: 1px solid rgb(68, 67, 67);
    background-color: rgb(27, 27, 27);
  `;

  const EsqueceuSenha = styled.p`
    margin-left: 15rem;
    font-size: 12px;
    text-align: right;
    margin-top: 10px;
    color: rgb(163, 166, 168);
  `;

  const Entrar = styled.button`
    margin-top: 1rem;
    width: 25rem;
    height: 3rem;
    background-color: rgba(218, 30, 30, 0.918);
    color: black;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 0px solid;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      scale: 1.2;
      background-color: rgba(150, 28, 28, 0.918);
    }
  `;

  const Conta = styled.p`
    a {
      text-decoration: none;
      color: rgba(238, 74, 74, 0.918);
      font-size: 17px;
    }
  `;

  const FlaID = styled.button`
    margin-top: 1rem;
    width: 25rem;
    height: 3rem;
    background: transparent;
    border: 2px solid rgba(218, 30, 30, 0.918);
    border-radius: 8px;
    color: rgba(218, 30, 30, 0.918);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgba(218, 30, 30, 0.918);
      color: white;
    }

    img {
      width: 20px;
      height: 20px;
      margin-left: 3px;
      margin-right: 3px;
    }
  `;

  const FlaIDTexto = styled.h2`
    color: rgba(238, 74, 74, 0.918);
    font-size: 30px;
  `;

  const Footer = styled.footer`
    background-color: rgb(0, 0, 0);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    color: white;
  `;

  const TextoFooter = styled.h2`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    font-size: 16px;
    margin-right: 3rem;
  `;

  const Powered = styled.img`
    margin-left: -30rem;
    width: 8rem;
  `;

  const LogoFooter = styled.img`
    width: 4rem;
  `;


function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificarLogin, setVerificarLogin] = useState(false);
  const [primeiroRender, setPrimeiroRender] = useState(true);

  const handleLogin = () => {
  console.log("Email:", email);
  console.log("Senha:", senha);
  setVerificarLogin(!verificarLogin);
  setPrimeiroRender(false);
};

  useEffect(() => {
    if (primeiroRender) return;
    if (email === "marcospaulo@gmail.com" && senha === "senha") {
    alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha inválidos!"); 
    }
}, [verificarLogin]);

  return (
    <>
      <Nav>
        <Logo src={logo} alt="logo Flamengo" />
        <h2>Login</h2>
      </Nav>
      <Main>
        <div>
          <ImagemFlamengo src={flamengo} alt=""/>
        </div>
        <Login>
          <h1>Login</h1>
          <p>Já possui cadastro? Acesse abaixo.</p>
          <p>Caso seja sócio trocedor com FlaID acesse através do FlaID</p>
          <Email type="email" placeholder="Email" 
          value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Senha type="password" placeholder="Senha"
          value={senha} onChange={(e) => setSenha(e.target.value)}/>
          <EsqueceuSenha>Esqueceu a senha?</EsqueceuSenha>
          <Entrar
            type="button"
            onClick={handleLogin}
          >
            Entrar
          </Entrar>
          <Conta>
            Não possui uma conta? <a href="">Crie agora</a>
          </Conta>
          <FlaID>
            <p>Entrar com </p>
            <img src={logo} alt="logo" />
            <FlaIDTexto>Fla-ID</FlaIDTexto>
          </FlaID>
        </Login>
      </Main>
      <Footer>
        <LogoFooter src={logo} alt=""/>
        <Powered src={powered} alt=""/>
        <TextoFooter>
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
        </TextoFooter>
      </Footer>
    </>
  );
}

export default App;
