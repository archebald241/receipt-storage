import React from 'react';
import UpdateTable from './UpdateTable.js'
import { connect } from "react-redux";
import { setTableText } from '../store/actions.js'

class UpdateTableContainer extends React.Component {
	render() {
		return (
			<UpdateTable mainTable={this.props.mainTable} setTableText={this.props.setTableText} />
		);
	}
}

const mapStateToProps = state =>{
	return {
		mainTable: state
	};
}

const mapDispatchToProps = {
	setTableText
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTableContainer);
