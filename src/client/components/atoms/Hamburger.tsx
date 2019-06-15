import classNames from 'classnames';
import React from 'react';

interface IProps {
    isOpened: boolean;
    onClick: () => void;
}

export default ({ isOpened: opened = false, onClick }: IProps) => (
    <div
        className={classNames('navbar-toggle d-inline', {
            toggled: opened,
        })}
    >
        <button
            className='navbar-toggler'
            type='button'
            onClick={onClick}
        >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
        </button>
    </div>
);
