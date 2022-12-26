import React, { useEffect, useState } from 'react';
import { VscPersonAdd, VscPerson } from 'react-icons/vsc';
import { TbTrashX } from 'react-icons/tb';


function Groups() {
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')) || []);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('players'));
  //   if (items) {
  //     setPlayers(items);
  //   }
  // }, []);

  useEffect(() => {
    if (players) {
      localStorage.setItem('players', JSON.stringify(players));
    }
  }, [players]);


  const handleKeyDown = event => {
    console.log('down')
    const value = event.target.value;
    const list = players || [];

    if (event.key === 'Enter') {
      console.log('enter')
      // setPlayers('')
      list.push(value)
      console.log(list)
      setPlayers(prev => [...prev])
      // localStorage.setItem('players', JSON.stringify(list));
      event.target.value = '';
    }
  };

  const removeName = (name) => {
    console.log('remove');
    const list = players.filter((arr) => arr !== name);
    localStorage.setItem('players', JSON.stringify(list));
    setPlayers(list);
  }

  console.log(players);

  return (
    <div className='group'>
      <h2>Agrega los jugadores</h2>
      <ul>
        {players && players.map((name, index) =>
          <li key={index}>
            <VscPerson />
            {name}
            <TbTrashX onClick={() => removeName(name)} />
          </li>
        )}
      </ul>

      <label>
        <input onKeyDown={(event) => handleKeyDown(event)} />
        <VscPersonAdd />
      </label>
    </div>
  );
}

export default Groups;
