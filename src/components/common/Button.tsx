import React from 'react';
import './Button.scss';

interface IProps {
    active: boolean,
    fill: boolean,
    label: string 
}

const Button: React.FC<IProps> = props => (
    <div className={`Button ${ props.active ? props.fill ? `active fill` : `active no-fill` : `disabled`}`}>
        { props.label }
    </div>
);

export default Button;