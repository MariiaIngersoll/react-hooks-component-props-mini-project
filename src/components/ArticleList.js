import React from "react";
import Article from "./Article";

function ArticleList({post}) {
  const post1 = post.map((post)=>{
    return <Article key={post.id} title={post.title} preview={post.preview} date={post.date}
  />
  })
  console.log(post)
  return (
    <main>
      {post1}
    </main>
  );
}

export default ArticleList;
