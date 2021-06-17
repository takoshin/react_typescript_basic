import React, { useState, useEffect } from 'react'
// import axios from 'axios'
const ApiFetch: React.FC<{}> = () => {
  interface ApiData {
    userId: number | null
    id: number | null
    title: string
    body: string
  }

  const InitData = {
    userId: null,
    id: null,
    title: '',
    body: '',
  }

  const [posts, setPosts] = useState<ApiData>(InitData)
  const [id, setId] = useState(1)
  const [clicked, setClicked] = useState(false)
  const handlerClicked = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => {
    //     setPosts(res.data)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        console.log(data)
      })
  }, [clicked])

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(evt) => setId(Number(evt.target.value))}
      />
      <br />
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      <br />
      {posts.title}
      {/* <ul>
        {
          posts.map(post =><li key={post.id}> {post.title} </li>)
        }
      </ul> */}
    </div>
  )
}

export default ApiFetch
