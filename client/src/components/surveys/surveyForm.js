import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
	{ label: "Survey Title", name: "title" },
	{ label: "Subject Line", name: "subject" },
	{ label: "Email Body", name: "body" },
	{ label: "Recipient List", name: "emails" }
];

class SurveyForm extends React.Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(value =>
						console.log(value)
					)}
				>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button
						className="teal btn-flat right white-text"
						type="submit"
					>
						Next
						<i className="material-icons right">arrow_forward</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || "");

	_.each(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name] = `You must provide a ${name}`;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "surveyForm"
})(SurveyForm);
