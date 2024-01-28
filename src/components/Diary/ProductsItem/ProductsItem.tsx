import { useDispatch } from 'react-redux';

import {
  TitleCol,
  ValueCol,
  ValueColTitle,
  Row,
  MobileRow,
  MobileTitleRow,
  MiniValueCol,
  IconWrap,
  MiniTitleCol,
  Product,
  TopRow,
  BottomRow,
  Status,
  StatusRound,
} from './ProductsItem.styled';
import { Icon } from '../../Icon';
import { ConfigProvider, Popover, Popconfirm } from 'antd';

import { deleteDiaryProduct } from '../../../redux/diary';
import { Products } from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';

interface ProductsItemProps {
  product: Products;
  id: string;
}

const ProductsItem: React.FC<ProductsItemProps> = ({ product, id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleProductDelete = () => {
    dispatch(deleteDiaryProduct(id));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            colorText: '#EFEDE8',
          },
        },
      }}
    >
      <Product>
        <TopRow>
          <Row>
            <TitleCol>Title</TitleCol>
            <Popover placement="topLeft" content={product.title}>
              <ValueColTitle>
                <p>{product.title}</p>
              </ValueColTitle>
            </Popover>
          </Row>
          <Row>
            <TitleCol>Category</TitleCol>
            <Popover placement="topLeft" content={product.category}>
              <ValueCol>
                <p>{product.category}</p>
              </ValueCol>
            </Popover>
          </Row>
        </TopRow>
        <BottomRow>
          <MobileTitleRow>
            <MiniTitleCol>Calories</MiniTitleCol>
            <MiniTitleCol>Weight</MiniTitleCol>
            <MiniTitleCol>Recommended</MiniTitleCol>
          </MobileTitleRow>
          <MobileRow>
            <MiniValueCol>
              <p>{product.calories}</p>
            </MiniValueCol>
            <MiniValueCol>
              <p>{product.amount}</p>
            </MiniValueCol>
            <MiniValueCol>
              <Status>
                <StatusRound
                  recommended={product.recommend || false}
                ></StatusRound>
                {product.recommend ? 'Yes' : 'No'}
              </Status>
            </MiniValueCol>
            <IconWrap>
              <Popconfirm
                title="Delete a product"
                description="Are you sure to delete this product?"
                onConfirm={handleProductDelete}
              >
                <button
                  type="button"
                  style={{
                    padding: 0,
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  aria-label="delete product"
                >
                  <Icon
                    name="delete"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                    stroke="#EF8964"
                  />
                </button>
              </Popconfirm>
            </IconWrap>
          </MobileRow>
        </BottomRow>
      </Product>
    </ConfigProvider>
  );
};

export default ProductsItem;
