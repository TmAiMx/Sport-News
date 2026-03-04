let posts = JSON.parse(localStorage.getItem("posts")) || [];

/* Publish Post */
function publishPost(){

let title=document.getElementById("title").value;
let short=document.getElementById("short").value;
let image=document.getElementById("image").value;

posts.unshift({title,short,image});

localStorage.setItem("posts",JSON.stringify(posts));

renderPosts();
}

/* Delete Post */
function deletePost(){

let index=document.getElementById("deleteIndex").value;

posts.splice(index,1);

localStorage.setItem("posts",JSON.stringify(posts));

renderPosts();
}

/* Render News */
function renderPosts(){

let postsDiv=document.getElementById("posts");
if(!postsDiv) return;

postsDiv.innerHTML="";

posts.forEach((p,i)=>{

postsDiv.innerHTML+=`

<div class="post">
<h3>${p.title}</h3>
<img src="${p.image}">
<p>${p.short}</p>
<p>شماره: ${i}</p>
</div>
`;});

}

/* Ads System */
let adsData = {
image:"",
text:"",
link:""
};

function loadAds(){

document.getElementById("adsImage").src=adsData.image;
document.getElementById("adsText").innerText=adsData.text;
document.getElementById("adsLink").href=adsData.link;

}

window.onload=function(){
renderPosts();
loadAds();
  }
