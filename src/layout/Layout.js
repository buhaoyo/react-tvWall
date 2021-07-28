import './Layout.css'
import UpperLeft from '../content/UpperLeft'
function Layout(){
    return (
      <div class="content">
          <div class="upper">
              <div class="upper-left"><UpperLeft/></div>
              <div class="upper-among"></div>
              <div class="upper-right"></div>
          </div>
          <div class="below">
              <div class="below-left">1233</div>
              <div class="below-among">45345</div>
              <div class="below-right">78</div>
          </div>
      </div>
    // 
    );    
}
export default Layout