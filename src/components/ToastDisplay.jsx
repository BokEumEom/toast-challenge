import '../styles/ToastDisplay.css';

const toastImages = {
  default: '/assets/images/toast_default.webp',
  light: '/assets/images/toast_light.webp',
  golden: '/assets/images/toast_golden.webp',
  perfect: '/assets/images/toast_perfect.webp',
  burnt: '/assets/images/toast_burnt.webp',
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
