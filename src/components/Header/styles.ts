import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;

  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5rem;
  }
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-800']};
  border-radius: 6px;
  padding: 0.5rem;
  gap: 4px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`;

export const Navigator = styled.nav`
  display: flex;
  gap: 12px;
`;

export const GoToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme['yellow-100']};
  border-radius: 6px;
  position: relative;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }


  span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px;

    width: 20px;
    height: 20px;
    
    border-radius: 50%;
    
    font-weight: 700;
    font-size: .75rem;
    line-height: 130%;
    text-align: center;  
    
    color: ${(props) => props.theme['white-100']};
    background-color: ${(props) => props.theme['yellow-700']};
  }
`;
