import React from 'react';
import List from '../components/devlist/List';
import TextInput from '../components/form/TextInput';

const ManageResourcesPage = () => {
  return (
    <div>
      <h1>Manage Resources</h1>
        <TextInput onSubmit={() => this.addToList(person)}/>
        <List/>
    </div>
  );
};

export default ManageResourcesPage;
