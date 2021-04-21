import React, { Component } from "react";
import { connect } from "react-redux";


class ReactReduxPage extends Component {
    render() {
      const { num, add } = this.props;
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{num}</p>
          {/*<button onClick={() => this.props.dispatch({ type: "ADD" })}>add</button>*/} 
           <button onClick={add}>add</button>
        </div>
      );
    }
  }


  const mapStateToProps = state => {
     return {
        num: state,
       };
    };
   const mapDispatchToProps = {
        add: () => {
        return { type: "add" };
        }
    };

  export default connect(
      //mapStateToProps 把state映射到props
      state => ({ num: state }),
    
      //mapDispatchToProps 把dispatch映射到props
      {
        add: () => ({ type: "ADD" })
      }
    )(ReactReduxPage);
