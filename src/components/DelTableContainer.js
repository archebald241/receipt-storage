import React from 'react';
import DelTable from './DelTable.js'
import { connect } from "react-redux";
import { delTableText } from '../store/actions.js'

class DelTableContainer extends React.Component {
	render() {
		return (
			<DelTable delTableText={this.props.delTableText} />
		);
	}
}

const mapStateToProps = state =>{
	return {
	};
}

const mapDispatchToProps = {
	delTableText
}

export default connect(mapStateToProps, mapDispatchToProps)(DelTableContainer);
