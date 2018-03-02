import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>Header here</header>
      <main>
        { children }
      </main>
      <footer>Footer here</footer>
    </div>
  )
}

export default Layout;
