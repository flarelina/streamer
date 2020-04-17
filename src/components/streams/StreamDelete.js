import React   from 'react'
import Modal   from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id)
  }

  renderActions = () => (
    <>
      <button className="ui button negative" onClick={this.onDeleteClick}>Delete</button>
      <button className="ui button" onClick={() => history.push("/")}>Cancel</button>
    </>
  );

  renderContent = () => {
    if(!this.props.stream) {
      return `Are you sure you want to delete this stream?`
    }

    return `Are you sure you want to delete this stream ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete)