import React from 'react'
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostCard from 'componentes/PostCard';
import { useParams } from 'react-router-dom';

export default function PostsRecomenados() {
    const idPostAberto = useParams().id;

    return (
        <section>
            <ul>
                {
                    posts.map( post => {
                        if(Number(idPostAberto) === post.id){
                            return;
                        }

                        return (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        )
                    } )
                }
            </ul>
        </section>
    )
}
