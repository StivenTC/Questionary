import React from 'react';
import { HomeItems } from 'utils/items';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav className="home">
      <ul>
        {HomeItems.map((item, index) =>
          <li key={index}>
            <Link to={`question?type=${item.link}`}>
              <h2>{item.name}</h2>
              {item.icon}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

// conexion, intimidad, rompehielos, incendiarias, custom

export default Home;
