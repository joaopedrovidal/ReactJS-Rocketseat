import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author,publishedAt }){
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-Br', {
        day: '2-digit',
        month: 'long'
    })
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='17 de Setembro às 17:29h' dateTime='2024-09-17 17:29:48'>Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Falaaaa galeraaa👋</p>
                <p>Acabei de subir mais um projeto para o meu portifa. É um projeto que fiz no NLW Pocket, evento da Rocketseat🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div> 
        </article>
    );
}