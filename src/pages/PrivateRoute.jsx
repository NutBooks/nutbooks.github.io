import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem('Authorization') != null;

  if (!isLogin) {
    alert('로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.');
  }

  return isLogin ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
