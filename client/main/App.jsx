import React from 'react';
import Axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      userCountry: ''
    }
    this.getCountry = this.getCountry.bind(this);
  }

  componentDidMount() {
    this.getCountry();
  }

  getCountry () {
    Axios.post('/', { userIP: '/8.8.8.8' })
      .then((res) => {
        console.log('Axios post !!! response', res.data.data.country_name);
        this.setState({ userCountry: res.data.data.country_name });
        console.log('usercountry state', this.state.userCountry);
      })
      .catch(error => {
        console.error('Axios post error', error)
      });
  }


  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h3>{ this.state.userCountry }</h3>
      </div>
    )
  }
}

export default App;