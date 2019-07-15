import React from 'react';
import { Card } from 'react-bootstrap';

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
      {props.image ? (
        <div className='imageBox'>
          <Card.Img variant='top' src={props.image} className='images' />
        </div>
      ) : null}

      <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>
          <span style={{ paddingBottom: '0px', fontSize: '14px' }}>
            {props.subtitle}
          </span>
        </Card.Subtitle>
        <Card.Text style={{ paddingBottom: '0px', fontSize: '14px' }}>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <Card.Link href={props.githubUrl} target='_blank'>
          {props.githubUrl ? (
            <>
              <i className='fab fa-github fa-2x' /> <div>Client Repos</div>
            </>
          ) : null}
        </Card.Link>
        <Card.Link href={props.serverUrl} target='_blank'>
          {props.serverUrl ? (
            <>
              <i className='fas fa-server fa-2x' /> <div>Sever Repos</div>
            </>
          ) : null}
        </Card.Link>
        <Card.Link href={props.projectUrl} target='_blank'>
          {props.projectUrl ? (
            <>
              <i className='far fa-eye fa-2x' /> <div>Website</div>
            </>
          ) : null}
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
