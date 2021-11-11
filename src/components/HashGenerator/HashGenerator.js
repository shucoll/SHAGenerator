import { useState } from 'react';
import SHA256Generator from '../../Algorithms/SHA256';
import styles from './HashGenerator.module.css';

const HashGenerator = (props) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const [hashedValue, setHashedValue] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const hashedValue = SHA256Generator([value1, value2]);
    setHashedValue(hashedValue);
    // console.log(hashedValue);
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

      <h2>Generated Hash</h2>
      {hashedValue && <h3>{hashedValue}</h3>}
    </div>
  );
};

export default HashGenerator;
