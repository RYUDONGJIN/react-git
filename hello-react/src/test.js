import React, {Component, Fragment} from 'react';
import mainLogo from './image/logo.png';
import { Button } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return(
            <Fragment>
                <div className="NavBar">
                    <div className="mainLogo">
                        <a href="/"><img src={mainLogo} alt="mainLogo"/></a>
                    </div>
                    <div className="NavBarLink">
                        <a href="./test.html">지갑관리</a>
                        <a href="/exchange">거래소</a>
                        <a href="/">거래기록</a>
                        <a href="/">계정관리</a>
                        <a href="/">공지사항</a>
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