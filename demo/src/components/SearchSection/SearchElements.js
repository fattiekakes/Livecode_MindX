import styled from 'styled-components';

export const SearchContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  margin-top: 80px;
  padding: 15px 20px;
`;

export const SearchWrap = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const SearchLabel = styled.p`
  font-size: 20px;
  line-height: 1.1;
  font-weight: 500;
  color: #000;
`;
export const SearchInput = styled.input`
  height: 40px;
  width: 500px;
  border: 1px solid #000;
  border-radius: 5px;
  text-decoration: none;
`;

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #000;
  font-size: 30px;
`;