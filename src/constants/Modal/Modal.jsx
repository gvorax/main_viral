import React from 'react';
import './modal.scss'

const Modal = ({setModal}) => {
  return (
    <div className='modal' onClick={()=>setModal(false)}>
      <div className="connect" onClick={(e) => e.stopPropagation()}>
        <h3> <span></span> Bog'lanish</h3>
        <h2>Biz siz bilan albatta bog'lanamiz</h2>
        <p> Mijoz nechanchi qavvatda istiqomat qilishidan qat'iy nazar, suvni uyning eshigigacha yetkazib beriladi.</p>
        <form>
          <input type="text" placeholder='Ismingizni kiriting' />
          <input type="text" placeholder='Telefon raqamingizni kiriting' /> 
          <button>yuborish</button>
        </form>
      </div>
    </div>
  )
}

export default Modal