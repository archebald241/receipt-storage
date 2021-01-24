import React from 'react';


export default class TableComp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		};
	}

	render() {
		return (
			<div>
				<table border="1">
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
					</tr>
					{this.props.mainTable.map((item, index) => (
						<tr>
							<td key={item.name}>{index}</td>
							<td key={item.name}>{item.datePay}</td>
							<td key={item.name}>{item.kioskName}</td>
							<td key={item.name}>{item.payType}</td>
							<td key={item.name}>{item.payStatus}</td>
							<td key={item.name}>{item.sum}</td>
							<td key={item.name}>{item.paySum}</td>
							<td key={item.name}>{item.quantityPositions}</td>
							<td key={item.name}>{item.namePosicions}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}
}
