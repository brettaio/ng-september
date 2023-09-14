const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  try {
    // Parse various request headers
    const ipAddress = event.headers['client-ip'] || event.requestContext.identity.sourceIp;
    const userAgent = event.headers['user-agent'];
    const referer = event.headers['referer'] || event.headers['referrer'];
    const authorization = event.headers['authorization'];
    const contentType = event.headers['content-type'];
    const accept = event.headers['accept'];
    const cookies = event.headers['cookie'];
    const host = event.headers['host'];
    const acceptLanguage = event.headers['accept-language'];
    const cacheControl = event.headers['cache-control'];

    // Create an object to store the request data
    const requestData = {
      ipAddress,
      userAgent,
      referer,
      authorization,
      contentType,
      accept,
      cookies,
      host,
      acceptLanguage,
      cacheControl,
      // Add other headers as needed
    };

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Insert request data into a MongoDB collection
    const db = client.db('emailTrackTest');
    const collection = db.collection('emailOpen');
    await collection.insertOne(requestData);

    // Close the MongoDB connection
    client.close();

    console.log('Request data inserted into MongoDB.');

    return {
      statusCode: 200,
      body: JSON.stringify('Request data logged'),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify('Internal Server Error'),
    };
  }
};