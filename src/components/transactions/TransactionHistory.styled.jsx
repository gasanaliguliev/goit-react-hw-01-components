import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
  width: 500px;
  border-collapse: collapse;
  margin: 40px auto;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 4px;
  & th,
  & td {
    padding: 10px;
    text-align: center;
    border: 1px solid grey;
    font-size: 20px;
  }
  & th {
    background-color: red;
    color: #FFF;
  }

  & tr:nth-of-type(odd) {
    background-color: lightgrey;
  }

  & tr:nth-of-type(even) {
    background-color: white;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }
`;