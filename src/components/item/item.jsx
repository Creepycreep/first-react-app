import './item.css'

const Item = (props) => {
  const { title, step, fav, onDelete, onToggleFav } = props;

  const favGame = () => {
    let className = 'fa-heart';
    fav ? className += ' fa' : className += ' fa-regular'
    return className
  }

  return (
    <li className='list__item item' >
      <span>{title}</span>

      <input className='item__input' type="text" defaultValue={step} />

      <div className="buttons-group">
        <button onClick={onToggleFav} type='button' className='button--favourite'>
          <i className={favGame()}></i>
        </button>

        <button onClick={onDelete} type='button' className='button--remove'>
          <i className='fa fa-trash'></i>
        </button>
      </div>

      <i className='fa fa-star'></i>
    </li>
  )

}

export default Item