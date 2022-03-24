const Header = props => {
  const {onChangeSearch} = props

  const onChangeSearchInput = () => {
    onChangeSearch()
  }

  return (
    <>
      <img
        alt="app logo"
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
      />
      <div>
        <img
          alt="search"
          src="https://assets.ccbp.in/frontend/react-js/search-img.png "
        />
        <input type="search" onChange={onChangeSearchInput} />
      </div>
    </>
  )
}

export default Header
