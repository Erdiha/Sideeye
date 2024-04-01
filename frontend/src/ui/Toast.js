import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return <ToastContainer />;
};

export const showToast = (message, settings) => {
  toast(message, settings);
};

export default Toast;
