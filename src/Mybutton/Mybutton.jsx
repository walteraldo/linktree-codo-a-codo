import './Mybutton.css';

export default function Mybutton ( dir ) {
  
  return (
    <div >
      <button className="my-button" >
        <a
          href={ dir.href } 
          target="_blank" 
          rel="noopener noreferrer">
          { dir.text }
        </a>
      </button>   
    </div>
   
  )

}
  






