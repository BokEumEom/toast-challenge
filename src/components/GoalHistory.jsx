// src/components/GoalHistory.jsx
import '../styles/GoalHistory.css';

const GoalHistory = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="goal-history-container">
      <h3 className="goal-history-header">이전 목표</h3>
      <div className="goal-history-list">
        {history.map((item, index) => (
          <button
            key={index}
            className="goal-history-item"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoalHistory;
