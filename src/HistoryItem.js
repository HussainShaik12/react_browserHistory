const HistoryItem = props => {
  const {item} = props
  const {id, timeAccessed, logoUrl, title, domainUrl, deleteItem} = item

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img alt="domain logo" src={logoUrl} />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" className="delete button" onClick={onDeleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
