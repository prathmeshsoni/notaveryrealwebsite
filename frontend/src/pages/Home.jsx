function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to NAVRW</h2>
      <p className="mb-6">
        Build a portfolio. Publish it. Pretend it's real.  
      </p>
      <a href="/edit" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Create Yours Now
      </a>
    </div>
  )
}

export default Home