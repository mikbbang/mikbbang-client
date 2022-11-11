import styled from 'styled-components';
import { PaddingDiv } from '../atoms/styled';
import ImageSelectView from './ImageSelectView';

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
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
    max-width: 1000px;
`;

const PostBoxTopDiv = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
`;

const PostBoxTextArea = styled.textarea`
    resize: none;
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: #fff;
    flex: 1;
    padding: 35px;
    &:focus {
        outline: none;
    }
`;

const PostBoxBottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    width: 100%;
`;

const HorizontalLineDiv = styled.div`
    width: 100%;
    height: 1px;
    background-color: #FFF;
`;

const ButtonContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12px;
`;

const RoundedButton = styled.button`
    background-color: #fff;
    width: 80px;
    height: 25px;
    border-radius: 15px;
    border: none;
    font-size: 10px;
    color: #EC959E;
    
    &:focus {
        outline: none;
    }

    &:hover {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
`;

function PostBox(): JSX.Element {
    return (
        <PostBoxContainerDiv>
            <PostBoxInnerDiv>
                <PostBoxTopDiv>
                    <PostBoxTextArea placeholder="무슨 생각을 하고 계신가요?"></PostBoxTextArea>
                    <ImageSelectView/>
                </PostBoxTopDiv>
                <PostBoxBottomDiv>
                    <HorizontalLineDiv />
                    <ButtonContainerDiv>
                        <RoundedButton>업로드</RoundedButton>
                        <PaddingDiv width='15px' />
                        <RoundedButton>임시저장</RoundedButton>
                    </ButtonContainerDiv>
                </PostBoxBottomDiv>
            </PostBoxInnerDiv>
        </PostBoxContainerDiv>
    );
}

export default PostBox;
