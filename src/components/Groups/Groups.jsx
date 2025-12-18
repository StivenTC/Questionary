import React, { useEffect, useState } from 'react';
import { VscPersonAdd, VscPerson } from 'react-icons/vsc';
import { TbTrashX } from 'react-icons/tb';


function Groups() {
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')) || []);

  useEffect(() => {
    if (players) {
      localStorage.setItem('players', JSON.stringify(players));
    }
  }, [players]);


  const handleKeyDown = event => {
    const value = event.target.value.trim();

    if (event.key === 'Enter') {
      if (!value) return; 
      
      setPlayers(prev => [...(prev || []), value]);
      event.target.value = '';
    }
  };

  const removeName = (name) => {
    const list = players.filter((arr) => arr !== name);
    localStorage.setItem('players', JSON.stringify(list));
    setPlayers(list);
  }

  return (
    <div className='group'>
      <h2>Agrega los jugadores</h2>
      <ul>
        {players && players.map((name, index) =>
          <li key={index}>
            <VscPerson />
            {name}
            <button type="button" aria-label={`Eliminar a ${name}`} onClick={() => removeName(name)}>
              <TbTrashX />
            </button>
          </li>
        )}
      </ul>

      <label>
        <span className="sr-only">Nombre del jugador</span>
        <input 
          aria-label="Nombre del nuevo jugador"
          placeholder="Escribe un nombre..."
          onKeyDown={(event) => handleKeyDown(event)} 
        />
        <VscPersonAdd aria-hidden="true" />
      </label>
    </div>
  );
}

export default Groups;
