import styled from "styled-components";
import { fonts, colors, radius } from "../../style";

const StyledDivSupProcess = styled.div`
  display: flex;
  background-color: ${colors.background};
`;
const StyledDivInfoProcess = styled.div`
  width: 35.5%;
  height: 90vh;
  background-color: ${colors.header};
  color: ${colors.white};
  font-size: ${fonts.sizeMd};
  font-family: ${fonts.font};
  padding: 0 3%;
  box-sizing: border-box;
  h2 {
    text-align: center;
    font-size: ${fonts.sizeXlg};
    font-weight: 700;
  }

  hr {
    border-color: ${colors.primary};
    margin: 1rem 15%;
  }

  span {
    text-align: left;
    font-size: ${fonts.sizeXlg};
  }

  .issuerIcon {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }

  .fowardIcon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    p {
      text-decoration: none;
      color: white;
      font-size: ${fonts.sizeLg};
    }
    svg {
      margin: 0 1rem;
    }
  }

  .tagsTest {
    display: flex;
    span {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      margin: 1rem 0.5rem;
      background-color: red;
    }
    span:first-child {
      background-color: purple;
    }
    span:last-child {
      background-color: yellow;
    }
  }

  .historic {
    border: 2px solid ${colors.white};
    border-radius: ${radius.sizeSm};
    font-size: ${fonts.sizeLg};
    color: ${colors.white};
    display: block;
    text-align: center;
    margin-top: 2rem;
    padding: 0.7rem 3rem;
  }
`;

const StyledDivShowProcess = styled.div`
  width: 64.5%;
  margin: 0 5%;
  height: 70vh;
  overflow-y: scroll;
  font-family: ${fonts.font};

  .infoProcess {
    width: 100%;
    background: ${colors.white};
    border-radius: ${radius.sizeMd};
    padding: 1rem 2rem 2rem;
    border: 1px solid ${colors.black};
    box-sizing: border-box;
    margin-top: 2rem;
  }
  .infoProcessicon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: baseline;
    p {
      margin: 0 0 2rem 0;
      font-size: ${fonts.sizeXXlg};
    }
    svg {
      left: 5%;
      color: ${colors.primary};
      height: 1.3rem;
      width: 1.3rem;
    }
  }
`;

const StyledDivButtons = styled.div`
  position: absolute;
  bottom: 20px;
  right: 37%;
  button {
    margin-left: 1rem;
  }
`;
export {
  StyledDivInfoProcess,
  StyledDivShowProcess,
  StyledDivSupProcess,
  StyledDivButtons,
};