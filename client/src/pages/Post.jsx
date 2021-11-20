import './post.css'
import { posts } from '../data'
import { useLocation } from 'react-router-dom'

const Post = () => {
    const location = useLocation()
    const postId = location.pathname.split("/")[2]
    const post = posts.find((p)=> p.id.toString() === postId)
    return (
        <div className="post">
            <img src={post.img} alt="" className="pstImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="lngDesc">{post.lngDesc}</p>
        </div>
    )
}

export default Post
