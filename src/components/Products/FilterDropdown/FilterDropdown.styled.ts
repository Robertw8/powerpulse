import styled from '@emotion/styled';

interface DropdownListProps {
  visible: boolean;
}

const Dropdown = styled.div`
  position: relative;

  width: 146px;
  height: 46px;
  padding: 14px;
  border: 1px solid #efede84d;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  border-radius: 12px;
  transition-duration: 150ms;

  &:is(:hover, :focus) {
    cursor: pointer;
    border-color: #e6533c;
  }
`;

const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  top: 80%;
  left: 0;

  width: 100%;
  max-height: 228px;
  padding: 14px 28px 14px 14px;

  background-color: #1c1c1c;
  border-radius: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
  transform-origin: top;

  transform: scaleY(${({ visible }) => (visible ? 1 : 0)});

  @media screen and (min-width: 769px) {
    max-height: 276px;
  }
`;

const DropdownItem = styled.li`
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

export { Dropdown, DropdownList, DropdownItem };
