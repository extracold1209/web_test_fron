import React from 'react';

interface IProps {
    onClick: () => void;
}

export default ({onClick}: IProps) => (
    <button
        aria-expanded={false}
        aria-label='Toggle navigation'
        className='navbar-toggler'
        data-target='#navigation'
        data-toggle='collapse'
        id='navigation'
        type='button'
        onClick={onClick}
    >
        <span className='navbar-toggler-bar navbar-kebab' />
        <span className='navbar-toggler-bar navbar-kebab' />
        <span className='navbar-toggler-bar navbar-kebab' />
    </button>
);
