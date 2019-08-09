import React, { StatelessComponent, ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean,
    fill: boolean,
    label: string 
}

const Button: StatelessComponent<ButtonProps> = props => (
    <div className={`Button ${ props.active ? props.fill ? `active fill` : `active no-fill` : `disabled`}`}>
        { props.label }
    </div>
);

export default Button;