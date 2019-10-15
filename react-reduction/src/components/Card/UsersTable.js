import React from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
export default class UsersTable extends React.Component{

constructor(props){
super(props);
this.state = { resultList: [] }
}

componentWillMount(){

  const uri = 'http://localhost:8090/ecommerce/api/users';

  fetch(uri)
  .then(response => response.json())
  .then ((resultList) => {
    this.setState({ resultList: resultList })
  })

}

  render() {
return(

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Registered Users </CardHeader>
              <CardBody>
              
                      <Table responsive {...{ ['hover']: true }}>
                        
                        
                        <thead>
                          <tr rowspan="4">
                          <th className="text-center"> Admins</th>
                          </tr>

                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th>E-mail</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.resultList.map((user, index)=> {
                          return (

                          <tr key={user.idUsers}>
                            <th scope="row">{user.idUsers}</th>
                            <td>{user.firstName}</td>
                            <td>{user.firstLastName}</td>
                            <td>{user.users}</td>
                            <td>{user.address}</td>
                            <td>{user.email}</td>
                            <td><Button value="${user.idUsers}">Update</Button></td>
                            <td><Button value="${user.idUsers}">Delete</Button></td>
                          </tr>
                        );
                      })}
                          
                        </tbody>
                      </Table>
</CardBody>
                    </Card>



                  </Col>
                  </Row>
	);
};
}
