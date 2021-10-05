import React from "react";
// import { Link } from "react-router-dom";

export class addNewGig extends React.Component {
  render() {
    return (
      <div>
        <from>
          <label>title</label>
          <input />
          <label>description</label>
          <input />
          <label>price</label>
          <input type="number" />
          <label>currncyCode</label>
          <select>
            <option value="dollar">$</option>
            <option value="uro">€</option>
            <option value="secel">₪</option>
          </select>
          <label>currncyCode</label>
          <input type="file" id="file-input" name="ImageStyle" />
        </from>
      </div>
    );
  }
}
