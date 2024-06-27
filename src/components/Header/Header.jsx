import './Header.css';

export const Header = ( {showMenu} ) => {
    return (
      
<header>
{showMenu ? (
<div className="header__content container">
  <div className="site-logo"></div>

  <div className="navigation">
    <button className="nav-btn"></button>
    <nav className="rollout-nav nav-closed">
      <a href="#home">domů</a>
      <a href="#menu">menu</a>
      <a href="#gallery">galerie</a>
      <a href="#contact">kontakt</a>
    </nav>
  </div>

</div> 
) : (
    <div className="container header__content">
    <div className="site-logo"></div>
    <nav className="inline-nav">
      <a href="/">Hlavní stránka</a>
    </nav>
    </div> )}
</header>

)}
