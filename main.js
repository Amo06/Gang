import { News, getNews, getPosts } from './moduleNews.js';

const postUrl = "https://api.jsonbin.io/b/5ec09de8a47fdd6af1648176/latest";   

getNews(postUrl,
    
    (newsList) => { 
        
    let returnHTML = "";
    
        newsList.forEach(
            
            element => { 
        returnHTML+=News.News(element.title, element.post).CreateHTML();
        });

        document.getElementById("posts").innerHTML = returnHTML;

    })
    
const songoltUrl = "https://api.jsonbin.io/b/5ec3dcd7e91d1e45d10d158d/latest";
getPosts(songoltUrl,
    (posts) => {
        posts.forEach(
            (post) =>
            {
                document.getElementById("posts").innerHTML += post.Create();
        })
    })    
        
    

