import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class DelTable extends React.Component {
	constructor(props) {
		super(props)

    this.state = {
      delId: 0
    };
    this.changeId = this.changeId.bind(this);
    this.delInTable = this.delInTable.bind(this);
	}

  changeId(event){
    this.setState({delId: event.target.value});
  }

  delInTable(event){
    this.props.delTableText(this.state.delId)
  }

	render() {
		return (
      <div>
        <form>
          <p>Введите № чека: </p>
          <input type="number" min='0' name="datePay" onChange={this.changeId} value={this.state.delId} autocomplete="off" />
          <Button variant="primary" onClick={()=>{this.delInTable()}}>Удалить чек</Button>
        </form>
      </div>
		);
	}
}
