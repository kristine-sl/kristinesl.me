import { App } from 'cv';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from '../../assets/data/index';
import { enUs, nbNo } from '../../assets/lang';
import image from '../../public/images/profile_image.webp';
import { categories } from '../categories';
import {
  selectLocale,
  selectTheme,
  toggleTheme,
  updateLocale,
} from '../slices';
import { darkTheme, lightTheme } from '../theme';

const Home: NextPage = () => {
  const locale = useSelector(selectLocale);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <App
      linkedIn="https://www.linkedin.com/in/kristinesundtlorentzen/"
      github="https://github.com/kristine-sl/cv"
      instagram="https://www.instagram.com/casparheide/?igshid-MzRIODBiNWFIZA"
      email="kristine.sundt.lorentzen@gmail.com"
      image={<Image src={image} alt="Kristine S. Lorentzen" />}
      profile={profile}
      categories={categories}
      messages={{ no: nbNo, en: enUs }}
      themes={{ light: lightTheme, dark: darkTheme }}
      theme={theme}
      toggleTheme={() => dispatch(toggleTheme())}
      locale={locale}
      updateLocale={(locale) => dispatch(updateLocale(locale))}
    />
  );
};

export default Home;
