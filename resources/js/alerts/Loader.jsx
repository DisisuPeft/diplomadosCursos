import '../estilos/loader.css'
import Modal from "@/Components/Modal.jsx";
export default function Loader({visible}) {
    return (
        <Modal show={visible} maxWidth="sm">
            <div className="flex justify-center p-[20px]">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Modal>
    );
}
