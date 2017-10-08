import React from 'react';

import Title from '../common/Title';

import Timestamp from './Timestamp';

class BlogPost extends React.PureComponent {

    render(){
        let json = this.props.json;

        if (!json){
            return (
                <div className="loading">
                    Loading...
                </div>
            )
        }

        let isPreview = this.props.preview;

        let title = json.title.rendered;
        let datePosted = json.date;

        let content;
        if (isPreview){ content = { __html: json.excerpt.rendered } }
        else { content = { __html: json.content.rendered } }
        
        return (
            <div className="blogPost">
                <Title noSpacer separator text={title}/>
                <Timestamp time={datePosted}/>
                <div className="content" dangerouslySetInnerHTML={content}></div>
            </div>
        )
    }

}

export default BlogPost;