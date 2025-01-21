import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FunctionCardMapper from '../components/functionCardMapper';
import { useEffect, useState } from 'react';
import { equationEvaluator } from '../evaluator/equationEvaluator';

export default function Home() {
  const [valueX, setValueX] = useState(0);
  const [valueAfterEval, setValueAfterEval] = useState(0);
  const [equations,setEquations] = useState(["","","","",""])

  useEffect(()=>{
    setValueAfterEval(()=>{
      return equationEvaluator(valueX,equations)
    })
  },[valueX,equations])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <div style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
            <div>
              <p className=''>Initial Value for x:</p>
                <input
                    id="numberInput"
                    type="number"
                    value={valueX}
                    onChange={(e)=>{
                      setValueX(()=>e.target.value);
                    }}
                    placeholder="Enter a number"
                    className={styles.inputBox}
                  />
            </div>
            <div>
              <p>Current Value After Evaluation :</p>
              <p className={styles.inputBox}>{valueAfterEval}</p>
            </div>
          </div>
          
          <FunctionCardMapper
            equations={equations}
            setEquations={setEquations}
          />
      </div>
    </div>
  );
}
