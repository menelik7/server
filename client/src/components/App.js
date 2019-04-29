import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import history from "../history";

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<Router history={history}>
					<div>
						<Header />
						<div className="container">
							<Switch>
								<Route path="/" exact component={Landing} />
								<Route
									path="/surveys"
									exact
									component={
										this.props.auth ? Dashboard : Landing
									}
								/>
								<Route
									path="/surveys/new"
									exact
									component={
										this.props.auth ? SurveyNew : Landing
									}
								/>
							</Switch>
						</div>
					</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { auth: state.auth };
};

export default connect(
	mapStateToProps,
	actions
)(App);
