import React,{Component} from 'react';
import Layout from './hos/Layout/layout';
import Quiz from './containers/Quiz/Quiz'


class App extends Component {
  render() {
    return (
      <Layout>
         <Quiz/>
      </Layout>
    );
  }
}

export default App;
