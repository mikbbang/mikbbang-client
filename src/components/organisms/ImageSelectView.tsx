import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 200px;
    padding: 35px 35px 0px 0px;
`;

const CurrentImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const LeftButtonImg = styled.img`
    width: 15px;
    padding-right: 10px;
`;

const RightButtonImg = styled.img`
    width: 15px;
    padding-left: 10px;
`;

function ImageSelectView(): JSX.Element {
    return (
        <ContainerDiv>
            <LeftButtonImg src='/static/ArrowLeft.svg'/>
            <CurrentImg src='https://blog.kakaocdn.net/dn/vtIZu/btriggSSorC/HA4zk2ms8oJDK2kj0kDvMK/img.png'/>
            <RightButtonImg src='/static/ArrowRight.svg'/>
        </ContainerDiv>
    );
}

export default ImageSelectView;

