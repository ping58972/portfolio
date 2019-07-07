import React from 'react';
import { Card } from 'react-bootstrap';
// import { Card, Icon } from 'semantic-ui-react';

// import 'semantic-ui/dist/semantic.min.css';
// import 'semantic-ui-css/semantic.min.css';
// backgroundColor: '#3e3947'
// import React from 'react';
// // import { Button } from 'semantic-ui-react';
const ProjectCard = props => {
  return (
    <Card
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: props.bgColor,
        fontFamily: '"Ubuntu", sans-serif'
      }}
    >
      <Card.Header>
        <Card.Title style={{ color: 'white' }}>{props.title}</Card.Title>
      </Card.Header>
      <div className='imageBox'>
        <Card.Img variant='top' src={props.image} className='images' />
      </div>
      {/* className='images'  */}
      <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>
          <span>{props.subtitle}</span>
        </Card.Subtitle>
        <Card.Text style={{ paddingBottom: '0px' }}>{props.text}</Card.Text>
        {/* <p>props.text</p> */}
      </Card.Body>
      <Card.Footer>
        <Card.Link href='https://ping58972.com'>
          <i class='fab fa-github fa-2x' />
        </Card.Link>
        <Card.Link href='#'>
          <i class='fab fa-linkedin-in fa-2x' />
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
