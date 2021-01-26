import React from 'react';
import TableComp from './TableComp.js'
import { delTableText } from '../store/actions.js'
import { connect } from "react-redux"; 

class TableCompContainer extends React.Component {
	render() {
		return (
			<TableComp mainTable={this.props.mainTable} delTableText={this.props.delTableText} />
		);
	}
}

const mapStateToProps = state => {
	return {
    mainTable: state
  };
}

const mapDispatchToProps = {
	delTableText
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCompContainer);
