import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = [''];

const RolePage = () => {
  return (
    <Page
      title="Roles"
      breadcrumbs={[{ name: 'Roles', active: true }]}
    >

 {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>Existing Roles</CardHeader>
              <CardBody>
                <Row>
                  <Col>

                    <Card body>
                      <Table responsive {...{ ['hover']: true }}>
                        
                        
                        <thead>
                          <tr rowspan="4">
                          <th></th>
                          <th className="text-center">Roles</th>
                          <th></th>
                          </tr>

                          <tr>
                            <th>#</th>
                            <th>Role</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Admin</td>
                            <td>Active</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Manager</td>
                            <td>Inactive</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>User</td>
                            <td>Active</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                  
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}

    </Page>
  );
};

export default RolePage;
