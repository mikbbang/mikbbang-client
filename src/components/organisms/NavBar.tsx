import {
    memo
} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';

import ProfileButton from '../atoms/ProfileButton';

const NavBarOuterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    height: 50px;
    width: 100%;
    background-color: #f5f5f5;
    box-sizing: border-box;

    position: relative;
    z-index: 1;
`;

const NavBarDiv = styled.div`
    display: flex;
    align-items: center;

    width: 500px;
    height: 100%;
`;

const NavBarLeftDiv = styled(NavBarDiv)`
    justify-content: flex-start;
    padding: 0;
`;

const NavBarRightDiv = styled(NavBarDiv)`
    justify-content: flex-end;
    padding: 0;
`;

const NavBarLogo = styled.img`
    width: 40px;
    height: 40px;
`;

const MenuLink = styled(Link)`
    display: inline-block;
    box-sizing: border-box;
    padding: 4px 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    text-align: left;
    text-decoration: none;
    color: #333;
    font-size: 14px;

    &:hover {
        background-color: #ddd;
    }

    transition: background-color 0.3s ease-in-out;
`;

function NavBar(): JSX.Element {
    const isLoggedIn = useIsLoggedIn();

    return (
        <>
            <NavBarOuterDiv>
                <NavBarLeftDiv>
                    <NavBarLogo src={'/static/Logo.svg'}/>
                </NavBarLeftDiv>
                <NavBarRightDiv>
                    <ProfileButton>
                        {isLoggedIn ? (
                            <>
                                <MenuLink to={'/logout'}>로그아웃</MenuLink>
                                <MenuLink to={'/subscribed'}>구독리스트</MenuLink>
                                <MenuLink to={'/mypage'}>프로필 관리</MenuLink>
                            </>
                        ) : (
                            <>
                                <MenuLink to={'/login'}>로그인</MenuLink>
                                <MenuLink to={'/register'}>회원가입</MenuLink>
                            </>
                        )}
                    </ProfileButton>
                </NavBarRightDiv>
            </NavBarOuterDiv>
        </>
    );
}

const NavBarMemo = memo(NavBar);

export default NavBarMemo;
