import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

function base64Url(input: CryptoJS.lib.WordArray) {
  const base64Url = Base64.stringify(input);

  // Replace characters according to base64url specifications
  return base64Url.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export function createJwtToken(payload: object, secret: string) {
  if (!payload) {
    throw new Error('Empty payload');
  }

  const jwtHeader = JSON.stringify({ alg: 'HS256', typ: 'JWT' });

  const encodedHeaders = base64Url(Utf8.parse(jwtHeader));
  const encodedPlayload = base64Url(Utf8.parse(JSON.stringify(payload)));

  const signature = hmacSHA256(`${encodedHeaders}.${encodedPlayload}`, secret);
  const encodedSignature = base64Url(signature);

  const jwt = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`;

  return jwt;
}
