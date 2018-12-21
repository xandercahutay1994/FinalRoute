import React from 'react'

class Logout extends React.PureComponent {
    
    componentDidMount() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <button onClick={this.props.logout}>
                    Click
                </button>
            </div>
        )
    }
}

export default Logout