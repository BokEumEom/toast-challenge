// src/components/ToastDisplay.jsx
import '../styles/ToastDisplay.css';

const toastImages = {
  default: '/assets/images/toast_default.webp',
  light: '/assets/images/toast_light.webp',
  golden: '/assets/images/toast_golden.webp',
  honey: '/assets/images/toast_honey.webp',
  cream: '/assets/images/toast_cream.webp',
  milk: '/assets/images/toast_milk.webp',
  special: '/assets/images/toast_special.webp',
  burnt: '/assets/images/toast_burnt.webp', // 사용 시 참고
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
