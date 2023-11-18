import { useQueryClient } from "react-query"
import { useParams } from "react-router-dom"
import { RepositoryProps } from "./repos"

export default function Repo() {
  const params = useParams()
  const currentRepository = params["*"] as string

  const queryClient = useQueryClient()

  function handleChangeRepositoryDescription() {
    const previousRepos = queryClient.getQueryData<RepositoryProps[]>("repos")

    if (previousRepos) {
      const nextRepos = previousRepos.map((repos) => {
        if (repos.full_name === currentRepository) {
          return { ...repos, description: "testando" }
        } else {
          return repos
        }
      })
      queryClient.setQueryData("repos", nextRepos)
    }
  }

  return (
    <>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>alterar</button>
    </>
  )
}
