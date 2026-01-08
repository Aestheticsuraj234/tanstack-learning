import { createFileRoute, Link } from '@tanstack/react-router'



export const Route = createFileRoute('/')({ component: App })

function App() {
 

  return (
  <div>
    <h1>Hello world</h1>
    <Link to="/about">About</Link>
  </div>
  )
}
