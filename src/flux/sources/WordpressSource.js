import Api from './BaseApi';

let wordpressUrl = "https://www.techtrinity.co.uk/blog";

let pagesEndPoint = wordpressUrl + "/wp-json/wp/v2/pages"
let postsEndPoint = wordpressUrl + "/wp-json/wp/v2/posts"
let latestPostEndPoint = postsEndPoint + "?per_page=1";

var WordpressSource = {
    getPages: function(){
        return Api.get(pagesEndPoint);
    },

    getPosts: function(){
        return Api.get(postsEndPoint);
    },

    getLatestPost: function(){
        return Api.get(latestPostEndPoint);
    }
}

export default WordpressSource;