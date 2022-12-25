import React from 'react';
import { BsSnow2 as Snow } from 'react-icons/bs';
import { SlFire as Fire } from 'react-icons/sl';
import { SlFire as Intimacy } from 'react-icons/sl';
import { SlFire as Connection } from 'react-icons/sl';
import { GiPerspectiveDiceSixFacesRandom as Dice } from 'react-icons/gi';

function Home() {
  return (
    <nav className="home">
      <ul>
        <li>
          <h2>Rompehielos</h2>
          <Snow />
        </li>
        <li>
          <h2>Conexión</h2>
          <Connection />
        </li>
        <li>
          <h2>Intimidad</h2>
          <Intimacy />
        </li>
        <li>
          <h2>Incendiarias</h2>
          <Fire />
        </li>
        <li>
          <h2>Personalizadas</h2>
          <Dice />
        </li>
      </ul>
    </nav>
  );
}

// conexion, intimidad, rompehielos, incendiarias, custom

export default Home;
