import Swal from "sweetalert2";
export const Toast = (message) => {
    Swal.mixin({
        title: message,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
}


export const alertSuccess = (message) => Swal.fire({
    title: message,
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
    },
    hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
    }
});
