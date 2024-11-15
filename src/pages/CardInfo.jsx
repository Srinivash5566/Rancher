// import './CardInfo.css'
import { useNavigate, useParams } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";


const CardInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <header>
        <GoArrowLeft id='GoArrowLeft' onClick={() => { navigate('/') }} />
        <h1>
          Rancher
        </h1>
      </header>
      <main>
        <h1>{id}</h1>
      </main>
    </>
  )
}

export default CardInfo
