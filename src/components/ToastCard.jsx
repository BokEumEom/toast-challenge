// src/components/ToastCard.jsx
import ToastDisplay from './ToastDisplay';
import CheckButton from './CheckButton';
import '../styles/ToastCard.css';

const ToastCard = ({ toastState, onGoalComplete, onReset }) => {
  return (
    <div className="toast-card">
      <ToastDisplay toastState={toastState} />
      <div className="toast-card-actions">
        <CheckButton onClick={onGoalComplete} />
        <button className="toast-reset-button" onClick={onReset}>
          리셋
        </button>
      </div>
    </div>
  );
};

export default ToastCard;
