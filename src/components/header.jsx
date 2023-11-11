import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div onClick={() => history.push("/")}>
          <span class="navbar-toggler-icon"> HOME </span>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
      </nav>
    </div>
  );
};

export default Header;
