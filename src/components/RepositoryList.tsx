import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

interface Repository{
  name: string;
  description: string;
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState <Repository[]> ([])

  useEffect(() => {
    fetch(' https://api.github.com/users/querensales/repos')
      .then(Response => Response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  return (
    <section className="Repository-list">
      <h1>Lista de repositório</h1>
      <ul>
        {repositories.map(Repository => {
          return <RepositoryItem key={Repository.name} Repository={Repository} />
        })}
      </ul>
    </section>
  )
}
