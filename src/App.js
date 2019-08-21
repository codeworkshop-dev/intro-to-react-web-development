import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Header from "./Header";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";

function App() {
  const [posts, updatePosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://demo2151793.mockable.io/posts");

      updatePosts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap bg-gray-200 items-center justify-center">
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
