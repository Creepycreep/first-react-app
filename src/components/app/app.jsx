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

      term: '',
      filter: 'all',
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

  searchGame = (term, items) => {
    if (term.length == 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  filterGame = (filter, items) => {
    switch (filter) {
      case 'fav':
        return items.filter(item => {
          return item[filter]
        })

      case 'all':
        return items

      default:
        return items.filter(item => {
          return item.step.toLowerCase() === filter.toLowerCase()
        })
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }


  render() {
    const { data, term, filter } = this.state;

    const total = data.length;
    const fav = data.filter(item => item.fav).length;

    const visibleData = this.filterGame(filter, this.searchGame(term, data));

    const list = [
      {
        value: 'In progress',
        id: 1,
      },
      {
        value: 'Finished',
        id: 2,
      },
      {
        value: 'Infinity',
        id: 3,
      },
    ];

    return (
      <div className="app" >
        <AppInfo total={total} fav={fav} />

        <div className="app__filter-panel form">
          <FormSearch onUpdateSearch={this.onUpdateSearch} />
          <Filter list={list} onFilterSelect={this.onFilterSelect} />
        </div>

        <List gameList={visibleData} onDelete={this.deleteItem} onToggleFav={this.onToggleFav} onProgressUpdate={this.onProgressUpdate} />

        <FormAdd selectList={list} onAdd={this.addItem} />
      </div>
    )
  }
};

export default App