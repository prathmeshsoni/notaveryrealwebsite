import { useParams } from 'react-router-dom'

function Profile() {
  const { username } = useParams()

  // TODO: fetch profile data using `username`
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">{username}</h2>
      <p className="text-gray-600">This portfolio doesn't exist yet... or does it?</p>
    </div>
  )
}

export default Profile