import { useEffect, useState } from "react"
import "./global.css"
import axios from "axios"

interface RepositoryProps {
  full_name: string
  description: string
}

function App() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  useEffect(() => {
    axios
      .get("https://api.github.com/users/samuelwsz/repos")
      .then((response) => {
        setRepositories(response.data)
      })
  }, [])

  return (
    <>
      <div>
        <ul>
          {repositories.map((repo) => {
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
