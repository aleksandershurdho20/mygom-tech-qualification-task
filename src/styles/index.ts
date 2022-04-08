import styled from "styled-components";
import {TLabel} from '../utils/types'
export const Dropdown = styled.div`
  margin: 0 auto;
  z-index: 10000;
  width: 300px fit-content;
  position: relative;

  & * {
    z-index: 10;
  }
`;

export const DropdownBtn = styled.div`
  cursor: pointer;
  background: white;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px 0 0px;
  margin-top: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #777;
  font-weight: 500;
`;

export const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  top: 45px;
  width: 100%;
`;

export const Item = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  border: none;
  background: #fbfbfb;
  padding: 0.45rem;
  margin-left: 10px;
  margin-bottom: 10px;
  & .icon{
      color:#000;
      width:15px;
      padding-left:15px;
   
  }
`;

export const CategoryTitleWrapper = styled.div`
  margin: 25px;
  color: #3e3737;
  font-weight: 900;
  border-bottom: 2px solid #eee;
`;


export const Label = styled.span<TLabel>`
text-decoration:${props => props.active ? `line-through`  :`none`}
`;
