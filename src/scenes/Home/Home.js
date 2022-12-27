import React from 'react';
import { HomeItems } from 'utils/items';

function Home() {
  return (
    <nav className="home">
      <ul>
        {HomeItems.map((item, index) =>
          <li key={index}>
            <a href={`question?type=${item.link}`}>
              <h2>{item.name}</h2>
              {item.icon}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

// conexion, intimidad, rompehielos, incendiarias, custom

export default Home;
