import { FireIcon, PencilIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import '../styles/GoalCard.css';

const GoalCard = ({ goal }) => {
  const navigate = useNavigate();
  
  return (
    <div className="goal-card">
      <div className="goal-card-header">
        <h2 className="goal-card-title">
          <FireIcon className="goal-card-icon" />
          오늘의 목표
        </h2>
        <button className="goal-edit-button" onClick={() => navigate('/goal')}>
          <PencilIcon className="edit-icon" />
        </button>
      </div>
      <p className="goal-card-text">
        {goal || "아직 목표가 설정되지 않았습니다. 지금 설정해보세요!"}
      </p>
    </div>
  );
};

export default GoalCard;
