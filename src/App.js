
function App() {
  const categories = ["Restaurant", "Online Casino", "Voucher", "Category4", "Category5"];

  return (
    <div>
      <header className="header-bg">
        <div className="header-content">
          {/* menu */}
          <div className="header-menu"><p>☰</p></div>
          {/* Avatar */}
          <div className="header-avatar"><img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256" alt="Avatar" /></div>
        </div>
        {/* Gambling problem */}
        <div class="container">
          <p class="text">Having problems with gambling?</p>
          <button class="button">Click here</button>
        </div>

      </header>
      <main>
        {/* banner */}
        <section></section>
        <section>
          {/* mapeo de categories */}
          <article></article>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
