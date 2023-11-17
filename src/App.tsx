import axios from "axios"
import "./global.css"
//import { useAPI } from "./hooks/useAPI"

import { useQuery } from "react-query"

interface RepositoryProps {
  full_name: string
  description: string
}

function App() {
  /* const { data: repositories, isFetching } = useAPI<RepositoryProps[]>(
    "/users/samuelwsz/repos"
  )*/

  const { data, isFetching } = useQuery<RepositoryProps[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/samuelwsz/repos"
      )

      return response.data
    }
  )

  return (
    <>
      <div className="flex justify-center">
        <ul>
          {isFetching && <p>Carregando...</p>}
          {data?.map((repo) => {
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
      {/*
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
    */}
    </>
  )
}

export default App
