import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchStream } from 'actions'

const StreamEdit = ({ match, fetchStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id)
  }, [match.params.id, fetchStream])

  if (!stream) {
    return <div>Loading...</div>
  }

  return <div>{stream.title}</div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

const mapDispatchToProps = {
  fetchStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit)
