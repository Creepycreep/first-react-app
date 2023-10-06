import './form-add.css'

const FormAdd = () => {
  return (
    <div className="form-add">
      <h2>Add a new game</h2>

      <form className='form' action="">
        <input placeholder='Game title' type="text" />
        <input placeholder='Is game finished?' type="text" />
        <button className='button button--outline' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default FormAdd