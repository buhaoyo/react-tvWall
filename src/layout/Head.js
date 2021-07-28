import './Head.css';
const d = new Date()
const date = d.getFullYear()+"."+(d.getMonth()+1)+"."+d.getDate()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="date">
          {date}
        </div>
        <div className="title">
          <div className="titileConent">
          </div>
          <div className="font">
            万企帮可视化大数据态势感知管理平台
          </div>
        </div>
        <div className="close"></div>
      </header> 
    </div>
  );
}

export default App;
