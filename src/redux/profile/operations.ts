import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';
import { callToast } from '../../helpers';

const getUserValue = operationWrapper(
  'profile/getUserValue',
  async userData => {
    const { data } = await apiService(
      {
        method: 'patch',
        url: '/users',
        data: userData,
      },
      () => {
        callToast('error', 'Request error, try again');
        return '';
      }
    );
    return data;
  }
);

const getUserAvatar = operationWrapper(
  'profile/getUserAvatar',
  async dataFile => {
    const { data } = await apiService(
      {
        method: 'post',
        url: '/users/avatars',
        data: dataFile,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      },
      () => {
        callToast('error', 'Request error, try again');
        return '';
      }
    );
    return data;
  }
);

export { getUserValue, getUserAvatar };
