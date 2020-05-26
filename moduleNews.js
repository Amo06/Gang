export let News = {
    
    News: function (_title, _body) { this.title = _title; this.body = _body; this.like = 0; return this;},
    
    CreateHTML: function () { 
        let returnHTML="";
    
        return returnHTML += '\
        <article> \
        <h3 class="newsTitle">' + this.title + '</h3>\
        <p class="newsBody">' + this.body + '</p>\
        </article>'
    },

    Like: function () { this.like++; }
}

export function getNews(url, callMeBack) { 
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callMeBack(data.news);
    })
}




export function getPosts(url, callMeBack) { 
    
    fetch(url)
    .then(response => response.json())
        .then(data => {
            let posts = [];
            data.songolt.forEach((post) => { posts.push(new Post(post.title, post.body, post.img, post.name, 0))})
        callMeBack(posts);
    })
}

export class Post { 

    constructor(_title, _post, _img, _name, _like) { 
        this.title = _title;
        this.post = _post;
        this.img = _img;
        this.name = _name;
        this.like = _like;
    }

    Create() {
        // return '<article> \
        // <h3 class="newsTitle2">' + this.title + '</h3>\
        // <p class="newsBody">' + this.post + '</p>\
        // <div>'+ this.like + '</div></article>'
        
        return `<article>
        <h3 class="newsTitle3">${this.title}</h3>
        <p class="newsBody3">${this.post}</p>
        <div class="songoltImgName">
        <img class="songoltImg" src="${this.img}" alt="">
        <div class="songoltName">${this.name}</div>
        <div class="songoltSetguulch">Сэтгүүлч</div>
        </div>
        <div>${this.like}</div>
        </article>`

     }
    
}
