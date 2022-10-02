import {useState} from 'preact/hooks';

const Card = (prop: props) => {
  const {name, logo, link} = prop;
  const [isHover, setIsHover] = useState(false);

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
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => open(`https://${link}`)}
    >
      <div style={{marginRight: '12px'}}>
        <svg style={{width: '40px', height: '40px'}} fill='currentColor'>
          <path style={{transform: 'scale(1.75)'}} d={logo}></path>
        </svg>
      </div>
      <div>
        <h3
          style={{
            margin: 0,
            fontFamily: 'medium',
            fontSize: '20px',
            marginBottom: '0',
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
