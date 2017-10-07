import alt from '../Alt'

import WordpressSource from '../sources/WordpressSource';

class WordpressActions {
    fetchPosts(callback){
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            WordpressSource.getPosts()
                .then((posts) => {
                    this.updatePosts(posts);
                })
                .catch((errorMessage) => {
                    this.postsFailed(errorMessage);
                })
            
        }
    }
    
    updatePosts(posts){
        return posts;
    }
    postsFailed(errorMessage){
        return errorMessage;
    }
}

export default alt.createActions(WordpressActions);