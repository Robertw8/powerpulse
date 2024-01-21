import React from 'react';
import { useState } from 'react';
import { apiService } from '../../../services/';
import { useAuth } from '../../../hooks';
import { LogOutBtn } from '../../LogoutBtn';
import { Icon } from '../../Icon';

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
  TextValue,
  UserName,
  UserWrap,
  UserStatus,
  ImgUserAvatar,
  InputFile,
  WrapLogOut,
  Img,
  WrapIcon,
} from './UserCard.styled';

const UserCard: React.FC = () => {
  const [buttonHover, setButtonHover] = useState(false);
  // const [buttonFocus, setButtonFocus] = useState(false); через те що ніде не використовується, не проходить деплой, тому поки прибрав щоб змерджити
  const { user } = useAuth();

  const handleChangeImg = async e => {
    // e.preventDefault();
    const dataFile = new FormData();
    dataFile.append('avatar', e.target.files[0]);

    const img = await apiService({
      method: 'post',
      url: '/users/avatars',
      data: dataFile,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    });

    console.log(img);
  };

  return (
    <>
      <Wrap>
        <ImgWrap>
          <ImgUserAvatar>
            {user?.avatarURL ? (
              <WrapIcon>
                <Img src={user?.avatarURL} alt="Avatar" />
              </WrapIcon>
            ) : (
              <WrapIcon>
                <Icon
                  name="user"
                  iconWidth={{ mobile: '64px', tablet: '102px' }}
                  iconHeight={{ mobile: '64px', tablet: '102px' }}
                />
              </WrapIcon>
            )}
          </ImgUserAvatar>
          <UserAvatarImg>
            <form id="file">
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
                  id="file"
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
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </Text>
        </TextWrap>
        <WrapLogOut>
          <LogOutBtn />
        </WrapLogOut>
      </Wrap>
    </>
  );
};

export default UserCard;
