import ReactDom from "react-dom";

function Modal({children}){
    return ReactDom.createPortal(
        <div>
            <h2>Inside modal component</h2>
            {children}
        </div>,
        document.getElementById('portal-root')
    )
}

export default Modal