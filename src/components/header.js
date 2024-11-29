import { useDispatch, useSelector } from "react-redux";
import Logo2 from "../asset/argentBank2.webp";
import Logo from "../asset/argentBankLogo.webp";
import "../styles/main.min.css";
import { Link, useNavigate } from "react-router-dom";
import { logout, resetState } from "../actions/fetch.action";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userName = useSelector((state) => state.user.userName);

  const handleClick = () => {
    navigate("/");
  };

  const HandlUserClick = () => {
    navigate("/Account");
  };

  const handleSignOut = () => {
    dispatch(logout());
    dispatch(resetState());
    navigate("/signup");
  };

  return (
    <nav className="main-nav">
      <img
        className="main-nav-logo main-nav-logo-image"
        src={accessToken ? Logo2 : Logo}
        alt="Argent Bank Logo"
        onClick={handleClick}
      />
      <h1 className="sr-only">Argent Bank</h1>
      <div>
        {accessToken ? (
          <>
            <div className="container-buttons">
              <div
                className="user-name"
                onClick={HandlUserClick}
              >
                <span>{userName}</span>
                <span className="fa-solid fa-circle-user"></span>
              </div>
              <button
                onClick={handleSignOut}
                className="style-button"
              >
                <span className="fa-solid fa-gear" />
                <span className="fa-solid fa-power-off" />
              </button>
            </div>
          </>
        ) : (
          <Link
            className="main-nav-item"
            to="/signUp"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
