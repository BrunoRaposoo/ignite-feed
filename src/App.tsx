import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brunoraposoo.png',
      name: 'Bruno Raposo',
      role: 'Desenvolvedor web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      { type: 'paragraph', content: 'Saiba mais no link abaixo:',},
      { type: 'link', content: 'github.com/BrunoRaposoo'},
    ],
    publishedAt: new Date('2023-03-13 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal! 👋',},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👉',},
      { type: 'link', content: 'devonlane.design'},
    ],
    publishedAt: new Date('2023-03-14 16:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
