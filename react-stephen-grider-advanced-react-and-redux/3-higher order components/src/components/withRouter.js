import { useNavigate } from 'react-router-dom';

// This  HOC is to give navigate to a Class Component
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return <Component navigate={navigate} {...props} />;
  };

  return Wrapper;
};
