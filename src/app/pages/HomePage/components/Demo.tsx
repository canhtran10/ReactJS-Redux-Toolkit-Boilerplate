import * as React from 'react';
import styled from "styled-components/macro";
import { useDemoSlice } from 'store/slices/demo';
import { useDispatch, useSelector } from "react-redux";
import { getSelectorDemos, getSelectorLoading } from "../../../../store/selectors/demo";
import { useEffect} from "react";
import { LoadingIndicator } from "../../../components/LoadingIndicator";

const DemoButton = styled.div`
  margin-bottom: 30px;
`;

export function Demo() {

  const dispatch = useDispatch();
  const { actions } = useDemoSlice();

  const demoData = useSelector(getSelectorDemos);
  const isLoading = useSelector(getSelectorLoading);
  console.log('get demoData from store', demoData);

  const getDemoData = () => {
    console.log('click');
    dispatch(actions.loadDemosData());
  }

  const removeItem = (item) => {
    console.log('removeItem', item);
    dispatch(actions.removeItem(item));
    return false;
  }

  return (
    <div className={"Demo"}>

      <DemoButton>
        <button type="button" onClick={getDemoData} className="btn btn-primary">Get Demo Data</button>
      </DemoButton>
      <table className="table table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <th scope="col">Street</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>

        {demoData.map((row, index) => {
          return (<tr key={`row-${index}`}>
            <th scope="row">{index + 1}</th>
            <td>{row.email}</td>
            <td>{row.address.city}</td>
            <td>{row.address.street}</td>
            <td>
              <a href={"#"} role="button" onClick={() => removeItem(row)}>Remove</a>
            </td>
          </tr>)
        })}
        </tbody>
      </table>

      <div>
        {isLoading && <LoadingIndicator />}
      </div>
    </div>
  )
}