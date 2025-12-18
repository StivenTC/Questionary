import { useMemo } from 'react';
import { Connection } from '../utils/connection';
import { Firestarter } from '../utils/firestarter';
import { Icebreakers } from '../utils/icebreakers';
import { Intimacy } from '../utils/intimacy';

export const useQuestions = (typeParam) => {
  return useMemo(() => {
    const tag = (list, type) => list.map(text => ({ text, type }));

    const ice = tag(Icebreakers, 'icebreakers');
    const conn = tag(Connection, 'connection');
    const int = tag(Intimacy, 'intimacy');
    const fire = tag(Firestarter, 'firestarters');

    const map = {
      icebreakers: ice,
      connection: conn,
      intimacy: int,
      firestarters: fire,
      random: [...ice, ...conn, ...int, ...fire]
    };

    return map[typeParam] || map.random;
  }, [typeParam]);
};
