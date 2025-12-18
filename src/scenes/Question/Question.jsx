import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuestions } from '../../hooks/useQuestions';
import { HomeItems } from 'utils/items';

function Question() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players] = useState(() => {
    const stored = JSON.parse(localStorage.getItem('players'));
    return (stored && stored.length > 0) ? stored : ['anónimo'];
  });
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const activeList = useQuestions(typeParam);

  const getHeaderData = (type) => {
    const item = HomeItems.find(i => i.link === type);
    return item || { name: 'Questionary', icon: null };
  };

  const nextQuestion = React.useCallback(() => {
    if (!activeList || activeList.length === 0) return;
    const randomIndex = Math.floor(Math.random() * activeList.length);
    const selected = activeList[randomIndex];
    setCurrentQuestion({
      ...selected,
      number: randomIndex + 1 // Or just random index
    });
    
    setCurrentPlayer(prev => (prev + 1) % players.length);
  }, [activeList, players.length]);

  React.useEffect(() => {
    if (!currentQuestion) {
      nextQuestion();
    }
  }, [nextQuestion, currentQuestion]);

  const headerInfo = currentQuestion ? getHeaderData(currentQuestion.type) : { name: '', icon: '' };

  return (
    <main className={`questions ${headerInfo.name}`}>
      {currentQuestion && (
        <article className='card'>
          <div className='card-player'>{players[currentPlayer]}</div>
          <header className='card-header'>
            {headerInfo.icon}
            <h3>{headerInfo.name}</h3>
            {/* Note: number is just random index here, essentially stateless ID */}
            <p>#{currentQuestion.number}</p> 
          </header>
          <div className='card-content'>
            <p>{currentQuestion.text}</p>
          </div>
        </article>
      )}
      <button type="button" onClick={nextQuestion}>
        {currentQuestion ? 'Siguiente' : 'Iniciar'}
      </button>
    </main>
  );
}

export default Question;