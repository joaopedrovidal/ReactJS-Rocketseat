import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaopedrovidal.png',
      name: 'João Pedro',
      role: 'Web Developer'
    },
    content: [
    { type: 'paragraph', content: 'Falaaaa galeraaa👋',},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portifa. É um projeto que fiz no NLW Pocket, evento da Rocketseat🚀',},
    { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-09-18 13:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'May Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
    { type: 'paragraph', content: 'Falaaaa galeraaa👋',},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portifa. É um projeto que fiz no NLW Pocket, evento da Rocketseat🚀',},
    { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-09-19 13:08:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return( 
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

