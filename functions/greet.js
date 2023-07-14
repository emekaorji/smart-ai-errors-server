// const { OpenAIApi, Configuration } = require('openai');

// const configuration = new Configuration({
// 	apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

exports.handler = async function (event, context) {
	const body = JSON.parse(event.body);
	console.log(body);

	// if (body.prompt !== undefined) {
	// 	const completion = await openai.createCompletion({
	// 		model: 'text-davinci-003',
	// 		prompt: `${body.prompt}`,
	// 	});

	// 	return {
	// 		statusCode: 200,
	// 		body: JSON.stringify({ message: `${completion.data.choices[0].text}` }),
	// 	};
	// }

	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'No prompt provided.' }),
	};
};
