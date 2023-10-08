import { Component } from 'react';

import './form-search.css'

class FormSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term })

    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <div className="search form-control" >
        <input onChange={this.onUpdateSearch} value={this.state.term} name="term" type="text" placeholder='Find game' />
      </div>
    )
  }
}

export default FormSearch