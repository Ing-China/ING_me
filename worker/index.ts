interface Env {
	ASSETS: { fetch: typeof fetch };
}

const CANONICAL_HOST = 'ingchina.dev';

export default {
	fetch(request: Request, env: Env) {
		const url = new URL(request.url);

		if (url.hostname === `www.${CANONICAL_HOST}`) {
			url.hostname = CANONICAL_HOST;
			return Response.redirect(url.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
