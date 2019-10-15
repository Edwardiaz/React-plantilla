import Page from 'components/Page';
import UsersTable from 'components/Card/UsersTable';
import PostUsers from 'components/Card/PostUsers';

import React from 'react';

const UsersPage = () => {
  return (
   <div>
   <Page
      title="Users"
      breadcrumbs={[{ name: 'Users', active: true }]}
      className="UsersPage"
    >
    <PostUsers></PostUsers>
    <br/>
    <UsersTable></UsersTable>
      
    </Page>


</div>
    
  );
};

export default UsersPage;
