import React from 'react'
import {
  BrowserRouter,
  Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from '../components/Layouts/Header'
import Routes from '../components/Routes/Routes'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { userSelector } from './redux/selectors'
import { createBrowserHistory } from 'history'
import privateRoutes from '../components/Routes/privateRoutes';
import publicRoutes from '../components/Routes/publicRoutes';

const history = createBrowserHistory()
class Index extends React.PureComponent {

  constructor() {
    super()
    this.state = {
      islogin: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    
    if (props.islogin) {
      history.push('/seller')
      // privateRoutes.map((route, i) => (
      //   <Route key={i} exact {...route} />
      // ))

    }

    return null
  }

  handleLogout = () => {
    this.setState({
      islogin: false
    })
  }

  render() {
    const {
      islogin
    } = this.props


    return(
      <Router history={history}>
        <div className='container-fluid'>
          <Header islogin={islogin} logout={this.handleLogout}/>
          <Switch>
            <Routes islogin={islogin}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const enhance = compose(
  connect(userSelector)
)

export default enhance(Index)