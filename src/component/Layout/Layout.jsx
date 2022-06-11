import LeftMenu from "./LeftMenu";
import "./cssLayout/Layout.scss";
function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout_left-menu">
        <LeftMenu />
      </div>
      <div className="layout_page">
        <h1>{children}</h1>
      </div>
    </div>
  );
}

export default Layout;
