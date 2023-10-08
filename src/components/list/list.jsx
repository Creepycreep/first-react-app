import './list.css'

import Item from '../item/item'

const List = ({ gameList, onDelete, onToggleFav }) => {
  const elements = gameList.map(item => {
    const { id, ...itemProps } = item;
    return (
      <Item
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleFav={() => onToggleFav(id)} />
    )
  })

  return (
    <ul className='list'>
      {elements}
    </ul>
  )
}

export default List