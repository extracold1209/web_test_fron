// nodejs library that concatenates classes
import Hamburger from '@components/atoms/hamburger';
import { IStoreState } from '@store/modules';
import { actionCreators } from '@store/modules/sidebar';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

// reactstrap components
import {
    Button,
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroup,
    Modal,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap';
import { bindActionCreators } from 'redux';

// dummy image
import anime3 from '@assets/img/anime3.png';
import Kebab from './atoms/Kebab';

interface IProps {
    sidebarOpened: boolean;
    SidebarOpenAction: typeof actionCreators;
}

interface IState {
    collapseOpen: boolean;
    modalSearch: boolean;
    color: string;
}

class AdminNavbar extends React.Component<IProps, IState> {
    private get headerText() {
        return 'Hello Header';
    }

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            collapseOpen: false,
            modalSearch: false,
            color: 'navbar-transparent',
        };
    }
    public componentDidMount() {
        window.addEventListener('resize', this.updateColor);
    }
    public componentWillUnmount() {
        window.removeEventListener('resize', this.updateColor);
    }

    public render() {
        const { sidebarOpened, SidebarOpenAction } = this.props;
        return (
            <>
                <Navbar
                    className={classNames('navbar-absolute', this.state.color)}
                    expand='lg'
                >
                    <Container fluid>
                        <div className='navbar-wrapper'>
                            <Hamburger
                                isOpened={sidebarOpened}
                                onClick={() => SidebarOpenAction.toggleSidebar()}
                            />
                            <NavbarBrand
                                href='#'
                                style={{ textTransform: 'unset' }}
                            >
                                {this.headerText}
                            </NavbarBrand>
                        </div>
                        <Kebab
                            onClick={this.toggleCollapse}
                        />
                        <Collapse navbar isOpen={this.state.collapseOpen}>
                            <Nav className='ml-auto' navbar>
                                {this.makeSearchButton()}
                                {this.makeNotificationButton()}
                                {this.makeUserProfileButton()}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Modal
                    modalClassName='modal-search'
                    isOpen={this.state.modalSearch}
                    toggle={this.toggleModalSearch}
                >
                    <div className='modal-header'>
                        <Input id='inlineFormInputGroup' placeholder='SEARCH' type='text' />
                        <button
                            aria-label='Close'
                            className='close'
                            data-dismiss='modal'
                            type='button'
                            onClick={this.toggleModalSearch}
                        >
                            <i className='tim-icons icon-simple-remove' />
                        </button>
                    </div>
                </Modal>
            </>
        );
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    private updateColor = () => {
        if (window.innerWidth < 993 && this.state.collapseOpen) {
            this.setState({
                color: 'bg-white',
            });
        } else {
            this.setState({
                color: 'navbar-transparent',
            });
        }
    }
    // this function opens and closes the collapse on small devices
    private toggleCollapse = () => {
        if (this.state.collapseOpen) {
            this.setState({
                color: 'navbar-transparent',
                collapseOpen: !this.state.collapseOpen,
            });
        } else {
            this.setState({
                color: 'bg-white',
                collapseOpen: !this.state.collapseOpen,
            });
        }
    }
    // this function is to open the Search modal
    private toggleModalSearch = () => {
        this.setState({
            modalSearch: !this.state.modalSearch,
        });
    }

    private makeSearchButton() {
        return (
            <InputGroup className='search-bar'>
                <Button
                    color='link'
                    data-target='#searchModal'
                    data-toggle='modal'
                    id='search-button'
                    onClick={this.toggleModalSearch}
                >
                    <i className='tim-icons icon-zoom-split' />
                    <span className='d-lg-none d-md-block'>Search</span>
                </Button>
            </InputGroup>
        );
    }

    private makeNotificationButton() {
        return (
            <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    color='default'
                    data-toggle='dropdown'
                    nav
                >
                    <div className='notification d-none d-lg-block d-xl-block' />
                    <i className='tim-icons icon-sound-wave' />
                    <p className='d-lg-none'>Notifications</p>
                </DropdownToggle>
                <DropdownMenu className='dropdown-navbar' right tag='ul'>
                    <NavLink tag='li'>
                        <DropdownItem className='nav-item'>
                            Mike John responded to your email
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag='li'>
                        <DropdownItem className='nav-item'>
                            You have 5 more tasks
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag='li'>
                        <DropdownItem className='nav-item'>
                            Your friend Michael is in town
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag='li'>
                        <DropdownItem className='nav-item'>
                            Another notification
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag='li'>
                        <DropdownItem className='nav-item'>
                            Another one
                      </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    private makeUserProfileButton() {
        return (
            <>
                <UncontrolledDropdown nav>
                    <DropdownToggle
                        caret
                        color='default'
                        data-toggle='dropdown'
                        nav
                        onClick={(e) => e.preventDefault()}
                    >
                        <div className='photo'>
                            <img alt='...' src={anime3} />
                        </div>
                        <b className='caret d-none d-lg-block d-xl-block' />
                        <p className='d-lg-none'>Log out</p>
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-navbar' right tag='ul'>
                        <NavLink tag='li'>
                            <DropdownItem className='nav-item'>Profile</DropdownItem>
                        </NavLink>
                        <NavLink tag='li'>
                            <DropdownItem className='nav-item'>Settings</DropdownItem>
                        </NavLink>
                        <DropdownItem divider tag='li' />
                        <NavLink tag='li'>
                            <DropdownItem className='nav-item'>Log out</DropdownItem>
                        </NavLink>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <li className='separator d-lg-none' />
            </>
        );
    }
}

export default connect(
    ({ sidebar }: IStoreState) => ({ sidebarOpened: sidebar.sidebarOpened }),
    (dispatch) => ({
        SidebarOpenAction: bindActionCreators(actionCreators, dispatch),
    }),
)(AdminNavbar);
