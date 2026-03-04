function publishPost(){

let title=document.getElementById("title").value;
let short=document.getElementById("short").value;
let full=document.getElementById("full").value;
let image=document.getElementById("image").value;

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

posts.unshift({title,short,full,image});

localStorage.setItem("posts",JSON.stringify(posts));

alert("Post Published");

location.reload();
}

function deletePost(index){

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

posts.splice(index,1);

localStorage.setItem("posts",JSON.stringify(posts));

location.reload();
}

window.onload=function(){

let posts=JSON.parse(localStorage.getItem("posts")||"[]");

let html="";
let adminHtml="";

posts.forEach((p,index)=>{

html+=`

<div class="post">
<h2>${p.title}</h2>
<img src="${p.image}">
<p>${p.short}</p>
<button onclick="alert('${p.full}')">Read More</button>
</div>
`;adminHtml+=`

<div>
${p.title}
<button onclick="deletePost(${index})">Delete</button>
</div>
`;});

if(document.getElementById("posts")){
document.getElementById("posts").innerHTML=html;
}

if(document.getElementById("adminPosts")){
document.getElementById("adminPosts").innerHTML=adminHtml;
}

}
