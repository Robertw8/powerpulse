import toast from 'react-hot-toast';

const callToast = (
  type: 'success' | 'error' | 'loading',
  text: string,
  duration: number = 5000
) => {
  toast[type](text, {
    position: 'top-center',
    duration: duration,
    style: {
      backgroundColor: '#EFEDE833',
      color: '#fff',
      borderRadius: '12px',
    },
  });
};

export default callToast;
