import Page from 'components/Page';
import React,{Component} from 'react';
import bn from 'utils/bemnames';
import { Card,
CardBody,
CardHeader,
Col,
Row,
Table,
Button,
Modal,
NavItem,
NavLink as BSNavLink,
ModalBody,
ModalFooter,
ModalHeader, } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdTerain,
  MdWidgets,
} from 'react-icons/md';

const tableTypes = ['', 'bordered', 'striped', 'hover'];
// const newPro = [
//   { to: '/catalogo/add', exact: true},
// ];

class CatalogoPage extends Component {
constructor(props) {
    super(props);
    this.state = { products: [] }
    }

  componentWillMount() {
    fetch('http://localhost:8090/ecommerce/api/producto')
      .then(response => response.json())
      .then((products) => {
        this.setState({ products: products })
      })
    .catch(console.log)
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
  <Button color="danger"
          id={`${"Add new product"}`}
          className="text-uppercase"
          tag={NavLink}
          to={'/catalogo/add'}
        >
          <span className="">{"Add new product"}</span>
  </Button>

  {/*  <Card>
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
            Modal's content.
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
    </Card> */}

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
                      <Table {...{ ['hover']: true } }>
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
