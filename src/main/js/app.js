const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');


const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }

    componentDidMount() {
        console.log("app.js: App: componentDidMount")
        client({ method: 'GET', path: '/api/employees' }).done(response => {
            this.setState({ employees: response.entity._embedded.employees });
        });
    }


    render() {
        return (
            <EmployeeList employees={this.state.employees} />
        )
    }

}

// tag::employee-list[]
class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]
// tag::employee[]
class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}
// end::employee[]


ReactDOM.render(
    <App />,
    document.getElementById('react')
);
