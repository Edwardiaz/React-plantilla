import Page from 'components/Page';
import React,{Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

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

render(){
  return (

    <Page
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>{'Nombre tabla'}</CardHeader>
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

                          <tr key={art.idProducts}>
                            <th scope="row">1</th>
                            <td>{art.productCode}</td>
                            <td>{art.sku}</td>
                            <td>{art.nameProducts}</td>
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
