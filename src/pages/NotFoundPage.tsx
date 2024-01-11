import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//! Чисто для прикладу як має бути зробив, реалізуйте таку логіку як зараз є але можливо якимось кращим підходом
const NotFoundPage: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => setCountdown(countdown - 1), 1000);

    if (countdown === 0) {
      navigate('/');
      return () => clearInterval(intervalId);
    }
  }, [countdown, navigate]);

  return <div>Page not found, redirecting to the homepage in {countdown}</div>;
};

export default NotFoundPage;
