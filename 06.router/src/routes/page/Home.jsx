import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/about"}>About 이동</Link>
        <Link to={"/prdList"}>ProductList 이동</Link>
    </div>
  )
}

export default Home