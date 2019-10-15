import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

export default class PostUsers extends React.Component {

constructor(props){
super(props);
this.state = { saver: [] }
}

/*var name = document.getElementById('name');
var lname = document.getElementById('firstLastName');
var addrss = document.getElementById('address');
var usr = document.getElementById('users');
var mail = document.getElementById('email');
var pswr = document.getElementById('password');
var pswrTemp = document.getElementById('passwordTemporal');*/


componentDidMount() {

	const uri = 'http://localhost:8090/ecommerce/api/users';
		fetch(uri, {
			method: 'POST',
			body: JSON.stringify({
				idUsers: 1,
				firstName:	        "${document.getElementById('name')}",
				firstLastName:	    "${document.getElementById('firstLastName')}",
				address:	        "${document.getElementById('address')}",
				users:	            "${document.getElementById('users')}",
				email:	            "${document.getElementById('email')}",
				password:	        "${document.getElementById('password')}",
				passwordTemporal:	"${document.getElementById('passwordTemporal')}"
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				user:json
			});
		})
	}



render() {
        return (
  <div>
    

    <div id="postForm" className="container">

   <Card>
            <CardHeader>Registration Form</CardHeader>
            <CardBody>
            
              <Form inline>

              <Row>
                <FormGroup>
                 <Col> <Label>Name: </Label>{' '} </Col>
                 <Col> <Input type="text" name="name" placeholder="name" id="name"/> </Col>
                </FormGroup>{' '}
            </Row>

            <Row>
                <FormGroup>
                 <Col> <Label>Last Name: </Label>{' '} </Col>
                 <Col> <Input type="text" name="lastName" placeholder="Last name" id="lastName"/> </Col>
                </FormGroup>{' '}
            </Row>

			<Row>
                <FormGroup>
                 <Col> <Label>Address: </Label>{' '} </Col>
                 <Col> <Input type="text" name="address" placeholder="Address" id="address"/> </Col>
                </FormGroup>{' '}
            </Row>

            <Row>
                <FormGroup>
                 <Col> <Label>Username: </Label>{' '} </Col>
                 <Col> <Input type="text" name="users" placeholder="Username" id="users"/> </Col>
                </FormGroup>{' '}
            </Row>

            <Row>
                <FormGroup>
                 <Col> <Label for="exampleEmail">Email: </Label>{' '} </Col>
                 <Col> <Input type="email" name="email" placeholder="mail@domain.com" id="email"/> </Col>
                </FormGroup>{' '}
            </Row>
                
			<Row>
                <FormGroup>
                  <Col> <Label for="examplePassword">Password</Label>{' '} </Col>
                  <Col> <Input type="password" name="password" placeholder="" id="password"/> </Col>
                </FormGroup>{' '}
            </Row>

            <Row>
                <FormGroup>
                  <Col> <Label for="examplePassword">Temporal Password</Label>{' '} </Col>
                  <Col> <Input type="password" name="passwordTemporal" placeholder="" id="passwordTemporal"/> </Col>
                </FormGroup>{' '}
            </Row>

                <Button onclick="saver();">Submit</Button>
              </Form>
            </CardBody>
          </Card>

    </div>

    
  </div>

/*	const newUser = {
		firstName:	        ""
		firstLastName:	    ""
		address:	        ""
		users:	            ""
		email:	            ""
		password:	        ""
		passwordTemporal:	""
	}

	function settingUser(firstName, firstLastName, address, users, email, password, passwordTemporal){
          this.firstName = firstName;
          this.firstLastName = firstLastName;
          this.address = address;
          this.users = users;
          this.email = email;
          this.password = password;
          this.passwordTemporal = passwordTemporal;

	}*/

	/*saveMethod(){

  const uri = 'http://localhost:8090/ecommerce/api/users';

  const response = await fetch(uri, {
  method: 'POST',
  body: JSON.stringify({ example: 'data' }),
})
console.log(await response.json())

}*/

    );
  }
}