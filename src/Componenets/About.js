import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About page</h1>
      <Outlet />
    </div>
  )
}

export default About
