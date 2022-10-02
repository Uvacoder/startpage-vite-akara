const CardList = (prop: props) => {
  const {children, title} = prop;

  return (
    <div
      style={{
        marginTop: '36px',
        fontFamily: 'bold',
      }}
    >
      <h2>{title.toUpperCase()}</h2>
      <div
        style={{
          display: 'grid',
          justifyContent: 'space-around',
          gridTemplateColumns: 'repeat(4, 25%)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

type props = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

export default CardList;
