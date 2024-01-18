import {
  ImgWrap,
  Text,
  TextWrap,
  BlockWrap,
  BlockData,
  Wrap,
  TitleBlock,
  TextBlockWrap,
  UserAvatarImg,
  // BtnAvatar,
  TextValue,
  UserName,
  UserWrap,
  UserStatus,
  ImgUserAvatar,
  InputFile,
} from './UserCard.styled';
import React from 'react';
import { Icon } from '../../Icon';
import { useState } from 'react';
import { useAuth } from '../../../hooks';

const UserCard: React.FC = () => {
  const [buttonHover, setButtonHover] = useState(false);
  // const [buttonFocus, setButtonFocus] = useState(false); через те що ніде не використовується, не проходить деплой, тому поки прибрав щоб змерджити
  const { user } = useAuth();

  const handleChangeImg = e => {
    console.log(e.target.files[0]);
    // console.log(e.currentTarget.files[0]);
  };

  return (
    <>
      <Wrap>
        <div>
          <ImgWrap>
            <ImgUserAvatar>
              <Icon
                name="user"
                iconWidth={{ mobile: '64px', tablet: '102px' }}
                iconHeight={{ mobile: '64px', tablet: '102px' }}
              />
            </ImgUserAvatar>
            <UserAvatarImg>
              <form>
                {/* <BtnAvatar
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                >
                  <Icon
                    name="add-foto"
                    iconWidth={{ mobile: '24px', tablet: '32px' }}
                    iconHeight={{ mobile: '24px', tablet: '32px' }}
                    stroke={buttonHover ? '#efede8' : '#e6533c'}
                  />
                </BtnAvatar> */}
                <label
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                >
                  <Icon
                    name="add-foto"
                    iconWidth={{ mobile: '24px', tablet: '32px' }}
                    iconHeight={{ mobile: '24px', tablet: '32px' }}
                    stroke={buttonHover ? '#efede8' : '#e6533c'}
                  />
                  <InputFile
                    name="file"
                    type="file"
                    onChange={handleChangeImg}
                  />
                </label>
              </form>
            </UserAvatarImg>
          </ImgWrap>

          <UserWrap>
            <UserName>{user.name}</UserName>
            <UserStatus>User</UserStatus>
          </UserWrap>

          <BlockWrap>
            <BlockData>
              <TextBlockWrap>
                <Icon
                  name="food"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
                <TitleBlock>Daily calorie intake</TitleBlock>
              </TextBlockWrap>
              <TextValue>{user.dailyCalories || 0}</TextValue>
            </BlockData>
            <BlockData>
              <TextBlockWrap>
                <Icon
                  name="dumbbell"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
                <TitleBlock>Daily physical activity</TitleBlock>
              </TextBlockWrap>
              <TextValue>
                {user.dailyActivity || 0}
                <span> min</span>
              </TextValue>
            </BlockData>
          </BlockWrap>

          <TextWrap>
            <Icon
              name="warning"
              iconWidth={{ mobile: '24px', tablet: '24px' }}
              iconHeight={{ mobile: '24px', tablet: '24px' }}
            />
            <Text>
              We understand that each individual is unique, so the entire
              approach to diet is relative and tailored to your unique body and
              goals.
            </Text>
          </TextWrap>
        </div>
      </Wrap>
    </>
  );
};

export default UserCard;
