/* /frontend/lib/apollo.js 

Connect the application with GraphQL using Apollo and 
the next-apollo implementation to wrap the components
in a withData function to give them access to make
GraphQL data queries.

*/
import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const config = {
	link: new HttpLink({
		uri: `${API_URL}/graphql`, // Server URL (must be absolute)
	})
};

export default withData(config);
