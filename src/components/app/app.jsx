import './app.css'

import AppInfo from '../info/info'
import FormSearch from '../form-search/form-search'
import Filter from '../filter/filter'
import List from '../list/list'
import FormAdd from '../form-add/form-add'

function App() {

  const data = [
    {
      title: 'Dota 2',
      step: "infinity",
      fav: true,
      id: 1,
    },

    {
      title: 'Witcher 3',
      step: "finished",
      fav: false,
      id: 2,

    },

    {
      title: 'Cities: skylines',
      step: "infinity",
      fav: true,
      id: 3,
    },

    {
      title: `Assassin's creed: Odyssey`,
      step: "in progress",
      fav: false,
      id: 4,

    },
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="app__filter-panel form">
        <FormSearch />
        <Filter />
      </div>

      <List gameList={data} />

      <FormAdd />
    </div>
  )
};

export default App