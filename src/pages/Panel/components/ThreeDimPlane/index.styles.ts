import styled from '@emotion/styled';
import { color } from '../../../../constants';

const ratio = 75;

interface LayoutProps {
  activeClassName: string;
}

export const Layout = styled.div<LayoutProps>`
  position: relative;
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  display: flex;
  flex-direction: column-reverse;

  .${(props) => props.activeClassName} {
    filter: brightness(0.8);
  }

  transform: skew(-30deg, 15deg);
`;

interface PlaneProps {
  y: number;
  x: number;
  height: number;
  width: number;
  maxWidth: number;
  maxHeight: number;
  depth: number;
}

export const Line = styled.div<PlaneProps>`
  position: absolute;
  left: ${(props) => (props.y / props.maxHeight) * ratio - (props.depth + 2)}%;
  bottom: ${(props) => (props.x / props.maxWidth) * ratio + (props.depth + 3)}%;

  width: ${(props) => (props.height / props.maxHeight) * ratio}%;
  height: ${(props) => (props.width / props.maxWidth) * ratio}%;

  transition: background-color ease 0.2s;

  border: 1px solid ${color.borderColor};
  border-radius: 5px;
`;
