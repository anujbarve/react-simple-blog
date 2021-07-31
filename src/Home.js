import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title : 'My new Blog',body:'lorem ipsum...',author : 'Anuj Barve',id: 1},
        {title : 'My new Post',body:'lorem ipsum...',author : 'Alex',id: 2},
        {title : 'My new Forum',body:'lorem ipsum...',author : 'Anno',id: 3}
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}
 
export default Home;