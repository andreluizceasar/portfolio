const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath =
	process.env.GITHUB_ACTIONS === 'true' &&
	repository &&
	repository !== 'andreluizceasar.github.io'
		? `/${repository}`
		: '';

module.exports = {
	basePath,
	output: process.env.GITHUB_ACTIONS === 'true' ? 'export' : undefined,
  	assetPrefix: '',
	reactStrictMode: true,
	env: {
		dir: '/',
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
	images: {
		unoptimized: process.env.GITHUB_ACTIONS === 'true',
		remotePatterns: [
			{
				protocol: "https",
				hostname: "andreceasar.com",
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**'
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '?app=portfolio-theme-jqe0jhmif-atlamors.vercel.app'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**'
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
				pathname: '/**'
			},
		],
	},
}