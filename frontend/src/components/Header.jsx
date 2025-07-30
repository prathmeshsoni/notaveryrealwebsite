import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Not a Very Real Website</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/edit" className="hover:underline">Edit Portfolio</Link>
      </nav>
    </header>
  )
}

export default Header