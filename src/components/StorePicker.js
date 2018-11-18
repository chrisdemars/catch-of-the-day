import React from 'react';

class StorePicker extends React.Component {
  goToStore(e) {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from the input
    // 3. Change the page  to /store/whatever-they-entered
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Find store</button>
      </form>
    );
  }
}

export default StorePicker;
