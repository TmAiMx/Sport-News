let posts = JSON.parse(localStorage.getItem("posts")) || [];

function toggleMenu(){
let menu=document.getElementById("menu");

if(menu.style.display==="block"){
menu.style.display="none";
}else{
menu.style.display="block";
}
}

function renderPosts(){

let postsDiv=document.getElementById("posts");
if(!postsDiv) return;

postsDiv.innerHTML="";

posts.forEach(post=>{
postsDiv.innerHTML+=`

<div class="post">
<h2>${post.title}</h2>
<img src="${post.image}">
<p>${post.short}</p>
</div>
`;
});
}window.onload=renderPosts;
