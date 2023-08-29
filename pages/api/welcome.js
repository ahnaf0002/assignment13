// pages/api/welcome.js
// This API route returns a JSON response with a welcome message and version.

export default (req, res) => {
    res.status(200).json({
      message: 'Welcome to our API!',
      version: '1.0',
    });
  };
  