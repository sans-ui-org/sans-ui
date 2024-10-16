// import { SANS_UI_GITHUB_API_URL, SANS_UI_GITHUB_REPO_URL } from './utils/constants';

interface GitHubContributor {
	login?: string;
	id?: number;
	avatar_url?: string;
	html_url?: string;
	contributions?: number;
}

interface GitHubRepoInfo {
	id?: number;
	name?: string;
	full_name?: string;
	description?: string;
	stargazers_count?: number;
	forks_count?: number;
	open_issues_count?: number;
	owner?: {
		login?: string;
		id?: number;
		avatar_url?: string;
		html_url?: string;
	};
}

export async function load() {
	// const contributors: GitHubContributor[] = await fetch(SANS_UI_GITHUB_API_URL)
	// 	.then((res) => res.json())
	// 	.catch(() => {
	// 		return [];
	// 	});
	// const repoInfo: GitHubRepoInfo = await fetch(SANS_UI_GITHUB_REPO_URL)
	// 	.then((res) => res.json())
	// 	.catch(() => {
	// 		return {};
	// 	});

	return {
		contributors: [] as GitHubContributor[],
		repoInfo: {} as GitHubRepoInfo
	};
}
