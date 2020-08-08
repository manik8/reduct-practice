import React from "react";
import { buyCloth } from "../redux";
import { connect } from "react-redux";

function ClothContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCloths}</h2>
      <button onClick={props.buyCloth}>Buy Cloth</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCloths: state.cloth.numOfCloths,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCloth: () => dispatch(buyCloth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClothContainer);
