export async function sendMail(subject, body, mutationId = 'contact') {
	const fromAddress = `noreply@arautorepair1.wpengine.com`;
	const toAddress = `osbaldoaguilar76@gmail.com`;

	const res = await fetch('https://arautorepair1.wpengine.com/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
        query HomePage {
          nodeByUri(uri: "/") {
            __typename
            ... on ContentType {
              id
              name
            }
            ... on Page {
              id
              title
              content
              slug
            }
          }
        }
      `
		}),
	})
	const data = await fetch(
		`mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}`,
		{
			variables: {
				input: {
					clientMutationId: mutationId,
					from: fromAddress,
					to: toAddress,
					body: body,
					subject: subject
				}
			}
		}
	)
	return data.sendEmail
}