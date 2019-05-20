import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

class Header extends Component {
    public render() {
        return (
            <div>
                <Button variant='contained' color='primary'>
                    Hello World
                </Button>
                Header
            </div>
        );
    }
}

export default Header;
