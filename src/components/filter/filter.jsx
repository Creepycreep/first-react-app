import './filter.css'

const Filter = () => {
  return (
    <div className="filter">
      <button className='button button--filled form-control' type='button'>All games</button>

      <button className='button button--outline form-control' type='button'>Favourites</button>

      <button className='button button--outline form-control' type='button'>Finished</button>
    </div>
  )
}

export default Filter