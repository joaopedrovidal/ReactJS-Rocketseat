import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

export function App() {
  return (
    <div>
    <Header />
    <Post 
      author="João Pedro" 
      content="Adoro programação"
    />
    <Post 
      author="Gustavo"
      content="Sou o 01 do jogo do bixo"
    />
    </div>
  )
}

