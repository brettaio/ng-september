exports.handler = async (event, context) => {
    try {
        // Simulate a response after clicking a button
        const response = {
            message: "Button click successful",
            data: {
                id: 123,
                name: "Test Product",
                price: 19.99,
            },
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred" }),
        };
    }
};