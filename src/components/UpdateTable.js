import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UpdateTable extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			show : false,
			datePay : '',
			kioskName : '',
			payType : '',
			payStatus : '',
			sum : '',
			paySum : '',
			quantityPositions : '',
			namePosicions : ''
		};

		this.addInTable = this.addInTable.bind(this);
		this.saveResautl = this.saveResautl.bind(this);
	}

	handleClose = () => this.setState({show: false});
	handleShow = () => this.setState({show: true});

	addInTable(event){
		const target = event.target;
		const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
	}

	saveResautl(){
		 var line = {
			datePay : this.state.datePay,
			kioskName : this.state.kioskName,
			payType : this.state.payType,
			payStatus : this.state.payStatus,
			sum : this.state.sum,
			paySum : this.state.paySum,
			quantityPositions : this.state.quantityPositions,
			namePosicions : this.state.namePosicions
		}
		this.setState({
			datePay : '',
			kioskName : '',
			payType : '',
			payStatus : '',
			sum : '',
			paySum : '',
			quantityPositions : '',
			namePosicions : ''
		});
		this.props.setTableText(line)
	}

	render() {
		return (
			<form>
				<Button variant="primary" onClick={()=>{this.handleShow()}}>Добавить чек</Button>
	    	<Modal className="modal-90w" show={this.state.show} onHide={()=>{this.handleClose()}}>
		        <Modal.Header closeButton>
			    		<Modal.Title>Modal heading</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
			        	<table border="1">
									<tr>
										<th>Дата покупки</th>
										<th><input type="date" name="datePay" onChange={this.addInTable} value={this.state.datePay} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Киоск</th>
										<th><input type="text" name="kioskName" onChange={this.addInTable} value={this.state.kioskName} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Тип</th>
										<th><input type="number" min="0" name="payType" onChange={this.addInTable} value={this.state.payType} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Статус оплаты</th>
										<th><input type="number" min="0" name="payStatus" onChange={this.addInTable} value={this.state.payStatus} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Оплата</th>
										<th><input type="number" min="0" name="sum" onChange={this.addInTable} value={this.state.sum} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Сумма</th>
										<th><input type="number" min="0" name="paySum" onChange={this.addInTable} value={this.state.paySum} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Кол-во товара</th>
										<th><input type="number" min="0" name="quantityPositions" onChange={this.addInTable} value={this.state.quantityPositions} autocomplete="off" /></th>
									</tr>
									<tr>
										<th>Наименование товара</th>
										<th><input type="text" name="namePosicions" onChange={this.addInTable} value={this.state.namePosicions} autocomplete="off" /></th>
									</tr>
								</table>
			        </Modal.Body>
			        <Modal.Footer>
			        	<Button variant="secondary" onClick={()=>{this.handleClose()}}>Закрыть</Button>
			        	<Button variant="primary" onClick={()=>{this.saveResautl()}}>Сохранить</Button>
			        </Modal.Footer>
		    </Modal>
	    </form>
		);
	}
}
