import alt from '../Alt';
import WordpressActions from '../actions/WordpressActions';

class WordpressStore {
    constructor(){
        this.posts = [];
        this.errorMessage = null;

        this.bindListeners({
            handleFetchPosts: WordpressActions.FETCH_POSTS,
            handleUpdatePosts: WordpressActions.UPDATE_POSTS,
            handlePostsFailed: WordpressActions.POSTS_FAILED
        });
    }

    handleFetchPosts(){
        // wipe posts in anticipation of new content
        // so we can show a loading message
        this.posts = [];
    }

    handleUpdatePosts(posts){
        this.posts = posts;
    }
    handlePostsFailed(errorMessage){
        this.errorMessage = errorMessage;
    }
}

export default alt.createStore(WordpressStore, 'WordpressStore');