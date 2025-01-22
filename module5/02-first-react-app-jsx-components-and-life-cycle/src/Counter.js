import React from "react";
import Lamp from "./Lamp";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // Object literals
    this.state = {
      count: 0,
      name: "CodeGym",
      age: 7,
      users: [],
      turnOn: true,
    };

    this.handleChange = this.handleChange.bind(this);

    console.log("Giai đoạn khởi tạo (Initialization)");
    // document.title = `Hello, ${this.state.name}!, age is ${this.state.age}`;
  }

  UNSAFE_componentWillMount() {
    console.log(
      "Giai đoạn mounting (Được gọi ngay sau giai đoạn khởi tạo và trước hàm render()"
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  increment = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    console.log("Hàm render() được gọi");
    return (
      <>
        <div>Count: {this.state.count}</div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            placeholder="Enter your name..."
          />
        </div>
        <h3>
          Hello, {this.state.name}!, age is {this.state.age}
        </h3>
        <div>
          <button onClick={this.increment}>Increment</button>
        </div>
        {this.state.turnOn ? <Lamp /> : null}
        <button onClick={() => this.setState({ turnOn: !this.state.turnOn })}>
          Bật/tắt đèn
        </button>
        {this.state.users.length === 0 ? (
          <div>Không có dữ liệu</div>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  }

  componentDidMount() {
    document.title = `Hello, ${this.state.name}!, age is ${this.state.age}`;
    console.log(
      "Hàm componentDidMount() được gọi ở giai đoạn Mounting ngay sau render()"
    );
    // Viết logic gọi API ở đây
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  UNSAFE_componentWillReceiveProps() {}

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("Khi state hoặc props cập nhật thì gọi hàm này!");
    document.title = `Hello, ${this.state.name}!, age is ${this.state.age}`;
  }
}

export default Counter;
