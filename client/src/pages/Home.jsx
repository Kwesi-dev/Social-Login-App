import { posts } from '../data'
import Card from '../components/Card.jsx'
import './home.css'
const Home = () => {
    return (
        <div className="home">
            {posts.map((post)=>
                <Card key={post.id} post={post}/>
            )}
        </div>
    )
}

export default Home
