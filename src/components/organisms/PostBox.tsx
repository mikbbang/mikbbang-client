import styled from 'styled-components';

const PostBoxContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    background-color: #EC959E;
`;

const PostBoxInnerDiv = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    border: 1px solid #000;
`;

function PostBox(): JSX.Element {
    return (
        <PostBoxContainerDiv>
            <PostBoxInnerDiv>
            </PostBoxInnerDiv>
        </PostBoxContainerDiv>
    );
}

export default PostBox;
