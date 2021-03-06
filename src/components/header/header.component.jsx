import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
// import { ReactComponent as Logo } from '../../assets/images/panda.svg';
// import LogoImage from '../../assets/images/panda.svg';
// import LogoImage from '../../assets/images/panda-2.svg';
import LogoImage from '../../assets/images/panda-3.svg';

const Header = () => {
  return (
    <header className={'header'}>
      <div className="container">
        <div className="header__content">
          <Link className={'logo'} to={'/'}>
            <div className="logo__text">English</div>
            <img className={'logo__image'} src={LogoImage} alt="English Panda"/>
            <div className="logo__text">Panda</div>
          </Link>
          <nav className={'nav'}>
            <ul className={'nav__list'}>
              <li className={'nav__item'}>
                <Link className={'nav__link'} to='/'>Home</Link>
              </li>
              <li className={'nav__item'}>
                <Link className={'nav__link'} to='/shop'>Shop</Link>
              </li>
              <li className={'nav__item'}>
                <Link className={'nav__link'} to='/signin'>Sign In</Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
};

export default Header;
