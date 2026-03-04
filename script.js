let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts(){
let postsDiv = document.getElementById("posts");
postsDiv.innerHTML = "";

posts.forEach((post,index)=>{
postsDiv.innerHTML += `
<div class="post">
<h3>${post.title}</h3>
<img src="${post.image}" width="100%">
<p>${post.content}</p>
<button onclick="deletePost(${index})">Delete</button>
</div>
`;
});
}

function deletePost(index){
posts.splice(index,1);
localStorage.setItem("posts", JSON.stringify(posts));
renderPosts();
}

renderPosts();
