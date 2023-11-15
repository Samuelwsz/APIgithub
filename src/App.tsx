import "./global.css"
import { useAPI } from "./hooks/useAPI"

interface RepositoryProps {
  full_name: string
  description: string
}

function App() {
  const { data: repositories, isFetching } = useAPI<RepositoryProps[]>(
    "/users/samuelwsz/repos"
  )

  return (
    <>
      <div>
        <ul>
          {isFetching && <p>Carregando...</p>}
          {repositories?.map((repo) => {
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
