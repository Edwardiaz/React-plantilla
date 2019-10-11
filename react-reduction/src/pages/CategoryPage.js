import Page from 'components/Page';
import React,{Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class CategoryPage extends Component {

constructor(props) {
    super(props);
    this.state = { category: [] }
  }

  componentDidMount() {
    fetch('http://192.168.100.72:8090/ecommerce/api/categoria')
      .then(response => response.json())
      .then((category) => {
        this.setState({ category: category })
      })
    .catch(console.log)
    // var ajaxRequest = new XMLHttpRequest();
    // ajaxRequest.open("GET", "http://192.168.100.72:8090/ecommerce/api/producto", true);
    // ajaxRequest.send();


//////////////////////////////////////////////////////////////////////////
//ESTO SIRVE PARA ITERAR DATOS SIN NECESIDAD DE UN STATE
    // var arreglo = new Object;
    //
    // fetch('http://192.168.100.72:8090/ecommerce/api/producto')
    //       .then(response => response.json())
    //       .then((products) => {
    //         arreglo = products;
    //       })
    //     .catch(console.log);
    //
    // 	arreglo.map((art, index)=> {console.log(art);  })
///////////////////////////////////////////////////////////////////////////
  }

render(){
  return (

    <Page
      title="Categorias"
      breadcrumbs={[{ name: 'categories', active: true }]}
      className="CategoryPage"
    >
        <Row>
          <Col>
            <Card className="mb-3">
              {/*<CardHeader>{''}</CardHeader>*/}
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ ['hover']: true }}>
                        <thead>
                          <tr>

                            <th>name</th>
                            <th>Description</th>

                          </tr>
                        </thead>
                        <tbody>
                        {this.state.category.map((cat, index)=> {
                          return (

                          <tr key={cat.idCategory}>

                            <td>{cat.nameCategory}</td>
                            <td>{cat.description}</td>

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
export default CategoryPage;
