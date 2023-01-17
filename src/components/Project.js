// import react
import React from 'react';
// import react boostraps
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project(props) {
    return (
        <Row xs={1} md={2} className="g-4">
      {props.projects.map((project) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
              <p>{project.technologies}</p>
              <hr />
                <p>{project.description}</p>
              </Card.Text>
              <Card.Link href={project.github}>Github</Card.Link>
        <Card.Link href={project.deployed}>Live</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    );
}

// export Project
export default Project;