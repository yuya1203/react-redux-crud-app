import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' // 画面遷移などのリンクで使用する
// import { postEvent } from '../actions';

class EventNew extends Component {
  render() {

    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventNew)

