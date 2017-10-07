import Api from './BaseApi';

let wordpressUrl = "http://ec2-18-221-192-144.us-east-2.compute.amazonaws.com";

let pagesEndPoint = wordpressUrl + "/wp-json/wp/v2/pages"
let postsEndPoint = wordpressUrl + "/wp-json/wp/v2/posts"

var WordpressSource = {
    getPages: function(){
        return Api.get(pagesEndPoint);
    },

    getPosts: function(){
        return Api.get(postsEndPoint);
    }
}

export default WordpressSource;