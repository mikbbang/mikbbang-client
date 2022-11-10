import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Data from '../../types/data';

const StoryContainerDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
background-color: pink;
border-radius: 10px;
overflow: hidden;

filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.1));
`;

const StoryLeftDiv = styled.div<{ isBigStory: boolean }>`
width: ${props => props.isBigStory ? '400px' : '130px'};
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 2;

${props => props.isBigStory ?
        `
        @media screen and (max-width: 1300px) {
            width: 200px;
        }
        `
        :
        ''
}
`;
const CharacterImage = styled.div<{ src: string }>`
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
height: 90%;
width: 70%;
border-radius: 10px;
`;

const StoryRightDiv = styled.div<{ isBigStory: boolean }>`
width: calc(100% - ${props => props.isBigStory ? '400px' : '130px'});
height: 100%;
position: relative;
z-index: 2;

${props => props.isBigStory ?
        `
        @media screen and (max-width: 1300px) {
            width: calc(100% - 200px);
        }
        `
        :
        ''
}
`;

const TalkWhiteBarDiv = styled.div`
position: absolute;
width: 100%;
height: 45%;
bottom: 0;
background-color: rgba(255, 255, 255, 0.2);
z-index: 1;
`;

const TalkContainerDiv = styled.div`
position: absolute;
left: 0;
top: 55%;
width: 100%;
`;
const CharacterNameDiv = styled.div<{ isBigStory: boolean }>`
position: absolute;
background-color: white;
border-radius: 5px;
padding: 2px 10px;

display: flex;
justify-content: center;
align-items: center;

font-size: ${props => props.isBigStory ? '20px' : '12px'};

transform: translate(0, -50%);
filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.1));

${ props => props.isBigStory ?
        `@media screen and (max-width: 800px) {
            font-size: 12px;
        }`
        :
        ''
}
`;
const MessageDiv = styled.div<{ isBigStory: boolean }>`
position: absolute;
top: ${props => props.isBigStory ? '30px' : '20px'};

font-size: ${props => props.isBigStory ? '20px' : '12px'};

${ props => props.isBigStory ?
        `@media screen and (max-width: 800px) {
            top: 20px;
            font-size: 12px;
        }`
        :
        ''
}
`;

function Talk({ name, message, isBigStory }: { name: string, message: string, isBigStory: boolean }) {
    const [messageToDisplay, setMessageToDisplay] = useState('');

    useEffect(() => {
        let n = 0;
        const interval = setInterval(() => {
            setMessageToDisplay(message.slice(0, n));
            n++;

            if(n > message.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => {
            clearInterval(interval);
        };
    }, [message]);

    return (
        <TalkContainerDiv>
            <CharacterNameDiv isBigStory={isBigStory}>{name}</CharacterNameDiv>
            <MessageDiv isBigStory={isBigStory}>{messageToDisplay}</MessageDiv>
        </TalkContainerDiv>
    );
}

function Story({
    story,
    styles: { isBigStory }
}: {
    story: Data.Story,
    styles: {
        isBigStory: boolean
    }
}): JSX.Element {
    const [currentTalkIndex, setCurrentTalkIndex] = useState(0);

    const onClick = useCallback(() => {
        setCurrentTalkIndex(i => (i < story.talks.length - 1 ? i + 1 : i));
    }, []);

    return (
        <StoryContainerDiv onClick={onClick}>
            <StoryLeftDiv isBigStory={isBigStory}>
                <CharacterImage src={story.characterImageSrc}/>
            </StoryLeftDiv>
            <StoryRightDiv isBigStory={isBigStory}>
                <Talk name={story.characterName} message={story.talks[currentTalkIndex].message} isBigStory={isBigStory}/>
            </StoryRightDiv>
            <TalkWhiteBarDiv/>
        </StoryContainerDiv>
    );
}

const StoryMemo = memo(Story);

export default StoryMemo;