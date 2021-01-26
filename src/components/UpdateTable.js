import React from 'react';
import { Alert, Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UpdateTable extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			showError : false,
			show : false,
			datePay : '',
			kioskName : '',
			chequeType : 'Продажа',
			paySum : 0,
			sum : 0,
			quantityPositions : 1,
			namePosicions : ''
		};

		this.addInTable = this.addInTable.bind(this);
		this.saveResault = this.saveResault.bind(this);
	}

	handleClose = () => this.setState({show: false});
	handleShow = () => this.setState({show: true});
	errorClose = () => this.setState({showError: false});

	addInTable(event){
		const target = event.target;
		const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
	}

	saveResault(){
		let payStatus
		if (this.state.sum === this.state.paySum) {
			payStatus = 'Оплачено';
		} else if (this.state.paySum === 0) {
			payStatus = 'Нет оплаты';
		} else if (this.state.sum < this.state.paySum) {
			payStatus = 'Переплата';
		}	else {
			payStatus = 'Недоплата';
		}
		if (this.state.datePay != '' && this.state.kioskName != '' && this.state.namePosicions != '') {
			var line = {
				datePay : this.state.datePay,
				kioskName : this.state.kioskName,
				chequeType  : this.state.chequeType,
				payStatus : payStatus,
				paySum : this.state.paySum,
				sum : this.state.sum,
				quantityPositions : this.state.quantityPositions,
				namePosicions : this.state.namePosicions
			}
			this.setState({
				showError: false,
				datePay : '',
				kioskName : '',
				chequeType : 'Продажа',
				paySum : 0,
				sum : 0,
				quantityPositions : 0,
				namePosicions : ''
			});
			this.props.setTableText(line)
		} else this.setState({showError: true});
	}

	render() {
		return (
			<div>
				<Button variant="primary" onClick={()=>{this.handleShow()}}>Добавить чек</Button>
	    	<Modal className="modal-90w" show={this.state.show} onHide={() => {this.handleClose()}}>
	        <Modal.Header closeButton>
		    		<Modal.Title>Добаивить чек</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
						{this.state.showError && <Alert variant={'danger'} onClose={() => {this.errorClose()}} dismissible>Введены некоректные данные</Alert>}
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Дата покупки</Form.Label>
								<Form.Control type="datetime-local" name="datePay" onChange={this.addInTable} value={this.state.datePay} autocomplete="off" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Киоск</Form.Label>
								<Form.Control type="text" name="kioskName" onChange={this.addInTable} value={this.state.kioskName} autocomplete="off" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Тип</Form.Label>
								<Form.Control as="select" type="text" name="chequeType" onChange={this.addInTable} value={this.state.chequeType} autocomplete="off">
									<option>Продажа</option>
						      <option>Возврат</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Оплата</Form.Label>
								<Form.Control type="number" min="0" name="paySum" onChange={this.addInTable} value={this.state.paySum} autocomplete="off" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Сумма</Form.Label>
								<Form.Control type="number" min="0" name="sum" onChange={this.addInTable} value={this.state.sum} autocomplete="off" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Количествово товара</Form.Label>
								<Form.Control type="number" min="1" name="quantityPositions" onChange={this.addInTable} value={this.state.quantityPositions} autocomplete="off" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Наименование товара</Form.Label>
								<Form.Control type="text" name="namePosicions" onChange={this.addInTable} value={this.state.namePosicions} autocomplete="off" />
							</Form.Group>
						</Form>
		       </Modal.Body>
		       <Modal.Footer>
		       	<Button variant="secondary" onClick={()=>{this.handleClose()}}>Закрыть</Button>
		       	<Button variant="primary" onClick={()=>{this.saveResault()}}>Сохранить</Button>
		       </Modal.Footer>
		    </Modal>
	    </div>
		);
	}
}
