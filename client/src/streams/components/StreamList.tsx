import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAll } from "../action";
import { RootState } from "../../store/rootReducer";
import { selectAllStreams } from "../selectors";
import { State as StreamState } from "../reducer";
import { getUserID, getIsSignedIn } from "../../auth/selectors";

interface StateProps {
  readonly isSignedIn: boolean;
  readonly streams: StreamState;
  readonly userID: string;
}

interface DispatchProps {
  readonly getAll: typeof getAll;
}

interface Props extends StateProps, DispatchProps {}

class StreamList extends React.PureComponent<Props> {
  public componentDidMount() {
    this.props.getAll();
  }

  public render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h2>Streams</h2>
        <div className="ui segment">
          <div className="ui relaxed divided list">
            {this.renderStreamList()}
          </div>
        </div>
        {this.renderCreate()}
      </div>
    );
  }

  private renderAdminButtons = (stream: {
    id: string;
    description: string;
    title: string;
    userID: string;
  }) => {
    const { userID } = this.props;
    if (stream.userID === userID) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  private renderCreate = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/create" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  private renderStreamList = () => {
    const { streams } = this.props;
    return streams
      .valueSeq()
      .reverse()
      .map(stream => {
        return (
          <div
            className="item"
            key={stream.id}
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingRight: 5,
              paddingLeft: 5
            }}
          >
            {this.renderAdminButtons(stream)}
            <i className="large middle aligned icon video" />
            <div className="content">
              <Link to={`./streams/${stream.id}`} className="header">
                {stream.title}
              </Link>
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      });
  };
}

const mapStateToProps = (state: RootState) => {
  return {
    isSignedIn: getIsSignedIn(state),
    streams: selectAllStreams(state),
    userID: getUserID(state)
  };
};

const mapDispatchToProps: DispatchProps = {
  getAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(StreamList);
