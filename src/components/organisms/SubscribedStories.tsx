import { memo } from 'react';
import styled from 'styled-components';
import { H2Title } from '../atoms/styled';
import StoryList from './StoryList';



const OuterContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;
const Container = styled.div`
width: 90%;
max-width: 1700px;
`;
const Title = styled(H2Title)``;

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

function SubscribedStories(): JSX.Element {
    return (
        <OuterContainer>
            <Container>
                <Title>구독한 스토리</Title>
                <StoryList stories={new Array(20).fill(sampleStory).map(obj => ({ ...obj, id: Math.random() + 'sui' }))}/>
            </Container>
        </OuterContainer>
    );
}

const SubscribedStoriesMemo = memo(SubscribedStories);

export default SubscribedStoriesMemo;