import React from 'react'

import './select.css'

// import SelectItem from '../select-item/select-item'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef();

    this.state = {
      list: this.props.selectList.map((item, i) => i === 0 ? { ...item, active: true } : { ...item, active: false }),

      isOpen: false,
    }
  }

  onChoose = (e, id) => {
    this.setState(({ list }) => ({
      list: list.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false }),
    }))

    this.props.onChange(e);
    this.onOpen()
  }

  onOpen = () => {
    this.setState(({ isOpen }) => {
      return { isOpen: !isOpen }
    })
  }

  listRender = (list) => {
    this.setState({
      list: list.map((item, i) => i === 0 ? { ...item, active: true } : { ...item, active: false })
    })
  }

  render() {
    const { list, isOpen } = this.state;

    const elements = list.map(item => {
      const isActive = item.active ? 'is-active' : '';

      return (
        <label key={item.id} className={`select__item ${isActive}`}>
          <input onClick={(e) => this.onChoose(e, item.id)} value={item.value} name="progress" type="radio" />

          <span>{item.value}</span>
        </label>
      )
    })

    const value = list.find(item => item.active).value;
    const openClass = isOpen ? 'is-open' : '';

    return (
      <div className={`select ${openClass}`}>
        <div onClick={this.onOpen} className="select__header">
          <span >{value}</span>

          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className="select__body">
          <div className="select__wrapper">
            {elements}
          </div>
        </div>
      </div >
    )
  }
}

export default Select