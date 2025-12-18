import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Connection } from 'utils/connection';
import { FireStarter } from 'utils/firestarter';
import { IceBreakers } from 'utils/icebreakers';
import { Intimacy } from 'utils/intimacy';
import { HomeItems } from 'utils/items';

function Question() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players] = useState(() => JSON.parse(localStorage.getItem('players')) || ['anonimo']);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Memoize questions with metadata to avoid recalculation and fragility
  const questionsMap = useMemo(() => {
    const tag = (list, type) => list.map(text => ({ text, type }));

    const ice = tag(IceBreakers, 'icebreakers');
    const conn = tag(Connection, 'connection');
    const int = tag(Intimacy, 'intimacy');
    const fire = tag(FireStarter, 'firestarters');

    return {
      icebreakers: ice,
      connection: conn,
      intimacy: int,
      firestarters: fire,
      random: [...ice, ...conn, ...int, ...fire]
    };
  }, []);

  const activeList = questionsMap[typeParam] || questionsMap.random;

  const getHeaderData = (type) => {
    const item = HomeItems.find(i => i.link === type);
    return item || { name: 'Questionary', icon: null };
  };

  const nextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * activeList.length);
    const selected = activeList[randomIndex];
    setCurrentQuestion({
      ...selected,
      number: randomIndex + 1 // Or just random index
    });
    
    setCurrentPlayer(prev => (prev + 1) % players.length);
  };

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
      <button onClick={nextQuestion}>
        {currentQuestion ? 'Siguiente' : 'Iniciar'}
      </button>
    </main>
  );
}

export default Question;