import CardList from '../component/cardList';
import Card from '../component/card';
import {link, list} from '../config';

const Main = () => {
  return Object.keys(list).map((item) => {
    const linkList: link[] = list[item];
    return (
      <CardList title={item} key={item}>
        {linkList.map((link) => {
          return (
            <Card
              name={link.name}
              link={link.link}
              logo={link.icon}
              key={link.link}
            />
          );
        })}
      </CardList>
    );
  });
};

export default Main;
