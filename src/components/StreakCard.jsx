
import '../styles/StreakCard.css';

const StreakCard = ({ streak, progressPercent, motivationalMessage }) => {
  return (
    <div className="streak-card">
      <h2 className="streak-card-title">연속 성공</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <p className="streak-count">{streak}회</p>
      <p className="streak-message">{motivationalMessage}</p>
    </div>
  );
};

export default StreakCard;
