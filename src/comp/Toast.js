export default function ErrorToast(props){
    return (
        <div className="toastContainer" >
            <span className="toastIcon">X</span>
            <span className="message">{props.message}</span>
        </div>
    )
}