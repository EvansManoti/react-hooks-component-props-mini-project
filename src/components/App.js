import React from "react";
import blogData from "../data/blog";
// import Button from "./button";
import Header from "./header";
import About from "./about";
import ArticleList from "./articlelist";
import Article from "./article";
console.log(blogData);

function App() {
  return (
    <div className="App">
    {/* /* You're on your own from here! Follow the deliverables; test things out in
the browser as you write your code; and good luck! */ }
      <Header/> 
      <About/>
      <ArticleList />
      <Article />
    </div>
  );
}

export default App;
