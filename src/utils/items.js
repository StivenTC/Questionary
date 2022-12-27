import { BsSnow2 as Snow } from 'react-icons/bs';
import { SlFire as Fire } from 'react-icons/sl';
import { TbShieldLock as Intimacy } from 'react-icons/tb';
import { BsHeart as Connection } from 'react-icons/bs';
import { GiPerspectiveDiceSixFacesRandom as Dice } from 'react-icons/gi';

export const HomeItems = [
  {
    name: 'Rompehielos',
    icon: <Snow />,
    link: 'icebreakers'
  },
  {
    name: 'Conexión',
    icon: <Connection />,
    link: 'connection'
  },
  {
    name: 'Intimidad',
    icon: <Intimacy />,
    link: 'intimacy'
  },
  {
    name: 'Incendiarias',
    icon: <Fire />,
    link: 'firestarters'
  },
  {
    name: 'Aleatorias',
    icon: <Dice />,
    link: 'random'
  }
]