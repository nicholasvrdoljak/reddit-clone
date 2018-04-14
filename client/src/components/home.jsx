import React from 'react';
import Post from './post.jsx';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subreddits: [],
            mySubreddits: [],
            posts: [],
            postOrder: 'likes'
        };

        this.fetchPosts = this.fetchPosts.bind(this);
        this.handleNewClick = this.handleNewClick.bind(this);
        this.handleTopClick = this.handleTopClick.bind(this);
    }

    componentWillMount() {
        this.fetchPosts();
    }

    fetchPosts(orderCriteria = 'likes') {  // takes 'likes' or 'time'
        axios.get(`http://localhost:3000/api/home/posts/${orderCriteria}`)
             .then((response) => {
                 this.setState({ posts: response.data });
             });
    }
    
    handleTopClick() {
        this.fetchPosts('likes');
        this.setState({ postOrder: 'likes' });
    }

    handleNewClick() {
        this.fetchPosts('time');
        this.setState({ postOrder: 'time' });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="ui buttons">
                        <button className="ui button" onClick={this.handleTopClick}>Top</button>
                        <button className="ui button" onClick={this.handleNewClick}>New</button>
                    </div>
                </div>
                {this.state.posts.map((post) => {
                    return <Post 
                            key={post._id} 
                            post={post} 
                            changeActivePost={this.props.changeActivePost} 
                            fetchPosts={this.fetchPosts}
                            order={this.state.postOrder} 
                            />
                })}
            </div>
        );
    }
}

export default Home;