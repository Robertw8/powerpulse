import toast from 'react-hot-toast';

const callToast = (type: 'success' | 'error' | 'loading', text: string) => {
  toast[type](text, {
    position: 'top-right',
    duration: 5000,
    style: {
      backgroundColor: '#EFEDE833',
      color: '#fff',
      borderRadius: '12px',
    },
  });
};

export default callToast;
