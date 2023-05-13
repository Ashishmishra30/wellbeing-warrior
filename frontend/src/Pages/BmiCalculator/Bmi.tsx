import { useState } from 'react';
import styles from "./Bmi.module.css"
// import poweredImage from './assets/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './Griditem'; 

const Bmi = () => {
  const [heightField, setheightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    }else {
      alert('Fill in all fields.')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setheightField(0)
    setWeightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          {/* <img src={poweredImage} alt="" width={150} /> */}
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI.</h1>
          <p>BMI is the acronym for Body Mass Index, a parameter adopted by the World Health Organization to calculate the ideal weight of each person.</p>

          <input
            type="text" 
            placeholder="Enter your height. Ex 170 (in cm)"
            value={heightField > 0  ? heightField : ''}
            onChange={e => setheightField(parseFloat( e.target.value ))}
            disabled={toShow ? true : false}
          />

          <input
            type="text" 
            placeholder=" Enter your weight. Ex 65 (in kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat( e.target.value ))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calculate</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && 
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item} />
              ))}  
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem data={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Bmi;