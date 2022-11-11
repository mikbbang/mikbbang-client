import styled from 'styled-components';

import {
    OuterFlexDiv, PaddingDiv
} from '../components/atoms/styled';
import NavBar from '../components/organisms/NavBar';
import RecommendedStoryView from '../components/organisms/RecommendedStoryView';
import SubscribedStories from '../components/organisms/SubscribedStories';
import PostBox from '../components/organisms/PostBox';

const MainFlexDiv = styled(OuterFlexDiv)`
    justify-content: flex-start;
    min-height: 100%;
    height: auto;
`;

function Main(): JSX.Element {
    return (
        <MainFlexDiv>
            <NavBar/>
            <PostBox/>
            <PaddingDiv height='50px'/>
            <RecommendedStoryView/>
            <PaddingDiv height='50px'/>
            <SubscribedStories/>
        </MainFlexDiv>
    );
}

export default Main;
