import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
// import { ReactComponent as Logo } from '../../assets/images/panda.svg';
import LogoImage from '../../assets/images/panda.svg';

const Header = () => {
  return (
    <header className={'header'}>
      <div className="container">
        <div className="header__content">
          <Link className={'logo'} to={'/'}>
            <img className={'logo__image'} src={LogoImage} alt="English Panda"/>
          </Link>
          <nav className={'nav'}>
            <ul className={'nav__list'}>
              <li className={'nav__item'}>
                <Link className={'nav__link'} to='/'>Home</Link>
              </li>
              <li className={'nav__item'}>
                <Link className={'nav__link'} to='/shop'>Shop</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header;
