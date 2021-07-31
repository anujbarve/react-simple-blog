import {useState} from 'react';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title : 'My new Blog',body:'lorem ipsum...',author : 'Anuj Barve',id: 1},
        {title : 'My new Post',body:'lorem ipsum...',author : 'Alex',id: 2},
        {title : 'My new Forum',body:'lorem ipsum...',author : 'Anno',id: 3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author }</p>
                    <br />
                </div>
            ))}
        </div>
     );
}
 
export default Home;