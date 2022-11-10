import { useState, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';
import useWindowSize from '../../hooks/useWindowSize';

const ProfileImg = styled.img`
    display: inline-block;
    cursor: pointer;
`;

interface FloatingMenuDivProps {
    left: number;
    top: number;
}

const floatingMenuWidth = 100;

const FloatingMenuDiv = styled.div<FloatingMenuDivProps>`
    position: absolute;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    width: ${floatingMenuWidth}px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 10;

    animation: appear 0.3s ease-in-out;
    @keyframes appear {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    transition: left 0.3s ease-in-out;
`;

interface ProfileButtonProps {
    children: React.ReactNode;
}

function ProfileButton(props: ProfileButtonProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = useCallback(() => setIsOpen(s => !s), []);

    const [
        debouncedScreenScale,
        setDebouncedScreenScale
    ] = useState(0);
    const windowSize = useWindowSize();

    useDebounce(() => {
        setDebouncedScreenScale(windowSize.width);
    }, 500, [windowSize.width, setDebouncedScreenScale]);

    const imageRef = useRef<HTMLImageElement>(null);

    const [left, top] = useMemo(() => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const screenWidth = debouncedScreenScale;
            const rightSpace = screenWidth - rect.right;
            const padding = 10;
            
            if (rightSpace < floatingMenuWidth + padding * 2 + rect.width) {
                return [rect.left - rect.width - floatingMenuWidth - padding, rect.top];
            } else {
                return [rect.left + rect.width + padding, rect.top];
            }
        }
        return [0, 0];
    }, [imageRef.current, debouncedScreenScale]);
    
    return (
        <>
            <ProfileImg
                src={'static/ProfileIcon.svg'}
                alt={'profile icon'}
                onClick={onClick}
                ref={imageRef}
            />
            {isOpen && (
                <FloatingMenuDiv left={left} top={top}>
                    {props.children}
                </FloatingMenuDiv>
            )}
        </>
    );
}

export default ProfileButton;
