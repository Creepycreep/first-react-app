import './filter.css'

const Filter = ({ list, onFilterSelect }) => {

  const btnElements = list.map(({ id, value }) => {
    return (
      <button onClick={() => onFilterSelect(value.toLowerCase())} key={id} className='button button--outline form-control' type='button'>{value}</button>
    )

  })

  return (
    <div className="filter">
      <button onClick={() => onFilterSelect('all')} className='button button--filled form-control' type='button'>All games</button>
      <button onClick={() => onFilterSelect('fav')} className='button button--outline form-control' type='button'>Favourites</button>

      {btnElements}
    </div >
  )
}

export default Filter