import React from 'react';
import ShowAgents from '../ShowAgents/ShowAgents.react';
import { Tab, Grid, Header } from 'semantic-ui-react';
import AddAgent from '../AddAgent/AddAgent.react';


const panes = [
    {
      menuItem: 'Show All Agents',
      render: () => <Tab.Pane attached={false}><ShowAgents/></Tab.Pane>,//Tab for Showing all agents in the database
    },
    {
      menuItem: 'Add a new Agent',
      render: () => <Tab.Pane attached={false}><AddAgent/></Tab.Pane>,//Tab for Adding an agent to the database
    },
    {
      menuItem: 'Log Out',
      render:()=> {
        localStorage.removeItem('adminName')
        window.location = "/"
        return(<Grid centered><Header>Logging out</Header></Grid>)
      }
    }
  ]

  
const AdminDashboardContainer = () => {
  if(localStorage.getItem("adminName")==="admin")
    {
      return (//Container for the admin dashboard containg two tabs
      <div>
        
        <Grid centered>
                <Grid.Column computer={12} mobile={15}>
                    
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    
                </Grid.Column>
        </Grid>
      </div>
        
            
        
    );
  }
  else{
    return(
    <div>
      <h4>You are not authorised to access this page.</h4>
      <a href="/">Go Back to login</a>
      </div>
    )
  }

}

export default AdminDashboardContainer;