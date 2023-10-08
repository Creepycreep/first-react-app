import { Component } from 'react'
import './app.css'

import AppInfo from '../info/info'
import FormSearch from '../form-search/form-search'
import Filter from '../filter/filter'
import List from '../list/list'
import FormAdd from '../form-add/form-add'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          title: 'Dota 2',
          step: "Infinity",
          fav: true,
          id: 1,
        },

        {
          title: 'Witcher 3',
          step: "Finished",
          fav: false,
          id: 2,

        },

        {
          title: 'Cities: skylines',
          step: "Infinity",
          fav: true,
          id: 3,
        },

        {
          title: `Assassin's creed: Odyssey`,
          step: "In progress",
          fav: false,
          id: 4,
        },
      ],
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter(item => item.id !== id);
      return {
        data: newData
      }
    })
  }

  addItem = (title, step) => {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          {
            title: title,
            step: step,
            fav: false,
            id: data.length + 1,
          }
        ],
      }
    })
  }

  onToggleFav = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => item.id === id ? { ...item, fav: !item.fav } : item),
    }))
  }

  render() {
    const { data } = this.state;

    const total = data.length;
    const fav = data.filter(item => item.fav).length;


    return (
      <div className="app" >
        <AppInfo total={total} fav={fav} />

        <div className="app__filter-panel form">
          <FormSearch />
          <Filter />
        </div>

        <List gameList={data} onDelete={this.deleteItem} onToggleFav={this.onToggleFav} />

        <FormAdd onAdd={this.addItem} />
      </div>
    )
  }
};

export default App