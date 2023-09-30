function NavBar() {
  return (
    <div>
      <h2>Samepage BookStore</h2>
      <div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
