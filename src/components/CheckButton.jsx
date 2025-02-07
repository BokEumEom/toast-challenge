import '../styles/CheckButton.css';

const CheckButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="check-button">
      목표 완료!
    </button>
  );
};

export default CheckButton;
