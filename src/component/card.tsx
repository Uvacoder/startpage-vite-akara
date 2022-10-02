import {useState} from 'react';
import Icon from '@mdi/react';

const Card = (prop: props) => {
  const {name, logo, link} = prop;
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const formatedLink = () => {
    const index = link.indexOf('/');
    if (index === -1) return link;
    return link.slice(0, index);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: isHover ? 'var(--fish-primary)' : 'unset',
        transition: '0.25s color',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => open(`https://${link}`)}
    >
      <Icon style={{marginRight: '12px'}} path={logo} size={2.25} />
      <div>
        <h3
          style={{
            margin: 0,
            fontFamily: 'medium',
            fontSize: '20px',
            marginBottom: '4px',
          }}
        >
          {name}
        </h3>
        <p style={{margin: 0, fontFamily: 'Inter'}}>{formatedLink()}</p>
      </div>
    </div>
  );
};

type props = {
  name: string;
  link: string;
  logo: string;
};

export default Card;
