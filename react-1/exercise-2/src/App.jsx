import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    // Code for Header
    // <Header />
    <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <Temperature/>
  );
}

function Temperature() {
  return (
    // Code for Temperature
    // <Temperature />
    <main>
    <div id="temperature">
      <span>{'{ temperature }'} Oc</span>
    </div>
  </main>
  );
}

function Footer() {
  return (
    // Code for Footer
    // <Footer />
    <footer>
        <button>Up</button>
        <button>Down</button>
    </footer>
  );
}

export default App;
