import jwt from 'jsonwebtoken'

export function fakeJwt() {
  const secret = 'fake-secret'
  const payload = { userId: '123' }

  return jwt.sign(payload, secret)
}
