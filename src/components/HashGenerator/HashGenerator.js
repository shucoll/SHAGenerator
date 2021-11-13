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
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    setHashedValue(null);
    setValue1('');
    setValue2('');
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleFormSubmit}
        onReset={handleFormReset}
        className={styles.form}
      >
        <h2>SHA256 Hash Generator</h2>
        <div className={styles.form__inputGroup}>
          <label htmlFor='input1' className={styles.form__inputLabel}>
            Input 1
          </label>
          <input
            className={styles.form__input}
            type='text'
            key='input1'
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
        </div>

        <div className={styles.form__inputGroup}>
          <label htmlFor='input2' className={styles.form__inputLabel}>
            Input 2
          </label>
          <textarea
            className={`${styles.form__textarea} ${styles.form__input}`}
            key='input2'
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
        </div>
        <div className={styles.btns}>
          <input type='submit' value='Submit' className={styles.btn} />
          <input type='reset' value='Reset' className={styles.btn} />
        </div>

        <h3>Generated Hash</h3>
        {hashedValue && <h4>{hashedValue}</h4>}
      </form>
    </div>
  );
};

export default HashGenerator;
