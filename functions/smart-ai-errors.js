const { OpenAIApi, Configuration } = require('openai');

exports.handler = async function (event) {
	const body = JSON.parse(event.body);

	const configuration = new Configuration({
		apiKey: body.apiKey,
	});
	const openai = new OpenAIApi(configuration);

	if (body.prompt !== undefined) {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: `${body.prompt}`,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ message: `${completion.data.choices[0].text}` }),
		};
	}

	return {
		statusCode: 400,
		body: JSON.stringify({ message: 'No prompt provided.' }),
	};
};
