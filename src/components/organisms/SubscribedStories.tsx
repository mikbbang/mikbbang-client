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
    id: 'suiseiseki',
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

const sampleStory2 = {
    id: 'suisei',
    characterImageSrc: 'https://blog.kakaocdn.net/dn/ckhBm1/btrdT1MeEOP/1IGbpXIC8uJNjLzcnBYab1/img.png',
    characterName: '호시마치 스이세이',
    talks: [
        { message: '스이세이 열차 슈슈슈~' },
        { message: '서둘러 서둘러 슈슈슈~' },
        { message: '불편한 스이세이 열차 타보지 않을래?' },
        { message: '스이세이 열차 발진!' }
    ]
};

const sampleStory3 = {
    id: 'hakase',
    characterImageSrc: 'https://i.pinimg.com/236x/4f/8e/c2/4f8ec25c98b2c6dd18daba01717a7e6d.jpg',
    characterName: '하카세',
    talks: [
        { message: '사메(サメ)' },
        { message: '사메(サメ)' },
        { message: '사메사메(サメサメ)' },
        { message: '사메(サメ)' }
    ]
};

const sampleStory4 = {
    id: 'sans',
    characterImageSrc: 'https://ssb.wiki.gallery/images/6/6a/Sans.png',
    characterName: '샌즈',
    talks: [
        { message: '안녕.' },
        { message: '꽤 바빴었지, 응?' },
        { message: '...' },
        { message: '그래, 물어볼 게 하나 있어.' },
        { message: '가장 나쁜 사람이라 할지라도 바뀔 수 있을까...?' },
        { message: '헤 헤 헤 헤...' },
        { message: '좋아.' },
        { message: '그럼, 여기 더 괜찮은 질문이 있어.' },
        { message: '끔찍한 시간을 보내고 싶어?' }
    ]
};

const sampleStory5 = {
    id: 'nyan',
    characterImageSrc: 'https://mblogthumb-phinf.pstatic.net/20151127_77/chlrh1226_1448624935195M029R_JPEG/%C1%A6%BA%ED_%B3%ED%B3%ED%BA%F1%BF%E4%B8%AE_%B8%AE%C7%C7%C6%AE_01.mp4_20151127_204626.531.jpg?type=w2',
    characterName: '렌게',
    talks: [
        { message: '냥-파스-' },
        { message: '역시 여기는 시골인 거야?' },
        { message: '...' },
        { message: '여기는 역시 시골이야.' }
    ]
};

const sampleStory6 = {
    id: 'miku',
    characterImageSrc: 'https://i.imgur.com/hVlCgvo.png',
    characterName: '하츠네 미쿠',
    talks: [
        { message: '우파파 우파파(うぱぱ うぱぱ)' },
        { message: '우파 우파 우파파(うぱ うぱ うぱぱ)' },
        { message: '우파파 우파파(うぱぱ うぱぱ)' },
        { message: '우파 우파파(うぱ うぱぱ)' }
    ]
};

function SubscribedStories(): JSX.Element {
    return (
        <OuterContainer>
            <Container>
                <Title>구독한 스토리</Title>
                <StoryList stories={[
                    sampleStory2, sampleStory3, sampleStory4, sampleStory5, sampleStory6, sampleStory,
                    sampleStory2, sampleStory3, sampleStory4, sampleStory5, sampleStory6, sampleStory
                ]}/>
            </Container>
        </OuterContainer>
    );
}

const SubscribedStoriesMemo = memo(SubscribedStories);

export default SubscribedStoriesMemo;