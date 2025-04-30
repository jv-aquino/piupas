import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    padding: ${({ theme }) => `${theme.space[5]}px`};
    flex-direction: column;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.sky1} 0%,
        ${({ theme }) => theme.colors.sky3} 100%
    );
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding: ${({ theme }) => `${theme.space[3]}px`};
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    padding: ${({ theme }) => `${theme.space[6]}px`};
    border-radius: ${({ theme }) => `${theme.radii.md}px`};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.6s ease-out;

    @media (max-width: 768px) {
        padding: ${({ theme }) => `${theme.space[4]}px`};
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: ${({ theme }) => `${theme.space[4]}px`};
    text-align: center;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.6s ease-out;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

export const Comment = styled.p`
    color: ${({ theme }) => theme.colors.sky10};
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => `${theme.space[3]}px`};
    text-align: center;
    font-weight: 500;
    animation: ${fadeIn} 0.8s ease-out;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.slate11};
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => `${theme.space[5]}px`};
    text-align: center;
    line-height: 1.6;
    max-width: 540px;
    animation: ${fadeIn} 1s ease-out;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ComponentWrapper = styled.div`
    margin-top: ${({ theme }) => `${theme.space[4]}px`};
    animation: ${fadeIn} 1.2s ease-out;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
