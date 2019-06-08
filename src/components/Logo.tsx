import React from 'react';
import logo from '../assets/img/react-logo.png';

interface IProps {
    onLogoClicked?: () => any;
}

// tslint:disable-next-line: no-empty
export default ({ onLogoClicked = () => { } }: IProps) => {
    const linkUrl = 'https://www.creative-tim.com/';
    const linkText = 'Creative Tim';

    return (
        <div className='logo'>
            <a
                href={linkUrl}
                className='simple-text logo-mini'
                target='_blank'
                onClick={onLogoClicked}
            >
                <div className='logo-img'>
                    <img src={logo} alt='react-logo' />
                </div>
            </a>
            <a
                href={linkUrl}
                className='simple-text logo-normal'
                target='_blank'
                onClick={onLogoClicked}
            >
                {linkText}
            </a>
        </div>
    );
};
