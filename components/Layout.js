function Layout({ children }) {
  return (
    <div>
      <h2>This is the header</h2>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
