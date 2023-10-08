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

  onChoose = (id) => {
    const prom = new Promise((resolve) => {
      resolve(
        this.setState(({ list }) => ({
          list: list.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false }),
        }))
      )
    })

    prom.then(() => {
      this.inputRef.current.focus();
    })

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
    const { onChange } = this.props;
    const { list, isOpen } = this.state;

    const elements = list.map(item => {
      const isActive = item.active ? 'is-active' : '';

      return (
        <div onClick={() => this.onChoose(item.id)} key={item.id} className={`select__item ${isActive}`}>{item.value}</div >
      )
    })

    const value = list.find(item => item.active).value;
    const openClass = isOpen ? 'is-open' : '';

    return (
      <div className={`select ${openClass}`}>
        <div onClick={this.onOpen} className="select__header">
          <input ref={this.inputRef} name="progress" onChange={(e) => this.onChang(e)} onFocus={(e) => onChange(e)} type="text" value={value} />

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