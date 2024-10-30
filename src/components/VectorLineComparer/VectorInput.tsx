import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { parseNumber } from './helper';

interface Props {
    value: [string, string, string];
    onChange: (value: [string, string, string]) => void;
}

const VectorInput = ({ value, onChange }: Props) => {
    const [invalidInput, setInvalidInput] = React.useState<Set<number>>(new Set());
    const handleChange = (index: number, newValue: string) => {
        const newVector = [...value] as [string, string, string];
        newVector[index] = newValue;
        onChange(newVector);
        if (Number.isNaN(parseNumber(newValue))) {
            setInvalidInput((prev) => new Set(prev.add(index)));
        } else if (invalidInput.has(index)) {
            setInvalidInput((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
            });
        }
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
                            className={clsx(styles.input, invalidInput.has(index) && styles.invalid)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VectorInput;
