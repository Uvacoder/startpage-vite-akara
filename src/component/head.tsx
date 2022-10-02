const date = new Date();
const dateString = date.toDateString().toUpperCase();
const hours = date.getHours();
const greet = () => {
  if (hours >= 18) return 'night';
  if (hours >= 12) return 'afternoon';
  return 'morning';
};

const Head = () => {
  return (
    <header id='head' style={{userSelect: 'none', marginTop: '32px'}}>
      <h2 style={{margin: 0, fontFamily: 'light', letterSpacing: '-1px'}}>
        {dateString}
      </h2>
      <h1
        style={{
          margin: 0,
          fontFamily: 'bold',
          fontSize: '56px',
        }}
      >
        Good {greet()}!
      </h1>
    </header>
  );
};

export default Head;
