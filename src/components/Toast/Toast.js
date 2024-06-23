//  Imports Related To React Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const settings = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce
};

export const showSuccessToast = (message) => {
    toast.success(message, settings);
};

export const showFailureToast = (message) => {
    toast.error(message, settings);
};

const Toast = () => {
    return (
        <ToastContainer
            newestOnTop={true}
            rtl={false}
            pauseOnFocusLoss
        />
    );
}

export default Toast;
