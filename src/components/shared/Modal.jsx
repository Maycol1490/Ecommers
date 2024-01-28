import '../../pages/styles/modal.css'

const Modal = ({text1,text2,setErrorModalOpen}) => {
    
    const handleClose = ()=>{
        if(setErrorModalOpen){
            setErrorModalOpen(false)
        }
    }
  return (
    <div className='container-modal'>
        <h2 className='modal-title'>{text1}</h2>
        <p className='modal-body'>{text2}</p>
        <button className='modal-btn' onClick={handleClose}>close</button>
    </div>
  );
};

export default Modal