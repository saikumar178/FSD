import Welcome from './Welcome';
import Sample from './Sample';

function App(){
  return(
    <>
      <h1>Welcome to React..</h1>
      <Welcome name="john"/>
      <Welcome name="william"/>
      <Sample/>
    </>
  );
}

export default App;