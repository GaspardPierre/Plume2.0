import { useNavigate } from 'react-router-dom'

export default function ReadMore( { latestWork}) {
  let navigate = useNavigate();

  const handlePoemClick = () => {
 
    if (latestWork && latestWork.id) {
      navigate(`/poem/${latestWork.id}`);
    } else {
      console.error("Erreur : latestWork ou latestWork.id est undefined");
    }
  };
  
  return (
    <div
    className=' btn font-read font-custom line mt-3  py-1 px-2 rounded shadow-lg w-80 border-custom pe-auto'
    onClick={handlePoemClick}
    >READ MORE{`>>`}  </div>
  )
}
