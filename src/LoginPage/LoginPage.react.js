import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container
} from "semantic-ui-react";
import HomeNav from "../HeaderBar/HeaderBar.react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        userName: "",
        password: ""
      },
      
      success: 0
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState(prevState => ({
      login: { ...prevState.login, [name]: value }
    }));
  }
  onSubmit(e) {
    e.preventDefault();

    
      localStorage.setItem('userName', this.state.login.userName)

    axios
      .post(`http://localhost:4040/getCustomerByuserName`, this.state.login)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        this.setState({ success: res.data });
        if (this.state.success) {
          this.props.history.push("/adminDashboard");
        } else {
          console.log(" Wrong Credentials ");
        }
      });

    
    console.log(this.state.success);
  }
  render() {

    return (
      <Container>
          <Header>Admin Login</Header>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center"></Header>
              <Segment>
                <Form size="large" onSubmit={this.onSubmit}>
                  <Form.Input
                    fluid
                    icon="user secret"
                    iconPosition="left"
                    placeholder="Admin Username"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Button color="blue" fluid size="large">
                    Login
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        
        </Container>
    );
  }
}

export default LoginPage;