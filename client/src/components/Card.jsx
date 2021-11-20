import './card.css'
import { Link } from 'react-router-dom'
const Card = ({ post }) => {
    return (
        <div className="card">
            <Link to={`/post/${post.id}`} className="link">
                <span className="postTitle">{post.title}</span>
                <img src={post.img} alt="" className="postImg" />
                <p className="desc">{post.desc}</p>
                <button className="cardBtn">Read More</button>
            </Link>
        </div>
    )
}

export default Card
