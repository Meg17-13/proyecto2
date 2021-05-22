
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/ioS'
function App() {
  ls
  
  return (
    <div >

      <header className="header-youtube">
        
        <nav className='nav-logo'> 
          <HiIcons.HiOutlineMenu className='barra'/>  
          <img className='logo-youtube' 
          src ="/assets/youtube.png"
           alt= "youtube"/>
          <span>
            PE
          </span>
        </nav >
        
        <nav className='nav-search'>
          <div className= 'content-input'>
            <input type= "text" placeholder='Buscar'/>
            <span>
             <HiIcons.HiOutlineSearch/>
            </span>
          </div>
          <MdIcons.MdMic/>
        </nav>
        
        <nav className='nav-icons'>
          <div className= 'content-icons' >
            <span>
              <RiIcons.RiVideoAddFill/>
              </span>
            <span>
            <RiIcons.RiGridFill/>
            </span>
            
            <span>
            <IoIcons.IoNotificationsSharp />
            </span>
            

          </div>

          <img className='avatar' src="/assets/avatar2.jpg" alt= "avatar" />
        
        </nav>

      </header>
    </div>
  );
}

export default App;
