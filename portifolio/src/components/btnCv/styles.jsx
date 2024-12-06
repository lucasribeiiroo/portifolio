import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border-color: #32b9e7;
  border-width: 2px;
  padding: 10px;
  cursor: pointer;
  overflow: clip;
  margin: 20px;
`;

export const Circle = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #32b9e7;
  display: flex;
  margin-right: 5px;
`;

export const Title = styled.p`
  color: white;
  display: relative;
  z-index: 0;
`;

export const ArrowDown = styled(FaArrowDown)`
  height: 20px;
  width: 20px;
  color: white;
  margin-left: 8px;
`;
