import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/adminApi.js';

const Login = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };

  const onLogin = async () => {
    const id = document.querySelector('#id').value;
    const password = document.querySelector('#password').value;

    const loginResult = await login({ id, password });

    if (loginResult.statusCode !== 200) {
      alert(loginResult.message);
      return;
    } else {
      // 로그인 성공
      localStorage.setItem('admin', id);
      navigate('/');
    }
  };

  return (
    <div id="login">
      <div className="container">
        <div className="input">
          <input id="id" type="text" placeholder="ID" />
          <input id="password" type="text" placeholder="PASSWORD" />
        </div>
        <div className="button">
          <button onClick={onCancel}>취소</button>
          <button onClick={onLogin}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
