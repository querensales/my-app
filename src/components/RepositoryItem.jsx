export function RepositoryItem(props) {
  console.log(props)
  return (
    <li>
      <strong>{props.Repository.name ?? 'Default'}</strong>

      <p>{props.Repository.description}</p>

      <a href={props.Repository.link}>Acessar repositório</a>
    </li>
  )
}
