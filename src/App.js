import React from 'react'
import BlogItem from './BlogItem'
import './App.css'

function App() {
  return (
    <div class="flex flex-wrap bg-gray-200 h-screen items-center justify-center">
      <BlogItem
        title="Hello World"
        excerpt="Welcome to my cool blog article."
        tags={['#tailwind', '#codeworkshop']}
        image="/card-top.jpg"
      />
    </div>
  )
}

export default App
