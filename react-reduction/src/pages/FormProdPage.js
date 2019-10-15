import Page from 'components/Page';
import React, {Component} from 'react';
import detailImg from 'assets/img/miniatura 1.png';
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


// const FormProdPage = () => {
class FormProdPage extends Component{

  constructor(){
    super();
    this.state = {pro: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // busquedaRef = React.createRef();

  // handleSubmit(event){
  handleSubmit = (event) =>{
    event.preventDefault();
    // const data = new FormData(event.target);

    fetch('http://localhost:8090/ecommerce/api/pro',{
      method: 'POST',
      body: JSON.stringify({

        productCode: document.getElementById('productCode').value,
        sku: document.getElementById('sku').value,
        nameProducts: document.getElementById('nameProducts').value,
        description: document.getElementById('description').value

    }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }

    }).then(response =>{
      return response.json()
    }).then(json =>{
      console.log(json)
      this.setState({
        pro:json
      });
    })

  }

  render(){
  return (
    <Page title="New product" breadcrumbs={[{ name: 'Catalogue', active: true }]}>
      <Row>
        <Col className="col-2"></Col>
        <Col xl={8} lg={12} md={12}>
          <Card>
            <CardHeader>New product's information</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="productCode" sm={2}>
                    Code
                  </Label>
                  <Col sm={10}>
                    <Input

                      id="productCode"
                      type="text"
                      name="productCode"
                      placeholder="product's code"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="sku" sm={2}>
                    SKU
                  </Label>
                  <Col sm={10}>
                    <Input

                      id="sku"
                      type="text"
                      name="sku"
                      placeholder="e.g: AA"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="nameProducts" sm={2}>
                    Name
                  </Label>
                  <Col sm={10}>
                    <Input

                      id="nameProducts"
                      type="text"
                      name="nameProducts"
                      placeholder="..."
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={2}>
                    Description
                  </Label>
                  <Col sm={10}>
                    <Input

                      id="description"
                      type="text"
                      name="description"
                      placeholder="..."
                    />
                  </Col>
                </FormGroup>
              {/*  <FormGroup row>
                  <Label for="exampleSelect" sm={2}>
                    Select
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="select" />
                  </Col>
                </FormGroup> */}
                {/* <FormGroup row>
                  <Label for="exampleSelectMulti" sm={2}>
                    Select Multiple
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="selectMulti" multiple />
                  </Col>
                </FormGroup> * /}
                <FormGroup row>
                  <Label for="description" sm={2}>
                    Description
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    File
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <Label for="checkbox2" sm={2}>
                    Radio
                  </Label>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" /> Option one is this
                        and that—be sure to include why it's great
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" /> Option two can be
                        something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio2" disabled /> Option
                        three is disabled
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="checkbox2" sm={2}>
                    Checkbox
                  </Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Check me out
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup> */}
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
}
}

export default FormProdPage;
