import React from 'react';
import axios from 'axios';
import './App.scss';
import CodeField from './components/CodeField';

type IProps = {};

interface IState {
  code: string;
  output: string;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      code: '',
      output: '',
    };
  }
  updateCode(newCode: string) {
    this.setState({
      code: newCode,
    });
  }
  compile() {
    axios
      .post('http://localhost:8080/execute', this.state.code)
      .then(response => this.setState({output: response.data}))
      .catch(error => console.error(error.data));
  }
  render() {
    return (
      <div className="App">
        <h1 className="h1 center">Paskal compiler</h1>
        <p>
          Fork{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/MatiasLyyra/paskal">
            me
          </a>{' '}
          on github
        </p>
        <h2 className="h2 mb-0">Editor:</h2>
        <CodeField
          code={this.state.code}
          onCodeUpdate={this.updateCode.bind(this)}
          indentation={2}
        />
        <button onClick={this.compile.bind(this)} className="terminal-font">
          Run
        </button>
        <h2 className="h2 mb-0">Stdout:</h2>
        <code className="terminal-font">{this.state.output}</code>
      </div>
    );
  }
}

export default App;
