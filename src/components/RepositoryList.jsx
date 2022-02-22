import { RepositoryItem } from './RepositoryItem'
import '../style/repositories.scss'

const repository = {
  name: 'unform',
  description: 'forms in React',
  link: 'https://github.com/querensales'
}

export function RepositoryList() {
  return (
    <section className="Repository-list">
      <h1>Lista de repositório</h1>
      <ul>
        <RepositoryItem Repository={repository} />
        <RepositoryItem Repository={repository} />
        <RepositoryItem Repository={repository} />
        <RepositoryItem Repository={repository} />
      </ul>
    </section>
  )
}
