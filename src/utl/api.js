export async function generateQuote(userData) {

  const url = `https://fed-challenge-api.sure.now.sh/api/v1/quotes`
  const payload = {
    "first_name": userData.firstName,
    "last_name": userData.lastName,
    "address": {
      "line_1": userData.address1,
      "line_2": userData.address2,
      "city": userData.city,
      "region": userData.region,
      "postal": userData.postal
    }
  }
  console.log(payload)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),

    })
    return response.json()
  }
  catch (e) {
    console.log('Error: ', e)
  }

}