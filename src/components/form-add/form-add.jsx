import { Component } from 'react';

import './form-add.css';

import Select from '../select/select';

class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      progress: 'In progress',

      disabledSubmit: true
    }
  }

  onAddGameParams = (e) => {
    this.setState(({
      [e.target.name]: e.target.value,
    }))

    this.setState(({ title }) => {
      if (title.length >= 2) {
        return {
          disabledSubmit: false
        }
      } else {
        return {
          disabledSubmit: true
        }
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title: '',
      disabledSubmit: true
    })
  }

  render() {
    const { onAdd, selectList } = this.props;
    const { title, progress, disabledSubmit } = this.state;

    return (
      <div className="form-add">
        <h2>Add a new game</h2>

        <form onSubmit={this.onSubmit} className='form' action="">
          <input onChange={this.onAddGameParams} name="title" value={title} placeholder='Game title' type="text" />

          <Select selectList={selectList} onChange={this.onAddGameParams} />

          <button disabled={disabledSubmit} onClick={(e) => onAdd(title, progress)} className='button button--outline' type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default FormAdd