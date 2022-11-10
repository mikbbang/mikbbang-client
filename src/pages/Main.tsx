import styled from 'styled-components';

import {
    OuterFlexDiv
} from '../components/atoms/styled';
import NavBar from '../components/organisms/NavBar';

const MainFlexDiv = styled(OuterFlexDiv)`
    justify-content: flex-start;
    min-height: 100%;
    height: auto;
`;

function Main(): JSX.Element {
    return (
        <MainFlexDiv>
            <NavBar/>
        </MainFlexDiv>
    );
}

export default Main;
