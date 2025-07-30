import { useState } from 'react'

function Edit() {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [links, setLinks] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('This is not a real submission. Yet.')
    // TODO: send to backend (when it exists)
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Your Portfolio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Bio"
          className="w-full p-2 border rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Links (comma-separated)"
          className="w-full p-2 border rounded"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save (Fake)
        </button>
      </form>
    </div>
  )
}

export default Edit