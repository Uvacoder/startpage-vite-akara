import {useState} from 'preact/hooks';
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
      <div style={{marginRight: '12px'}}>
        <Icon path={logo} size={2.25} />
      </div>
      <div>
        <div
          style={{fontFamily: 'medium', fontSize: '20px', marginBottom: '2px'}}
        >
          {name}
        </div>
        <div style={{fontFamily: 'Inter'}}>{formatedLink()}</div>
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
