import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="layout">
        <Link to="/">LOGO</Link>
        <ul>
          <li>TAB1</li>
          <li>TAB2</li>
          <li>TAB3</li>
        </ul>
        <ul>
          <li>로그인</li>
          <li>로그아웃</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
