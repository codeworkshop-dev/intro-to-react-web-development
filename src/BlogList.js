import React from "react";
import BlogItem from "./BlogItem";

function BlogList({ posts }) {
  return (
    <>
      {posts.map(post => (
        <BlogItem
          title={post.title}
          excerpt={post.excerpt}
          tags={post.tags}
          image={post.image}
          slug={post.slug}
        />
      ))}
    </>
  );
}

export default BlogList;
