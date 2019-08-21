import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";

function App() {
  const [posts, updatePosts] = useState([
    {
      title: "Hello World",
      excerpt: "Welcome to my cool blog article.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "hello-world"
    },
    {
      title: "Best Burgers in Town",
      excerpt: "Bobs burgers takes top burger prize for fifth year running.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "best-burgers"
    },
    {
      title: "Cool dogs I saw Today",
      excerpt: "Some really good dogs today, get the scoop.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "cool-dogs"
    },
    {
      title: "Fastest Turtle On my Block",
      excerpt:
        "We have a lot of really fast turtles in town, but this is the fastest.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "fastest-turtle"
    },
    {
      title: "Donuts to Die For",
      excerpt: "Fantastic donuts I love.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "donuts"
    },
    {
      title: "Mountain Unicycling",
      excerpt: "The hip new sport that's sweeping the nation.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "mountain-unicycle"
    },
    {
      title: "Birds are Real",
      excerpt: "Finally the proof we've all been waiting for..",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "birds-are-real"
    },
    {
      title: "My Last Post ever",
      excerpt: "I will never blog again, find out why.",
      tags: ["#tailwind", "#codeworkshop"],
      image: "/card-top.jpg",
      slug: "my-last-post-ever"
    }
  ]);
  return (
    <div class="flex flex-wrap bg-gray-200 items-center justify-center">
      <Router>
        <Header />
        <Route exact path="/" render={() => <BlogList posts={posts} />} />
        <Route
          path="/posts/:slug"
          render={props => <BlogDetail {...props} posts={posts} />}
        />
      </Router>
    </div>
  );
}

export default App;
