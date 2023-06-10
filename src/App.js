import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const App = () => {
  const handleClick = () => {
    console.log('Кнопка нажата');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Нажми меня
      </Button>
    </div>
  );
};

export default App;
