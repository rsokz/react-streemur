import React from "react";
import { connect } from "react-redux";
import { get } from "../action";
import { RootState } from "../../store/rootReducer";
import { selectByID } from "../selectors";
import _ from "lodash";
import flv from "flv.js";

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
}

export interface Props extends StateProps, DispatchProps {}

class StreamShow extends React.PureComponent<Props> {
  private videoRef = React.createRef<HTMLVideoElement>();
  private player: any;

  public componentDidMount() {
    const {
      get,
      // @ts-ignore
      match: {
        params: { id }
      }
    } = this.props;

    get(id);
    this.buildPlayer();
  }

  public componentDidUpdate() {
    this.buildPlayer();
  }

  public componentWillUnmount() {
    this.player.destroy();
  }

  public render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ paddingTop: 20 }}>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }

  private buildPlayer = () => {
    const {
      // @ts-ignore
      match: {
        params: { id }
      }
    } = this.props;

    if (this.player || !this.props.stream || !this.videoRef.current) {
      return;
    }

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };
}

const mapStateToProps = (state: RootState, props: Props) => {
  return {
    // @ts-ignore
    stream: selectByID(state, parseInt(props.match.params.id))
  };
};

const mapDispatchToProps: DispatchProps = {
  get
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(StreamShow);
