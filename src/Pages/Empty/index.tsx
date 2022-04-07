import './styles.css'

interface IProps {
  title: string
}

const Empty = (props: IProps) => {
  return (
    <div className="container">
      <div className="title">
        <div className="title__text">{props.title}</div>
      </div>
  
      <div className="text">
        Тестовое задание не предусматривает реализацию контента здесь.
      </div>
    </div> 
  )
}

export default Empty