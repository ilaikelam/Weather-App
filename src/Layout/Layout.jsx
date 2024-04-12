import "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Weather-App</h1>
      </header>
      {children}
      <footer>
        <p>Developed By Ali</p>
      </footer>
    </>
  );
}

export default Layout;
