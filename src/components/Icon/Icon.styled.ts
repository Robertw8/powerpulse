import styled from '@emotion/styled';

const StyledIcon = styled.svg`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
  transition-duration: 150ms;
`;

export { StyledIcon };
