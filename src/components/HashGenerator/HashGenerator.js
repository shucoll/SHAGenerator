import { useState } from 'react';
import styles from './HashGenerator.module.css';

const HashGenerator = (props) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(value1, value2);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type='text'
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default HashGenerator;
