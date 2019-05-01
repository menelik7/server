import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends React.Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div
					key={survey._id}
					className="card blue-grey darken-1 white-text"
				>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="left">
							Sent On:{" "}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
						<p className="right">
							Last Responded:{" "}
							{new Date(
								survey.lastResponded
							).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a
							href="/surveys"
							className="green white-text"
							style={{ padding: "0 5px" }}
						>
							Yes: {survey.yes}
						</a>
						<a
							href="/surveys"
							className="red white-text"
							style={{ padding: "0 5px" }}
						>
							No: {survey.no}
						</a>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(
	mapStateToProps,
	{ fetchSurveys }
)(SurveyList);
