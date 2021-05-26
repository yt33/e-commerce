/* /frontend/components/checkout/CardSection.js 


*/

import React, { useContext } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import Link from "next/link";
import AppContext from "../../context/AppContext";

// import { jsdomGlobal } from "jsdom-global";

function CardSection(props) {
	const appContext = useContext(AppContext);
	const { cart, isAuthenticated } = appContext;

	if (typeof window === 'object') {
		// when user click "confirm and subscribe"
		const modal = document.getElementById("myModal");
		const btn = document.getElementById("myBtn");
		const span = document.getElementsByClassName("close")[0];
		const decline = document.getElementById("decline");
		const subscribe = document.getElementById("accept");

		// when use click "confirm order"
		const box = document.getElementById("myBox");
		const confirm = document.getElementById("confirmBtn");
		const confirmSpan = document.getElementsByClassName("confirmClose")[0];
		const clear = document.getElementById("clearCart");

		// when the user clickks the button, open the modal
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// when the user clicks on (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}
		decline.onclick = function() {
			modal.style.display = "none";
		}
		// subscribe.onclick = function() {
		// 	appContext.clearItems();
		// }
		// when the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if(event.target == modal) {
				modal.style.display = "none";
			}
		}

		confirm.onclick = function() {
			box.style.display = "block";
		}

		confirmSpan.onclick = function() {
			box.style.display = "none";
		}

		clearCart.onclick = function() {
			appContext.clearItems();
		}
	}

	return (

		<div>
			<div>
				<label htmlFor = "card-element">Credit or debit card</label>

				<div>
					<fieldset style = {{ border: "none" }}>
						<div className = "form-row">
							<div id = "card-element" style = {{ width: "100%" }}>
								<CardElement
									options = {{
										style: { width: "100%", base: { fontSize: "18px" } },
									}}
								/>
							</div>
							<br />

							<button className = "order-button" id = "myBtn">Confirm & Subscribe</button>
								<div id = "myModal" class = "modal">
									<div className = "modal-content">
										<span className = "close">&times;</span>
										<p>Are you sure you want to subscribe to this order and order every month automatically?</p>
										<button id = "accept" onClick = { props.submitOrder }>Yes</button>
										{ props.stripeError ? (
											<div>{ props.stripeError.toString() }</div>
										) : (
											<div><p>You have successfully subscribed to the order</p>
												<Link href = "/">
													<button id = "clearCart">Back to Home</button>
												</Link>
											</div>
										)}
										<button id = "decline">No</button>
									</div>
								</div>
							
							<button className = "order-button-wrapper" id = "confirmBtn" onClick = { props.submitOrder }>Confirm order</button>
							{ props.stripeError ? (
								<div>{ props.stripeError.toString() }</div>
							) : (
								<div id = "myBox" class = "box">
									<div className = "box-content">
										<span className = "confirmClose">&times;</span>
										<p>You have successfully placed the order</p>
										<Link href = "/">
											<button id = "clearCart">Back to Home</button>
										</Link>
									</div>
								</div>
							)}
							<div id = "card-errors" role = "alert" />
						</div>
					</fieldset>
				</div>
			</div>

			<style jsx>
				{`
					.order-button-wrapper {
						display: flex;
						// width: 100%;
						align-items: flex-end;
						justify-content: flex-end;
					}

					.order-button {
						display: flex;
						align-itmes: flex-start;
						justify-content: flex-end;
					}
					/* the modal (background) */
					.modal, 
					.box {
						display: none !important;
						position: fixed;
						z-index: 1;
						padding-top: 100px;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						overflow: auto;
						background-color: rgb(0, 0, 0);
						background-color: rgba(0, 0, 0, 0.4);
					}

					/* modal content */
					.modal-content, 
					.box-content {
						background-color: #fefefe;
						margin: auto;
						padding: 20px;
						border: 1px solid #888;
						width: 80%;
					}

					.close, .confirmClose {
						color: #aaaaaa;
						float: right;
						font-size: 28px;
						font-weight: bold;
					}

					.close: hover,
					.close: focus {
						color: #000;
						text-decoration: none;
						cursor: pointer;
					}
				`}
			</style>
		</div>
	);

}

export default CardSection;