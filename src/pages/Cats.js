import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Button
} from 'react-bootstrap'

function handleDelete(id){
    this.prop.deletecat(id)
      .then(()=> {
        this.context.router.push('/');
      });

}

class Cats extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup id ="catbox">
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroupItem

                  key={index}
                  header={
                    <h4>
                      <span className='cat-name'>
                        {cat.name}
                      </span>
                       <small className='cat-age'> {cat.age} years old </small>
                       <small className='cat-city'>{cat.city} </small>
                    </h4>
                  }>
                  <span className='cat-enjoys'>
                    {cat.enjoys}
                  </span>
         <button onClick={this.props.handleDelete.bind(this, cat.id)}> Delete </button>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
        <Row>
          <Col xs={12}>
          <Button id="view"
         className="btn btn-default"> <a href="http://localhost:3001">
           Add A Cat</a>
       </Button>
        </Col>
        </Row>
      </Row>

    );
  }
}
export default Cats
