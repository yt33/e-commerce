/* /frontend/pages/items.js 

*/
import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

import Cart from "../components/cart";
import AppContext from "../context/AppContext";

import {
	Button,
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Col,
	Row,
} from "reactstrap";

const GET_ITEM_DISHES = gql`
	query($id: ID!) {
		item(id: $id) {
			id
			name
			dishes {
				id
				name
				description
				price
				image {
					url
				}
			}
		}
	}
`;


function Items() {
	const appContext = useContext(AppContext);
	const router = useRouter();
	const { loading, error, data } = useQuery(GET_ITEM_DISHES, {
		variables: { id: router.query.id },
	});

	if(error) return "Error Loading Dishes";
	if(loading) return <h1>Loading ...</h1>;
	if(data.item) {
		const { item } = data;
		return (
			<>
				<h1>{item.name}</h1>
				<Row>
					{item.dishes.map((res) => (
						<Col xs = "6" sm = "4" style = {{ padding: 0 }} key = {res.id}>
							<Card style = {{ margin: "0 10px"}}>
								<CardImg
									top = {true}
									style = {{ height: 250 }}
									src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
								/>
			
								<CardBody>	
									<CardTitle>{res.name}</CardTitle>
									<CardText>{res.description}</CardText>
								</CardBody>
				
								<div className = "card-footer">
									<Button outline color = "primary" onClick = { () => appContext.addItem(res) }>
										+ Add To Card
									</Button>
		
									<style jsx>
										{`
											a {
												color: white;
											}
											a:link {
												text-decoration: none;
												color: white;
											}
											.container-fluid {
												margin-bottom: 30px;
											}
											.btn-outline-primary {
												color: #007bff !important;
											}
											a.hover {
												color: white !important;
											}
										`}
									</style>
								</div>
							</Card>
						</Col>
					))}

					<Col xs = "3" style = {{ padding: 0 }}>
						<div>
							<Cart />
						</div>
					</Col>
				</Row>
			</>
		);
	}
	return <h1>Add Dishes</h1>;
}

export default Items;
