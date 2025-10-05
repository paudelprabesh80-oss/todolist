

function Guess() {
  let number = Math.random() * 100;

  return (
    <h2>Guess number is: {Math.round(number)}</h2>
  );
}

export default Guess;
