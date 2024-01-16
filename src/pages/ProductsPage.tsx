import { Container, Filters, ProductsList, PrimaryButton } from '../components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const ProductsPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && !isRefreshing && navigate('/');
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Container>
      <Filters />
      <ProductsList />
      <PrimaryButton type="primary" text="Button" sizes="large" />
    </Container>
  );
};

export default ProductsPage;
