import React,{Component} from 'react';
import Layout from './hos/Layout/layout';


class App extends Component {
  render() {
    return (
      <Layout>
        <div style={{ width: '400px', border:'1px solid #ccc'}}>
          <h1> layout works </h1>
        </div>
      </Layout>
    );
  }
}

export default App;
