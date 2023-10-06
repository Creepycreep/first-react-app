import './info.css'

const AppInfo = () => {
  return (
    <div className="app__info">
      <h1>My games</h1>
      <h2>
        <i className="fa-regular fa-keyboard"></i>
        <span>Total:</span>
      </h2>

      <h2>
        <i className="fa-regular fa-heart"></i>
        <span>Favourites:</span>
      </h2>
    </div>
  )
}

export default AppInfo;