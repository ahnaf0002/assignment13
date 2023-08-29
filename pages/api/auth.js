// pages/api/auth.js
// This API route accepts an incoming request with an "Authorization" header,
// extracts the token from the header, prefixes it with "Bearer ", and adds
// it as a new "Authorization" header in the response.

export default (req, res) => {
    const incomingToken = req.headers.authorization || '';
    const modifiedToken = `Bearer ${incomingToken}`;
  
    res.setHeader('Authorization', modifiedToken);
    res.status(200).json({ message: 'Authorization header modified.' });
  };
  