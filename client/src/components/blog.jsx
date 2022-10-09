import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();

    return (
        <div className="blog-container">
            <div>
                <h1>Blog is currently unavailable.</h1>
                <p>Everything should work again soon.</p>
                <a href="#" onClick={() => navigate(-1)}>Go back to the previous page</a>
            </div>
        </div>
    )
}

export default Blog;