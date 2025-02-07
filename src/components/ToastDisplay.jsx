import '../styles/ToastDisplay.css';

const toastImages = {
  default: '/assets/images/toast_default.webp',
  light: '/assets/images/toast_light.webp',
  golden: '/assets/images/toast_golden.png',
  perfect: '/assets/images/toast_perfect.png',
  burnt: '/assets/images/toast_burnt.png',
};

const ToastDisplay = ({ toastState }) => {
  return (
    <img
      src={toastImages[toastState] || toastImages.default}
      alt="토스트 상태"
      className="toast-image"
    />
  );
};

export default ToastDisplay;
