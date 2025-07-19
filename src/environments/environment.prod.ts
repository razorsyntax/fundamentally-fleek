interface Environment {
	production: boolean;
	csp: string;
}

export const environment: Environment = {
	production: true,
	csp: `default-src 'self';
		connect-src 'self' https://fundamentally.xyz https://api.fundamentally.xyz ws: wss: blob:
			https://ws-us3.pusher.com https://docs.google.com
			https://fonts.googleapis.com https://fonts.gstatic.com
			https://o160250.ingest.sentry.io;
		script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:
			https://hcaptcha.com https://*.hcaptcha.com;
		frame-src 'self' blob: data:
			https://hcaptcha.com https://*.hcaptcha.com
			https://docs.google.com
			https://www.youtube.com https://www.youtube-nocookie.com
			https://youtube.com https://youtu.be;
		style-src 'self' 'unsafe-inline'
			https://fonts.googleapis.com;
		font-src 'self' https://fonts.gstatic.com data:;
		img-src 'self' data: blob: https:;
		object-src 'self';
		media-src 'self';
		child-src 'self';
		worker-src 'self' blob:`
};
