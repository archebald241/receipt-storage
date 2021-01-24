import React from 'react';
import TableComp from './TableComp.js'
import { connect } from "react-redux";

class TableCompContainer extends React.Component {
	render() {
		return (
			<TableComp mainTable={this.props.mainTable} />
		);
	}
}

const mapStateToProps = state => {
	return {
    mainTable: state
  };
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCompContainer);
