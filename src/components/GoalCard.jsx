import { ClipboardIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import '../styles/GoalCard.css';

const GoalCard = ({ goal }) => {
  const navigate = useNavigate();
  return (
    <div className="goal-card">
      <h2 className="goal-card-title">
        <ClipboardIcon className="goal-card-icon" />
        오늘의 목표
      </h2>
      <p className="goal-card-text">{goal || '설정된 목표가 없습니다.'}</p>
      <button className="goal-card-button" onClick={() => navigate('/goal')}>
        목표 설정
      </button>
    </div>
  );
};

export default GoalCard;
