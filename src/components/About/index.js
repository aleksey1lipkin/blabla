import React from 'react';
import axios from 'axios';
import Report from '../Report';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5,
      id: 0,
      name: '',
      specialty: '',
    }
  }
  async getUser(id) {
    const user = await axios.get('https://jsonplaceholder.typicode.com/users', {
    }).then(response => response.data.filter(user => user.id === id))
    .then(user => user.map(userItem => {
      return this.setState({
        id: userItem.id,
        name: userItem.name,
        specialty: userItem.website,
      })
    }));
    return user
  }
  getRandomInt(min = 1, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  componentDidMount() {
    this.setState({ counter: this.state.counter - 1 })
    this.getUser(this.getRandomInt());
  }
  render() {
    const { id, name, specialty, counter } = this.state;
      console.log(`render user with id - ${id}`);
      return (
      <div className="App">
        <p style={{marginBottom: 40}}>Отчёт</p>
        <Report
          fullName={name}
          specialty={specialty}
          resultId={id}
          date='12.01.1992'
          total={counter}
          correct='30'
          wrong='5'
          missed='5'
        />
      </div>
    );
  }
}

export default About;