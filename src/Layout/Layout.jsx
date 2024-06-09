import { Link, Outlet } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
    icon: <i className="fa-solid fa-house fa-2x"></i>,
  },
  {
    name: "My Posts",
    path: "/my-posts",
    icon: <i className="fa-solid fa-bars fa-2x"></i>,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <i className="fa-solid fa-user fa-2x"></i>,
  },
];

const Layout = () => {
  return (
    <>
      <aside
        style={{
          padding: "8px",
          position: "fixed",
          top: 0,
          backgroundColor: "#ccc",
          height: "100vh",
        }}
      >
        {links.map((link) => (
          <div key={link.path} style={{ margin: 16 }}>
            <Link to={link.path}>
              {link.icon}
              <span style={{ fontSize: 24, padding: "0 8px" }}>
                {link.name}
              </span>
            </Link>
          </div>
        ))}
      </aside>
      <div style={{ height: "100vh", marginLeft: 200 }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
