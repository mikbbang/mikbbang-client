import { memo } from 'react';
import Story from './Story';
import * as Data from '../../types/data';
import styled from 'styled-components';

const StoryListContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;

@media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
}
`;
const StoryContainer = styled.div`
height: 175px;
`;

function StoryList({ stories }: { stories: Data.Story[] }): JSX.Element {
    return (
        <StoryListContainer>
            {
                stories.map(story => {
                    return (
                        <StoryContainer key={story.id}>
                            <Story styles={{ isBigStory: false }} story={story}/>
                        </StoryContainer>
                    );
                })
            }
        </StoryListContainer>
    );
}

const StoryListMemo = memo(StoryList);

export default StoryListMemo;
