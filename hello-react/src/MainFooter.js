import React, {Component} from 'react';

class MainFooter extends Component {
    render(){
        return(
            <div className="mainFooter">
                <div>
                    <span>© Streami, Inc. 모든 권리 보유.</span>
                </div>
                <div>
                    <ul>
                        <li>회사소개</li>
                        <li>공지사항</li>
                        <li>보안</li>
                        <li>수수료 안내</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>매매거래정책</li>
                        <li>API</li>
                        <li>FAQ</li>
                        <li>고객지원센터</li>
                        <li>긴급 계정 동결</li>
                    </ul>
                </div>
                <div className="footerInfo">
                    <p>(주)스트리미 서울특별시 강남구 영동대로 704, 7층 (청담동, 삼강빌딩) | 대표이사 이준행 | 사업자등록번호 432-87-00120 | 통신판매업신고 2016-서울강남-03904호 | 02-561-2266</p>
                    <p>사업 제휴 문의 전용 : contact@gopax.co.kr | 채용 문의 : hiring@streami.co | 카카오플러스 친구 : 고팍스_GOPAX</p>
                    <p>거래소 이용 관련 문의는 고객지원센터 사이트를 통해 진행 됩니다.위 사업제휴문의 메일로 이용 문의를 접수하시는 경우, 문의가 정상적으로 처리되지 않을 수 있습니다.</p>
                    <p>고객지원센터를 이용해 주십시오. 고객지원센터 운영 : 월~금 (09:00~21:00), 주말 및 공휴일 휴무</p>
                </div>
            </div>
        );
    }
}

export default MainFooter;