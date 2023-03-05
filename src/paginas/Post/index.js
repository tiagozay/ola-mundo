import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Banner from 'componentes/Banner';
import PostsRecomenados from 'componentes/PostsRecomendados';
import styles from './Post.module.css';
import PostCard from 'componentes/PostCard';


export default function Post() {
    const idPost = useParams().id;

    const post = posts.find(post => post.id === Number(idPost));

    if (!post) {
        return <NaoEncontrada></NaoEncontrada>
    }

    const postsRecomenados = posts
        .filter( post => post.id !== Number(idPost)  )
        .sort( (a, b) => b.id - a.id )
        .slice(0, 4 );

    return (
        <PaginaPadrao>
            <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                <div className='post-markdown-container'>
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

                <ul className={styles.postsRecomendados}>
                    {
                        postsRecomenados.map( post => (
                            <li key={post.id}>
                                <PostCard post={post}/>
                            </li>
                            
                        ) )
                    }
                </ul>
            </PostModelo>


        </PaginaPadrao>



    )
}
