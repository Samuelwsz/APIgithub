import axios from "axios"
import { Link } from "react-router-dom"

//import { useAPI } from "./hooks/useAPI"

import { useQuery } from "react-query"

export interface RepositoryProps {
  full_name: string
  description: string
}

function Repos() {
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
    },
    {
      staleTime: 1000 * 60,
    }
  )

  return (
    <>
      <div className="flex justify-center py-3">
        <ul>
          {isFetching && <p>Carregando...</p>}
          {data?.map((repo) => {
            return (
              <li key={repo.full_name} className="py-1">
                <Link to={`repo/${repo.full_name}`} className="text-xl">
                  {repo.full_name}
                </Link>
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

export default Repos
