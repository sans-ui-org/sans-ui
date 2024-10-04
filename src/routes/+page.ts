// const GITHUB_REPO_URL = 'https://api.github.com/repos/kuri-sun/portfolio';
// const GITHUB_API_URL = GITHUB_REPO_URL + '/contributors?per_page=2';

export async function load() {
	// const contributors = await fetch(GITHUB_API_URL);
	// const repoInfo = await fetch(GITHUB_REPO_URL);

	const contributorsData = [
		{
			login: 'kuri-sun',
			avatar_url: 'https://avatars.githubusercontent.com/u/29252044?v=4',
			html_url: ''
		},
		{
			login: 'kuri-sun',
			avatar_url: 'https://avatars.githubusercontent.com/u/29252044?v=4',
			html_url: ''
		}
	];
	const repoInfoData = {
		name: 'portfolio',
		description: 'My portfolio site',
		stargazers_count: 0,
		forks_count: 0
	};

	return {
		// contributors: await contributors.json(),
		// repoInfo: await repoInfo.json()
		contributors: contributorsData,
		repoInfo: repoInfoData
	};
}
