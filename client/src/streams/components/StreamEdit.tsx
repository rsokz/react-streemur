import React from "react";
import { connect } from "react-redux";
import { get, update } from "../action";
import { RootState } from "../../store/rootReducer";
import { selectByID } from "../selectors";
import StreamForm from "./StreamForm";
import _ from "lodash";

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
  readonly update: typeof update;
}

export interface Props extends StateProps, DispatchProps {}

class StreamEdit extends React.PureComponent<Props> {
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
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ paddingTop: 20 }}>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, "title", "description")}
        />
      </div>
    );
  }

  private onSubmit = (values: any) => {
    // @ts-ignore
    this.props.update(this.props.match.params.id, values);
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
  update
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(StreamEdit);
