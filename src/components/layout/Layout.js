import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet /> {/* Call to render a child component */}
      </div>
    </>
  );
}

export default Layout;
