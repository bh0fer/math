import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface Props {
    value: [string, string, string];
    onChange: (value: [string, string, string]) => void;
}

const VectorInput = ({ value, onChange }: Props) => {
    const handleChange = (index: number, newValue: string) => {
        const newVector = [...value] as [string, string, string];
        newVector[index] = newValue;
        onChange(newVector);
    };

    return (
        <>
            <div className={clsx(styles.vector)}>
                <div className={clsx(styles.content)}>
                    {value.map((component, index) => (
                        <input
                            key={index}
                            type="text"
                            value={component}
                            onChange={(e) => handleChange(index, e.target.value)}
                            style={{ width: '50px', margin: '0 5px' }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VectorInput;