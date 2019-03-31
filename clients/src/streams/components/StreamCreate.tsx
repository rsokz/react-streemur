import React from "react";
import { connect } from "react-redux";
import { create } from "../action";
import StreamForm from "./StreamForm";

interface DispatchProps {
  readonly create: typeof create;
}

export interface Props extends DispatchProps {}

class StreamCreate extends React.PureComponent<Props> {
  public render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  private onSubmit = (values: any) => {
    this.props.create!(values);
  };
}

const mapDispatchToProps: DispatchProps = {
  create
};

export default connect(
  null,
  mapDispatchToProps
  // @ts-ignore
)(StreamCreate);
