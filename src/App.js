import logo from './logo.svg';
import './App.css';

function App() {
  const info = [
    {name : "Aminul", dept : 'CSE'},
    {name : "Nisu", dept : 'IT'},
    {name : "Raktim", dept : 'EEE'},
    {name : "Hasib", dept : 'Automobile'} 
  ];
  return (
    <div className="App">
      {
        info.map(detail => <Student name={detail.name} dept={detail.dept}></Student>)
      }
    </div>
  );
}

function Student(props){
  return(
    <div className="product">
      <h3>Name : {props.name}</h3>
      <p>Price : {props.dept}</p>
    </div>
  )
}

export default App;
