import { memo } from 'react';
import styled from 'styled-components';
import { H2Title } from '../atoms/styled';
import Story from './Story';

const RecommendedStoryViewContainer = styled.div`
width: 100%;
padding: 0 5%;
box-sizing: border-box;
`;

const RecommendedStoryViewStoryContainer = styled.div`
height: 600px;

@media screen and (max-width: 900px) {
    height: 300px;
}
`;

const sampleStory = {
    id: 'sui',
    characterImageSrc: 'https://m.media-amazon.com/images/I/51q4vkiH44L.jpg',
    characterName: '스이세이세키',
    talks: [
        { message: '스이세이세키가 특별히 네 선생님이 돼서 공부시켜주는데스.' },
        { message: '고마운 줄 알라는 것인 데스.' },
        { message: '알았으면 어서 이 문제를 푸는 데스.' },
        { message: '뭐하는데스?!' },
        { message: '오답밖에 없는 데스!' }
    ]
};

const RecommendedStoryViewTitle = styled(H2Title)``;

function RecommendedStoryView(): JSX.Element {
    return (
        <RecommendedStoryViewContainer>
            <RecommendedStoryViewTitle>추천 스토리</RecommendedStoryViewTitle>
            <RecommendedStoryViewStoryContainer>
                <Story story={sampleStory} styles={{ leftSideSize: '30%', isBigStory: true }}/>
            </RecommendedStoryViewStoryContainer>
        </RecommendedStoryViewContainer>
    );
}

const RecommendedStoryViewMemo = memo(RecommendedStoryView);

export default RecommendedStoryViewMemo;