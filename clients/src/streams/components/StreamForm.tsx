import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import {
  InjectedFormProps,
  WrappedFieldProps,
  WrappedFieldMetaProps
} from "redux-form";

interface PassProps {
  readonly onSubmit: (values: any) => void;
}

interface FieldProps extends WrappedFieldProps {
  readonly label: string;
}

export interface Props extends PassProps, InjectedFormProps {}

class StreamForm extends React.PureComponent<Props> {
  public render() {
    const { handleSubmit } = this.props;
    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Tile:" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description:"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }

  private onSubmit = (values: any) => {
    const valuesJS = values.toJS();
    this.props.onSubmit(valuesJS);
  };

  private renderError = ({ error, touched }: WrappedFieldMetaProps) => {
    if (touched && error) {
      return (
        <div className="ui pointing red basic label">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  private renderInput = ({ input, meta, label }: FieldProps) => {
    const className = `field ${meta.error && meta.touched && "error"}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
}

const validate = (values: any) => {
  const valuesJS = values.toJS();
  const errors = {
    title: "",
    description: ""
  };

  if (!valuesJS.title) {
    errors.title = "You must enter a title";
  }

  if (!valuesJS.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
  // @ts-ignore
})(StreamForm);
