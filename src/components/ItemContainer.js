import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";
function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const disptachFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: disptachFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
