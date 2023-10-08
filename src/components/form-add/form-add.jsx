import { Component } from 'react';

import './form-add.css';

import Select from '../select/select';

class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      progress: 'In progress',
    }
  }

  onAddGameParams = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    // console.log(e.target.value)
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title: '',
    })
  }

  render() {
    const { onAdd } = this.props;
    const { title, progress } = this.state;
    // this.onAddGameParams()

    return (
      <div className="form-add">
        <h2>Add a new game</h2>

        <form onSubmit={this.onSubmit} className='form' action="">
          <input onChange={this.onAddGameParams} name="title" value={title} placeholder='Game title' type="text" />

          <Select onChange={this.onAddGameParams} />

          <button onClick={(e) => onAdd(title, progress)} className='button button--outline' type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default FormAdd