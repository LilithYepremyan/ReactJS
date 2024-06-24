import "../styles/Header.css"

const Header = ({toggleModal}) => {
  return (
    <header className="header">
      <h1 className="header-title"> Task List</h1>
      <button onClick={toggleModal} className="header-addItem">Add Item</button>
    </header>
  );
};

Header.propTypes = {
    toggleModal: () => {},
}

export default Header;
