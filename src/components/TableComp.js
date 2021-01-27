import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class TableComp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		};
		this.delInTable = this.delInTable.bind(this);
	}

	delInTable(index){
    this.props.delTableText(index)
  }

	render() {
		return (
			<div>
				<Table striped bordered hover>
				  <thead>
				    <tr>
							<th>№</th>
							<th>Дата покупки</th>
							<th>Киоск</th>
							<th>Тип</th>
							<th>Статус оплаты</th>
							<th>Оплата</th>
							<th>Сумма</th>
							<th>Кол-во товара</th>
							<th>Наименование товара</th>
							<th>Удалить чек</th>
				    </tr>
				  </thead>
				  <tbody>
						{this.props.mainTable.map((item, index) => (
							<tr>
								<td key={item.name}>{index+1}</td>
								<td key={item.name}>{item.datePay.replace('T',', ')}</td>
								<td key={item.name}>{item.kioskName}</td>
								{item.chequeType===1 && <td key={item.name}>Возврат</td>}
								{item.chequeType===0 && <td key={item.name}>Продажа</td>}
								<td key={item.name}>{item.payStatus}</td>
								<td key={item.name}>{item.paySum}</td>
								<td key={item.name}>{item.sum}</td>
								<td key={item.name}>{item.quantityPositions}</td>
								<td key={item.name}>{item.namePosicions}</td>
								<td key={item.name} className="delBut"><Button variant="primary" onClick={()=>{this.delInTable(index)}}>Удалить</Button></td>
							</tr>
						))}
				  </tbody>
				</Table>
			</div>
		);
	}
}
