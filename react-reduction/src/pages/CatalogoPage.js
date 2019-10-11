import Page from 'components/Page';
import React,{Component} from 'react';
import { Card,
CardBody,
CardHeader,
Col,
Row,
Table,
Button,
Modal,
ModalBody,
ModalFooter,
ModalHeader, } from 'reactstrap';
// import {
//
//   Button,
//
//   CardSubtitle,
//
//   CardText,
// } from 'reactstrap';
const tableTypes = ['', 'bordered', 'striped', 'hover'];

class CatalogoPage extends Component {

constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentDidMount() {
    fetch('http://192.168.100.72:8090/ecommerce/api/producto')
      .then(response => response.json())
      .then((products) => {
        this.setState({ products: products })
      })
    .catch(console.log)
    // var ajaxRequest = new XMLHttpRequest();
    // ajaxRequest.open("GET", "http://192.168.100.72:8090/ecommerce/api/producto", true);
    // ajaxRequest.send();
  }

  // consultarApi = () =>{
  //   fetch('http://192.168.100.72:8090/ecommerce/api/producto')
  //   .then(response => response.json())
  //   .then(products => console.log(products))

    // var ajaxRequest = new XMLHttpRequest();
    // ajaxRequest.open("GET", "http://192.168.100.72:8090/ecommerce/api/producto", true);
    // ajaxRequest.send();

  // }

  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

render(){
  return (

    <Page
      title="Catalogo"
      breadcrumbs={[{ name: 'catalogos', active: true }]}
      className="CatalogoPage"
    >
    <Row>
    <Col className="col-10">
    </Col>
    <Col className="col-2">
  {/*  <Button color="dark" size="sm">
      Add new product
    </Button>*/}

    <Card>
      <CardBody>
        <Button color="danger" onClick={this.toggle('nested_parent')}>
          Add new product
        </Button>
        <Modal
          isOpen={this.state.modal_nested_parent}
          toggle={this.toggle('nested_parent')}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle('nested_parent')}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            <br />
            <Button color="success" onClick={this.toggle('nested')}>
              Show Nested Model
            </Button>
            <Modal
              isOpen={this.state.modal_nested}
              toggle={this.toggle('nested')}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle('nested')}>
                  Done
                </Button>{' '}
                <Button
                  color="secondary"
                  onClick={this.toggle('nested_parent')}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.toggle('nested_parent')}>
              Do Something
            </Button>{' '}
            <Button
              color="secondary"
              onClick={this.toggle('nested_parent')}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </CardBody>
    </Card>

    </Col>
    </Row>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>{'Catalogo de productos'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ ['hover']: true }}>
                        <thead>
                          <tr>
                            <th>Code</th>
                            <th>Sku</th>
                            <th>Name</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map((art, index)=> {
                          return (

                          <tr key={index}>

                            <td>{art.productCode}</td>
                            <td>{art.sku}</td>
                            <td>{art.nameProducts}</td>
                            <td>{art.description}</td>
                          </tr>
                        );
                      })}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </Page>
  );
  }
}
export default CatalogoPage;
