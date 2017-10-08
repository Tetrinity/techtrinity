import alt from '../Alt'

import WordpressSource from '../sources/WordpressSource';

class WordpressActions {
    fetchPosts(latestOnly){
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();

            let getFunction;
            if (latestOnly){ getFunction = WordpressSource.getLatestPost; }
            else { getFunction = WordpressSource.getPosts; }

            getFunction()
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