import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    split,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { getMainDefinition } from "@apollo/client/utilities"
import { WebSocketLink } from "@apollo/client/link/ws"
import { onError } from "@apollo/client/link/error"

import { rootNavigate } from ".."

const config = {
    apiUrl: process.env.REACT_APP_API_BASE_URL,
    socketUrl: process.env.REACT_APP_API_SOCKET_URL
}


const httpLink = createHttpLink({
    uri: `${config.apiUrl}graphql`,
})

const wsLink = new WebSocketLink({
    uri: `${config.socketUrl}graphql`,
    options: {
        reconnect: true,
        connectionParams: {
            // we can append token here for subscription
        },
    },
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            // authorization: token
        },
    }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (
        graphQLErrors[0].message.includes("jwt expired") ||
        graphQLErrors[0].message.includes("authentication")
    ) {
        rootNavigate("/")
    }

    if (networkError) console.log(`[Network error]: ${networkError}`)
})
const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        )
    },
    wsLink,
    authLink.concat(httpLink, errorLink)
)
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
})

export default client
