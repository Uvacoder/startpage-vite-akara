import CardList from '../component/cardList';
import Card from '../component/card';
import {type link, list} from '../config';

const Main = () => {
  return (
    <>
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
};

export default Main;
