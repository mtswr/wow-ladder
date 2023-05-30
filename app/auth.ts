import { NextApiResponse } from "next";
export type token = {
	access_token: string,
	token_type: string,
	expires_in: number,
	sub: string
}
export default function createAccessToken(region = 'us') {
	return new Promise<token>((resolve, reject) => {
		let credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);
		const requestOptions = {
			host: `${region}.battle.net`,
			path: '/oauth/token',
			method: 'POST',
			headers: {
				'Authorization': `Basic ${credentials.toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};
		let responseData = '';
		function requestHandler(res: NextApiResponse) {
			res.on('data', (chunk) => {
				responseData += chunk;
			});
			res.on('end', () => {
				let data: token = JSON.parse(responseData);
				resolve(data);
			});
		}
		let request = require('https').request(requestOptions, requestHandler);
		request.write('grant_type=client_credentials');
		request.end();
		request.on('error', (error: string) => {
			console.log(error)
			reject(error);
		});
	});
}