import React from "react";
import styles from '../styles/FunctionCardMapper.module.css';

const FunctionCardMapper = ({equations,setEquations}) => {
    const dropdownOptions = ["Function 2", "Function 3", "Function 4", "Function 5", "-"];

    return (
        <div className={styles.container}>
            {[...Array(5)].map((_, index) => (
                <div key={index} className={styles.functionCard}>
                    <p className={styles.heading}>Function {index+1}</p>
                    {/* Input Box */}
                    <p>Equation</p>
                    <input
                        type="text"
                        placeholder={`Enter Equation ${index + 1}`}
                        value={equations[index]}
                        onChange={e=>{
                            setEquations((prevEquations)=>{
                                let updatedEq=[...prevEquations]
                                updatedEq[index]=e.target.value;
                                return updatedEq;
                            })
                        }}
                        className={styles.inputBox}
                    />

                    {/* Dropdown */}
                    <p>Next Function</p>
                    <select disabled value={dropdownOptions[index]} className={styles.selectBox}>
                        {dropdownOptions.map((option, idx) => (
                            <option key={idx} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default FunctionCardMapper;
