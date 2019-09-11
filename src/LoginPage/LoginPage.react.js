import React from "react";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container
} from "semantic-ui-react";
import { confirmAlert } from "react-confirm-alert";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        adminName: "",
        adminPassword: ""
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


    axios
      .post(`http://localhost:6060/adminLogin`, this.state.login)
      .then(res => {
        this.setState({ success: res.data });
        if (this.state.success) {//On successful login redirected to admin dashboard
          localStorage.setItem('adminName', this.state.login.adminName)
          this.props.history.push("/adminDashboard");
        } else {
          confirmAlert({//If entered wrong credentials
                    title: "Login Failed",
                    message: "Invalid Login Credentials",
                    buttons: [
                        {
                            label: "Okay",
                        }
                    ]
                })
        }
      });

    
    console.log(this.state);
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
                    required
                    fluid
                    icon="user secret"
                    iconPosition="left"
                    placeholder="Admin Username"
                    name="adminName"
                    value={this.state.login.adminName}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    required
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    name="adminPassword"
                    type="password"
                    value={this.state.login.adminPassword}
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