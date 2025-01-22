import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // () => {}
  // function () {}

  // componentDidUpdate (Gọi lại hàm callback mỗi khi state hoặc props thay đổi)
  // componentDidMount (Chỉ gọi 1 lần duy nhất sau khi component được render)
  // componentWillUnmount
  useEffect(() => {
    // Gọi API load danh sách
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((resp) => resp.json())
    //   .then((data) => setTodos(data));
    document.title = "Todo App";

    return () => {
      console.log("Khi component bị xóa khỏi DOM!");
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) {
      toast.warning("Vui lòng nhập nội dung!");
      return;
    }
    setTodos([...todos, { title: todo, id: uuidv4(), completed: false }]);
    toast.success("Thêm mới thành công!");
    setTodo("");
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleCompleted(todo) {
    setTodos([
      ...todos.map((item) =>
        todo.id === item.id ? { ...item, completed: !item.completed } : item
      ),
    ]);
  }

  function handleDelete(todo) {
    Swal.fire({
      title: "Thông báo",
      text: 'Bạn có muốn xóa "' + todo.title + '" không?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#282781",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos([...todos.filter((item) => todo.id !== item.id)]);
        toast.success("Xóa thành công!");
        Swal.fire({
          title: "Đã xóa!",
          text: todo.title + " đã bị xóa.",
          icon: "success",
        });
      }
    });
  }

  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            id="todo"
            value={todo}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
        {todos.length === 0 ? (
          <div>Không có dữ liệu</div>
        ) : (
          <ul>
            {todos.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <input
                      type="checkbox"
                      name="completed"
                      id={"completed-" + item.id}
                      checked={item.completed}
                      onChange={() => handleCompleted(item)}
                    />
                    <span className={item.completed ? "active" : ""}>
                      {item.title}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}

export default TodoApp;
