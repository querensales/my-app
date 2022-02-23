interface RepositoryItemProps {
  Repository:{
    name: string;
    description: string;
    html_url: string
  }
}

export function RepositoryItem(props:RepositoryItemProps) {
  return (
    <li>
      <strong>{props.Repository.name ?? 'Default'}</strong>

      <p>{props.Repository.description}</p>

      <a href={props.Repository.html_url}>Acessar repositório</a>
    </li>
  )
}
