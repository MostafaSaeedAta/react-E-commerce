import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand navbar-brand fw-bold px-5" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact"> contact </Link> 
        </li>
      </ul>

      <div className="buttons">
        <Link to="/login" className="btn btn-outline-dark mx-1">
            <i className="fa fa-sign-in mx-1"></i>
            login
        </Link>
        <Link to="/Register" className="btn btn-outline-dark mx-1">
            <i className="fa fa-user-plus mx-1"></i>
            Register
        </Link>
        <Link to="/Cart" className="btn btn-outline-dark mx-1">
            <i className="fa fa-sign-in mx-1"></i>
            Cart ( 0 )
        </Link>
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar

