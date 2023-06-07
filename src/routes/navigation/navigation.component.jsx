// We can use a fragment, it is a component that renders to nothing when it gets mounted on the DOM
// It is useful if we dont want to render some specific html element
// In this case we dont really want the wrapping div that React typically makes us return
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;