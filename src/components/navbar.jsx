
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand navbar-brand fw-bold px-5" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> contact </a>
        </li>
      </ul>

      <div className="buttons">
        <a href="" className="btn btn-outline-dark mx-1">
            <i className="fa fa-sign-in mx-1"></i>
            login
        </a>
        <a href="" className="btn btn-outline-dark mx-1">
            <i className="fa fa-user-plus mx-1"></i>
            Register
        </a>
        <a href="" className="btn btn-outline-dark mx-1">
            <i className="fa fa-sign-in mx-1"></i>
            Cart ( 0 )
        </a>
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar

