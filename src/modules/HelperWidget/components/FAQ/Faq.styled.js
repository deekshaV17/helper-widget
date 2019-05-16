import styled from 'styled-components';

const FAQWrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  background: #eee;
  box-shadow: 1px 1px 5px 5px #aaa;

  .faq-wrapper {
    width: 65%;
    border: 1px solid #aaa;
    border-width: 0 0 0 1px;
    padding: 30px 100px 30px 30px;

    .search {
      width: 100%;
      border-radius: 15px;
      outline: none;
      border: 1px solid #aaa;
      padding: 7px;
      margin-bottom: 30px;
    }
  }

  .faq-item-wrapper {
    display: flex;
    justify-content: space-between;

    .item-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .faq-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 225px;
        padding: 20px;
        cursor: pointer;

        &:hover {
          background: #fff;
          border: 1px solid #4170cc;
        }

        + .faq-item {
          margin-top: 20px;
        }

        span + span {
          color: #4170cc;
        }
      }
    }

    .icon-wrapper {
      padding: 8px 12px;
      border: 2px solid #4170cc;
      border-radius: 30px;

      i {
        color: #4170cc;
        font-size: 15px;
      }
    }
  }
`;

export default FAQWrapper;
