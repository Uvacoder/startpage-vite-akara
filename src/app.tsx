import './app.css';
import Head from 'component/head';
import CardList from 'component/cardList';
import Card from './component/card';
import {link, list} from './config';

export function App() {
  return (
    <>
      <Head />
      {Object.keys(list).map((item) => {
        const linkList: link[] = list[item];
        return (
          <CardList title={item}>
            {linkList.map((link) => {
              return (
                <Card name={link.name} link={link.link} logo={link.icon} />
              );
            })}
          </CardList>
        );
      })}
    </>
  );
}
