import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Button,
  Alert,
  HelpBlock
} from 'react-bootstrap'

class NewCat extends Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: '',
      city: ''
    }
  }
}
handleChange(event){
  const formState = Object.assign({}, this.state.form)
  formState[event.target.name] = event.target.value
  this.setState({form: formState})
}
handleSubmit(){
  this.props.onSubmit(this.state.form)
}
errorsFor(attribute){
  var errorString = ""
  if(this.props.errors){
    const errors = this.props.errors.filter(error => error.param === attribute )
    if(errors){
      errorString = errors.map(error => error.msg ).join(", ")
    }
  }
  return errorString === "" ? null : errorString
}


  render() {
  return (
<div>
    <form className="inputForm">

    <Row>

      <Col xs={6}>
        {this.props.errors &&
          <Alert bsStyle="danger">
            Please check the form and try again.
          </Alert>
        }
      </Col>
    </Row>

      <Row>
        <Col xs={6}>
          <FormGroup id="name-form-group" className="inputClass" validationState={this.errorsFor('name') && 'error'}>
          <ControlLabel id="name">Name</ControlLabel>
            <FormControl
              type="text"
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
            {this.errorsFor('name') &&
            <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>}
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup id="age-form-group" className="inputClass" validationState={this.errorsFor('age') && 'error'}>
            <ControlLabel id="age">Age</ControlLabel>
            <FormControl
              type="number"
              name="age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
            />
            {this.errorsFor('age') &&
            <HelpBlock id="age-help-block">{this.errorsFor('age')}</HelpBlock>}
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup id="enjoys-form-group" className="inputClass" validationState={this.errorsFor('enjoys') && 'error'}>
            <ControlLabel id="enjoys">Enjoys</ControlLabel>
            <FormControl
             componentClass='textarea'
              name="enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />
            {this.errorsFor('enjoys') &&
            <HelpBlock id="enjoys-help-block">{this.errorsFor('enjoys')}</HelpBlock>}
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup id="city-form-group" className="inputClass" validationState={this.errorsFor('city') && 'error'}>
            <ControlLabel id="city">City</ControlLabel>
            <FormControl
              type="text"
              name="city"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.city}
            />
            {this.errorsFor('city') &&
            <HelpBlock id="city-help-block">{this.errorsFor('city')}</HelpBlock>}
          </FormGroup>
        </Col>
      </Row>
</form>
  <Row>
  <div className="buttonPlace">
      <Col xs={6}>
        <Button
          id="submit"
          className="btn btn-default"
          onClick={this.handleSubmit.bind(this)}
          >Create Cat Profile
      </Button>
       <Button id="view"
      className="btn btn-default"> <a href="http://localhost:3001/cats">
        View Cat Profile</a>
    </Button>
  </Col>
  </div>
  </Row>





</div>
  );
  }
}

export default NewCat
