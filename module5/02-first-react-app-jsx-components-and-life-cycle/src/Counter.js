import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      address: {
        street: "Ham Nghi",
        city: "Ha Noi",
      },
    };

    this.increment = this.increment.bind(this);
  }

  increment(value) {
    console.log("Increment", this);
    // this.setState((preState) => {
    //   return {
    //     count: preState.count + 1,
    //   };
    // });
    // this.setState((preState) => {
    //   return {
    //     count: preState.count + 1,
    //   };
    // });
    // this.setState((preState) => {
    //   return {
    //     count: preState.count + 1,
    //   };
    // });
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("Clicked");
  };

  render() {
    return (
      <>
        <h1>Counter Component</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero laborum ipsa officiis exercitationem esse aut totam numquam
          pariatur blanditiis, quos assumenda soluta corrupti, natus deserunt
          facilis libero maxime ea.
        </p>
        <p>
          <a href="#" onClick={this.handleClick}>
            Go to TOP!
          </a>
        </p>
        {this.state.count}
        <button onClick={() => this.increment(1)}>Increment</button>
      </>
    );
  }
}

export default Counter;
