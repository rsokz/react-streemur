import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import StreamCreate from "../streams/components/StreamCreate";
import StreamDelete from "../streams/components/StreamDelete";
import StreamEdit from "../streams/components/StreamEdit";
import StreamList from "../streams/components/StreamList";
import StreamShow from "../streams/components/StreamShow";
import Header from "../header/Header";

const App = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
      <Router history={history}>
        <div className="ui container">
          <Header />
          {/* react-router-dom component type warning when using React.memo. 
          4.4 will have fix */}
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/create" component={StreamCreate} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default React.memo(App);
