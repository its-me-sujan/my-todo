const TodoDetail = (params) => {
    console.log(params.id)
    return (
    <div>
      <p>Todo {params.id}</p>
    </div>
  );
};
export default TodoDetail;
