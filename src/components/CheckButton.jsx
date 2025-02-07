import '../styles/CheckButton.css';

const CheckButton = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className="check-button"
    >
      목표 완료!
    </button>
  );
};

export default CheckButton;
