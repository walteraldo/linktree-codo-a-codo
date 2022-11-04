import logo from '../logo.svg';
import './Link.css';
import '../Mybutton/Mybutton.css'
import direcciones from '../direcciones.json';
import Mybuttom from '../Mybutton/Mybutton';

export default function Link () {

  return (
    <div className="Link">
      <header className="Link-header">
        <div className='Link-header-div'>
          <img src={logo} className="Link-logo" alt="logo" />
          <h3 className='Link-titulo'>Codo a Codo | Comisión #22809</h3>
        </div>
        <div className='Link-header-dir'>
          { direcciones.map( dir => (
            <Mybuttom key={ dir.id } href={ dir.href } text={ dir.text } />
            ))
          }
        </div>
       
      </header>
    </div>
  )

}
