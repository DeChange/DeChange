import { createThirdwebClient } from 'thirdweb'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_API_KEY

if (!clientId || !secretKey) {
  throw new Error('Client ID or Secret Key not provided')
}

export const client = createThirdwebClient({
  clientId: clientId,
  secretKey: secretKey,
})
