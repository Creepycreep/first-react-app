import './item.css'

const Item = ({ title, step, fav }) => {
  const favGame = () => {
    let className = 'fa-heart';
    fav ? className += ' fa' : className += ' fa-regular'
    return className
  }

  return (
    <li className='list__item item'>
      <span>{title}</span>

      <input className='item__input' type="text" defaultValue={step} />

      <div className="buttons-group">
        <button type='button' className='button--favourite'>
          <i className={favGame()}></i>
        </button>

        <button type='button' className='button--remove'>
          <i className='fa fa-trash'></i>
        </button>
      </div>

      <i className='fa fa-star'></i>
    </li>
  )
}

export default Item