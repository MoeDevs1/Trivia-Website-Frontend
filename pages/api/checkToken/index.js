
import jwtDecode from 'jwt-decode';

export default function handler(req, res) {
  const { token } = req.body;

  try {
    // Decode the token
    const decodedToken = jwtDecode(token);

    // Extract the email from the decoded token
    const email = decodedToken.sub;

    // Return the email or null if the token is invalid
    res.json({ email: email || null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
