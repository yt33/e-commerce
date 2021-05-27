/* /frontend/pages/index.js

Update home route to display the Item list and a search bar to filter the items
*/
 
import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import ItemList from "../components/ItemList";
 
function Home() {
	const [query, updateQuery] = useState("");
	return (
		<div className = "container-fluid">
			<Row>
				<Col>
					<div className = "search">
						<InputGroup>
							<InputGroupAddon addonType = "append"> Search </InputGroupAddon>
							<Input
								onChange = {e => updateQuery(e.target.value.toLocaleLowerCase())}
								value = {query}
							/>
						</InputGroup>
					</div>
					<ItemList search = {query} />
				</Col>
			</Row>
		
			<style jsx>
				{`
					.search {
						margin: 20px;
						width: 500px;
					}
				`}
			</style>
		</div>
	);
}

export default Home;
