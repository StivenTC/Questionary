import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Connection } from 'utils/connection';
import { FireStarter } from 'utils/firestarter';
import { IceBreakers } from 'utils/icebreakers';
import { Intimacy } from 'utils/intimacy';
import { HomeItems } from 'utils/items';

function Question() {
  const [searchParams] = useSearchParams();
  const [list, setList] = useState();
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players] = useState(JSON.parse(localStorage.getItem('players')) || ['anonimo']);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [headerData, setHeaderData] = useState({ icon: '', name: '', random: '' });
  const typeQuestions = searchParams.get('type');

  const listQuestions = {
    'icebreakers': IceBreakers,
    'connection': Connection,
    'intimacy': Intimacy,
    'firestarters': FireStarter,
    'random': [].concat.apply([], [IceBreakers, Connection, Intimacy, FireStarter]),
  }

  useEffect(() => {
    const q = listQuestions[typeQuestions]
    setList(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextRandomQuestion = () => {
    let random = ~~(Math.random() * list.length);
    setCurrentQuestion(list[random])
    getTypeQuestion(random);
    getCurrentPlayer();
  }

  const getTypeQuestion = (random) => {
    let data = '';
    let header = {}

    if (typeQuestions !== 'random') {
      data = HomeItems.filter((q) => q.link === typeQuestions)[0];
    } else {
      data = getRandomTypeQuestion(random);
    }
    header = {
      number: random,
      icon: data.icon,
      name: data.name
    }
    setHeaderData(header)
  }

  const getRandomTypeQuestion = (random) => {
    if (random <= IceBreakers.length) {
      return HomeItems.filter((q) => q.link === 'icebreakers')[0];
    }
    if (random <= (IceBreakers.length + Connection.length)) {
      return HomeItems.filter((q) => q.link === 'connection')[0];
    }
    if (random <= (IceBreakers.length + Connection.length + Intimacy.length)) {
      return HomeItems.filter((q) => q.link === 'intimacy')[0];
    }
    if (random <= (IceBreakers.length + Connection.length + Intimacy.length + FireStarter.length)) {
      return HomeItems.filter((q) => q.link === 'firestarters')[0];
    }
  }

  const getCurrentPlayer = () => {
    const actual = currentPlayer;
    if (actual < players.length - 1) {
      setCurrentPlayer(prev => prev + 1);
    } else {
      setCurrentPlayer(0);
    }

  }

  return (
    <section className={`questions ${headerData.name}`}>
      {currentQuestion && <div className='card'>
        <div className='card-player'>{players[currentPlayer]}</div>
        <div className='card-header'>
          {headerData.icon}
          <h3>{headerData.name}</h3>
          <p>#{headerData.number}</p>
        </div>
        <div className='card-content'>
          <p>{currentQuestion}</p>
        </div>
      </div>}
      <button onClick={nextRandomQuestion}> {currentQuestion ? 'Siguiente' : 'Iniciar'} </button>
    </section>
  );
}

export default Question;