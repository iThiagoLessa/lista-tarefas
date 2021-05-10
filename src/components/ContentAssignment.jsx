import React, { Component } from "react";

class ContentAssignment extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="content">
        <div className="actions-aplication">
          <input type="text" placeholder="adicione uma tarefa" />
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default ContentAssignment;
