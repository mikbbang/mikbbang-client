import { memo } from 'react';
import styled from 'styled-components';
import { H2Title } from '../atoms/styled';
import Story from './Story';

const OuterContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;
const Container = styled.div`
width: 90%;
max-width: 1700px;
`;

const StoryContainer = styled.div`
height: 600px;

@media screen and (max-width: 1300px) {
    height: 280px;
}

@media screen and (max-width: 400px) {
    height: 170px;
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
        <OuterContainer>
            <Container>
                <RecommendedStoryViewTitle>추천 스토리</RecommendedStoryViewTitle>
                <StoryContainer>
                    <Story story={sampleStory} styles={{ isBigStory: true }}/>
                </StoryContainer>
            </Container>
        </OuterContainer>
    );
}

const RecommendedStoryViewMemo = memo(RecommendedStoryView);

export default RecommendedStoryViewMemo;