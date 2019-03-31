import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../action";
import { getIsSignedIn } from "../selectors";
import { RootState } from "../../store/rootReducer";

interface StateProps {
  readonly isSignedIn: boolean;
}

interface DispatchProps {
  readonly signIn: typeof signIn;
  readonly signOut: typeof signOut;
}

interface Props extends StateProps, DispatchProps {}

class GoogleAuth extends React.PureComponent<Props> {
  private auth: gapi.auth2.GoogleAuth = {} as any;

  public componentDidMount() {
    (window as any).gapi.load("client:auth2", () => {
      (window as any).gapi.client
        .init({
          clientId:
            "594593576432-ofst184rp0gbm3jbvulqlefuf2r7cjig.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = (window as any).gapi.auth2.getAuthInstance();
          const isSignedIn = this.auth.isSignedIn.get();
          this.onAuthChange(isSignedIn);
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  public render() {
    return <div>{this.renderAuthButton()}</div>;
  }

  private renderAuthButton() {
    const { isSignedIn } = this.props;
    console.log("isSignedIn", isSignedIn);
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={this.handleSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.handleSignIn} className="ui red google button">
          <i className="google icon" />
          Google Sign In
        </button>
      );
    }
  }

  private onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      const { currentUser } = this.auth;
      this.props.signIn(currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  private handleSignIn = () => {
    this.auth.signIn();
  };

  private handleSignOut = () => {
    this.auth.signOut();
  };
}

const mapStateToProps = (state: RootState) => {
  return {
    isSignedIn: getIsSignedIn(state)
  };
};

const mapDispatchToProps: DispatchProps = {
  signIn,
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
