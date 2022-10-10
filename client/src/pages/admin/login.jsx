import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };

  const onLogin = () => {
    console.log('로그인 로직 구현');
  };

  return (
    <section id="login">
      <div className="container">
        <div className="input">
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="PASSWORD" />
        </div>
        <div className="button">
          <button onClick={onCancel}>취소</button>
          <button onClick={onLogin}>로그인</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
