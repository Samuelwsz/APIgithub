import { useState, useEffect } from "react"
import axios from "axios"

export function useAPI() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get("https://api.github.com/users/samuelwsz/repos")
      .then((response) => {
        setData(response.data)
      })
  }, [])
}
