import styled, { css, keyframes } from "styled-components";
export const StyledNavList = styled.ul`
  list-style: none;
  height: 80px;
  width: 100%;
  background-color: #f4eded;
  display: flex;

  padding: 10px;
  gap: 30px;
`;
export const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
export const StyledCartIconWrapper = styled.div`
  position: relative;
  margin: auto 0;
  font-weight: bolder;
  &:after {
    content: "${({ cartCounter }) => cartCounter}";
    cursor: pointer;
    left: 56%;
    top: 37%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;
export const StyledCartIcon = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const StyledBookList = styled.ul`
  width: 90%;
  margin: auto;
  margin-top: 40px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 30px;
`;
export const StyledBookListItem = styled.li`
  width: 430px;
  height: 400px;
  margin: auto;
  position: relative;

  box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  > h2 {
    margin: 20px;
  }
`;

export const StyledProductImage = styled.img`
  box-shadow: 3px 3px 8px -3px rgba(0, 0, 0, 0.75);
  position: relative;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  height: 300px;
  width: 200px;
  border-radius: 6px;
`;
export const StyledButton = styled.button`
  background-color: #ff3f40;
  font-size: 20px;
  margin: auto;
  padding: 10px;
  border-radius: 4px;
  border: 0;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: 3px 3px 8px -3px rgba(0, 0, 0, 0.75);
  }
`;
export const StyledProductTextContainer = styled.div``;
export const StyledCartWrapper = styled.div`
  text-align: center;
  width: 90%;
  margin: auto;
  margin-top: 10px;
  min-height: 600px;
  box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.25);
  padding: 20px;
  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
`;
export const StyledCartList = styled.ul`
  list-style: none;
  min-height: 500px;
  overflow: auto;
  overflow-x: hidden;
`;
export const StyledCartListItem = styled.li`
  display: grid;
  grid-template-columns: 16% 41% 15% 4% 4% 4% 20%;
  margin: 5px;
  font-weight: bold;
  height: 80px;
  padding: 3px;
`;
export const StyledCartListItemImage = styled.img`
  height: ${({ size }) =>
    size === "small" ? "30px" : size === "medium" ? "50px" : "80px"};
`;
export const StyledForm = styled.form`
  margin: auto;
  box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.15);

  width: 40%;
`;
export const StyledField = styled.input`
  line-height: 50px;
  background-color: #fafafa;

  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  transition: all 0.4s ease;
  &::placeholder {
    color: ${({ warning }) => (warning ? "red" : null)};
  }
`;
