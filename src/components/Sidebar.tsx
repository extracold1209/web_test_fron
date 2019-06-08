// nodejs library to set properties for components
import React from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// reactstrap components
import { Nav } from 'reactstrap';
import Logo from './Logo';

let ps: PerfectScrollbar;

type bgColors = 'primary' | 'blue' | 'green';
interface IProps extends RouteComponentProps {
  rtlActive: boolean;
  bgColor: bgColors;
  routes: any[];
  toggleSidebar: () => any;
}

class Sidebar extends React.Component<IProps> {
  public static defaultProps = {
    rtlActive: false,
    bgColor: 'primary' as 'primary',
    routes: [{}],
  };

  constructor(props: Readonly<IProps>) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  public activeRoute(routeName: string) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  public componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar as HTMLElement, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  public componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }
  public linkOnClick = () => {
    document.documentElement.classList.remove('nav-open');
  }
  public render() {
    const { bgColor, routes, rtlActive } = this.props;

    return (
      <div className='sidebar' data-data={bgColor}>
        <div className='sidebar-wrapper' ref='sidebar'>
          <Logo />
          <Nav>
            {routes.map((prop, key) => {
              if (prop.redirect) { return null; }
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? ' active-pro' : '')
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className='nav-link'
                    activeClassName='active'
                    onClick={this.props.toggleSidebar}
                  >
                    <i className={prop.icon} />
                    <p>{rtlActive ? prop.rtlName : prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
