import React, { useState } from 'react'
import BlogItem from './BlogItem'
import './App.css'
import Header from './Header'

function App() {
  const [posts, updatePosts] = useState([
    {
      title: 'Hello World',
      excerpt: 'Welcome to my cool blog article.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Best Burgers in Town',
      excerpt: 'Bobs burgers takes top burger prize for fifth year running.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Cool dogs I saw Today',
      excerpt: 'Some really good dogs today, get the scoop.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Fastest Turtle On my Block',
      excerpt:
        'We have a lot of really fast turtles in town, but this is the fastest.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Hello World',
      excerpt: 'Welcome to my cool blog article.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Best Burgers in Town',
      excerpt: 'Bobs burgers takes top burger prize for fifth year running.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Cool dogs I saw Today',
      excerpt: 'Some really good dogs today, get the scoop.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
    {
      title: 'Fastest Turtle On my Block',
      excerpt:
        'We have a lot of really fast turtles in town, but this is the fastest.',
      tags: ['#tailwind', '#codeworkshop'],
      image: '/card-top.jpg',
    },
  ])
  return (
    <div class="flex flex-wrap bg-gray-200 items-center justify-center">
      <Header />
      {posts.map(post => (
        <BlogItem
          title={post.title}
          excerpt={post.excerpt}
          tags={post.tags}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default App
