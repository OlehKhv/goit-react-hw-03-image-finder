function Modal({ imgSrc, alt }) {
    return (
        <div className="overlay">
            <div className="modal">
                <img src={imgSrc} alt={alt} />
            </div>
        </div>
    );
}

export default Modal;
