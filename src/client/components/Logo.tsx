import logo from '@assets/img/react-logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    linkUrl?: string;
    linkText: string;
}

// tslint:disable-next-line: no-empty
export default ({ linkUrl = '/', linkText }: IProps) => {

    return (
        <div className='logo'>
            <Link
                to={linkUrl}
                className='simple-text logo-mini'
            >
                <div className='logo-img'>
                    <img src={logo} alt='react-logo' />
                </div>
            </Link>
            <Link
                to={linkUrl}
                className='simple-text logo-normal'
            >
                {linkText}
            </Link>
        </div>
    );
};
