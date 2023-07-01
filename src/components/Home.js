// HOME
// Home is a subcomponent. It is the landing page.
// It is imported into App.js and rendered in the main area of the app.

// IMPORTS
// React
import React from 'react';
import Card from 'react-bootstrap/Card';
// Local styles modify original bootstrap styles
import './styles/Card.css';

// COMPONENT: Home
// PURPOSE:  Renders the home page.
//           - Displays a styled bootstrap card:
//             - Image             
//             - Page title       
//             - Page description 
export function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
      <Card>
        <Card.Body>
          <Card.Title>Welcome to <b>Sketchy Savings</b>:<br/>An unreliable bank for your funds</Card.Title>
          <br/>
          <Card.Text style={{textAlign: 'left'}}>
Thank you for visiting Sketchy Savings! Unlike other banks around the world, we provide zero security for your hard-earned cash.<br/>
<br/>
On Sketchy Savings, your money may not be secure, but we offer the following perks:
<ul>
  <li>You can <i>deposit</i> your money.</li>
  <li>You can <i>withdraw</i> your money.</li>
  <li>You can access your <i>data</i>.</li>
</ul>
<br/>
Create an account today with <span className="belleza">Sketchy Savings</span>. Your money might not be safe, but you may enjoy living life on the edge for once. 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Home;