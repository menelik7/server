import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
	render() {
		return (
			<StripeCheckout
				name="Emaily"
				description="$5 for 5 survey credits"
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="waves-effect waves-light btn-small">
					ADD CREDITS
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(
	null,
	actions
)(Payments);
