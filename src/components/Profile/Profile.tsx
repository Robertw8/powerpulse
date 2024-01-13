// import { useFormik } from 'formik';
// import { PrimaryButton } from '..';
import {
  Btn,
  Title,
  ImgWrap,
  Text,
  TextWrap,
  BlockWrap,
  BlockData,
} from './Profile.styled';
import { Icon } from '../Icon';

const Profile = () => {
  return (
    <>
      {/* <Wrap> */}
      <Title>Profile Settings</Title>
      <div>
        <ImgWrap>
          <Icon name="user" width="64px" height="64px" />
          <Icon name="add-foto" width="24px" height="24px" />
        </ImgWrap>
        <BlockWrap>
          <BlockData>
            <Icon name="food" width="24px" height="24px" />
          </BlockData>
          <BlockData>
            <Icon name="dumbbell" width="24px" height="24px" />
          </BlockData>
        </BlockWrap>
        <TextWrap>
          <Icon name="warning" width="24px" height="24px" />
          <Text>
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </Text>
        </TextWrap>

        {/* <PrimaryButton  type="primary" name="Save!" size='large'/> */}
        <Btn htmlType="submit" type="primary">
          Save
        </Btn>
        {/* </Wrap> */}
      </div>
    </>
  );
};

export default Profile;
