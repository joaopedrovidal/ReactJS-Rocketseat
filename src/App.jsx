import { Post } from "./Post"
import { Arquivo } from "./arquivo"

export function App() {
  return (
    <div>
    <Post 
      author="João Pedro" 
      content="Adoro programação"
    />
    <Post 
      author="Jefferson"
      content="Eu amo o Vasco da Gama"
    />
    <Arquivo 
      author="Kaio"
      content="Kaio é fã de Travis escoto"
    />
    </div>
  )
}

