import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51OZRYhHXdyJ63GGl6pcdnqf7ULWpjL1xprP4Fn5bzOWD0xRxI6C0lghNeyaYbK0PKnLrQtYCt320z84ezMOjXTv500Wk5kfDdt"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}