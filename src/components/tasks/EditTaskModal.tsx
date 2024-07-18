import { useLocation } from "react-router-dom";

const EditTaskModal = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editTaskId = queryParams.get('editTask');


  return <div>EditTaskModal</div>;
};

export default EditTaskModal;
