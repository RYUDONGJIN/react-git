import React, {Component, Fragment} from 'react';
import { Link } from 'react-router';
import mainLogo from './image/logo.png';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item" >
        {children}
    </Link>
)

class NavBar extends Component {
    render() {
        return(
            <Fragment>
                <div className="NavBar">
                    <div className="mainLogo">
                        <MenuItem to={'/'}><img src={mainLogo} alt="mainLogo"/></MenuItem>
                    </div>
                    <div className="NavBarLink">
                        <MenuItem to={'/manageWallet'}>지갑관리</MenuItem>
                        <MenuItem to={'/exchange'}>거래소</MenuItem>
                        <MenuItem to={'/'}>거래기록</MenuItem>
                        <MenuItem to={'/'}>계정관리</MenuItem>
                        <MenuItem to={'/'}>공지사항</MenuItem>
                    </div>
                    <div className="NavBarSub">
                        <span>keypair@gmail.com님, 환영합니다! &nbsp;&nbsp;</span>
                        <Button basic color='grey' content='Black'>알림</Button>
                        <Button basic color='blue'>로그아웃</Button>
                        <Button secondary>한국어</Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NavBar;