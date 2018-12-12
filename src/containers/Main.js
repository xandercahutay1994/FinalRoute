import React from 'react'
import {
  BrowserRouter,
  Switch
} from 'react-router-dom'
import Header from '../components/Layouts/Header'
import Routes from '../components/Routes/Routes'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { userSelector } from './redux/selectors'

class Index extends React.PureComponent {

  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }

  render() {
    const {
      isLogin
    } = this.props

    return(
      <BrowserRouter>
        <div className='container-fluid'>
          <Header isLogin={isLogin}/>
          <Switch>
            <Routes isLogin={isLogin}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const enhance = compose(
  connect(userSelector)
)

export default enhance(Index)