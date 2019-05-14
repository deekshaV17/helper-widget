import styled from 'styled-components';

const StyledWidget = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  .tab-list {
    border-bottom: 1px solid #ccc;
    padding-left: 0;
    display: flex;
    justify-content: flex-end;
  }

  .tab-list-item {
    position: relative;
    padding: 8px 10px;
    min-width: 50px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: #ccc;
      border-radius: 4px;
      border: 1px solid #ccc;
      border-width: 1px 1px 0 1px;
      transform: perspective(5px) rotateX(2deg);
    }
    div {
      min-width: 100px;
    }
  }

  .tab-list-active {
    z-index: 999;

    &:before {
      background: #eee;
    }
  }

  .label {
    display: flex;
    justify-content: center;
  }
`;

export default StyledWidget;
