import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose' 
import { userSelector } from './redux/selectors'
import {
  LoginUser
} from './redux/actions'

class Login extends React.PureComponent {
  constructor() {
    super()
    this.state ={
      username: ''
    }
  }

  componentWillUpdate() {
    console.log(this.props)
  }

  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    if (this.state.username === 'xander') {
      this.props.dispatch(LoginUser())

      this.props.history.push('/seller')
    }
  }

  render() {
    const{
      username
    } = this.state

    return(
      <div className='container form-group'>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Username</label>
          </div>
          <div>
            <input 
              name='username'
              value={username}
              onChange={this.handleOnChange}
              className='form-control'
            />
          </div>
          <div>
            <button className='btn btn-primary'>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const enhance = compose(
  connect(userSelector)
)

export default enhance(Login)