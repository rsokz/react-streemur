import React from "react";
import Modal from "../../common/Modal";
import history from "../../history";
import { get, destroy } from "../action";
import { RootState } from "../../store/rootReducer";
import { connect } from "react-redux";
import { selectByID } from "../selectors";
import { Link } from "react-router-dom";

interface StateProps {
  readonly stream: {
    id: string;
    userID: string;
    description: string;
    title: string;
  };
}

interface DispatchProps {
  readonly get: typeof get;
  readonly destroy: typeof destroy;
}

export interface Props extends StateProps, DispatchProps {}

class StreamDelete extends React.PureComponent<Props> {
  public componentDidMount() {
    const {
      get,
      // @ts-ignore
      match: {
        params: { id }
      }
    } = this.props;

    get(id);
  }

  public render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }

  private renderContent = () => {
    const { stream } = this.props;
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete with title: ${stream.title}`;
    }
  };

  private renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={this.onDelete}>
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  private onDelete = () => {
    // @ts-ignore
    this.props.destroy(this.props.match.params.id);
  };
}

const mapStateToProps = (state: RootState, props: Props) => {
  return {
    // @ts-ignore
    stream: selectByID(state, parseInt(props.match.params.id))
  };
};

const mapDispatchToProps: DispatchProps = {
  get,
  destroy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(StreamDelete);
