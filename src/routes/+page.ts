const GITHUB_REPO_URL = 'https://api.github.com/repos/kuri-sun/portfolio';
const GITHUB_API_URL = GITHUB_REPO_URL + '/contributors?per_page=2';

export async function load({ fetch }) {
	const contributors = await fetch(GITHUB_API_URL);
	const repoInfo = await fetch(GITHUB_REPO_URL);

	return {
		contributors: await contributors.json(),
		repoInfo: await repoInfo.json()
	};
}
