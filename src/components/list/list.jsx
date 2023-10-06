import './list.css'

import Item from '../item/item'

const List = ({ gameList }) => {
  const elements = gameList.map(item => {
    const { id, ...itemProps } = item;
    return (
      <Item key={id} {...itemProps} />
    )
  })
  return (
    <ul className='list'>
      {elements}
    </ul>
  )
}

export default List