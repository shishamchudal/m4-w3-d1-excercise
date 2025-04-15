import React from "react";

export default class MyComponent extends React.Component {
  render() {
    return ( // Corrected: Removed the premature return
      <div>
        <input
          onChange={(event) => {
            this.setState({ input: event.target.value });
          }}
          type="text"
        />
      </div>
    );
  }
}