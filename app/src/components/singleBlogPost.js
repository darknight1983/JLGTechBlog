import React from 'react';
import Header from './Header'



const singleBlogPost = (props) => {
    const {title, post} = props.location.state.blogInfo;
    return (
        <React.Fragment>
            <Header />
            <h1>{title}</h1>
            <p>{post}</p>
        </React.Fragment>

    )
}

export default singleBlogPost;