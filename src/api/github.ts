import { ApiResponse } from "../types/Api";
import { GithubContentResponse } from "../types/Github";

const OWNER = 'godotengine';
const REPO = 'godot';

const fetchIcons = async (): Promise<ApiResponse<GithubContentResponse[]>> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/editor/icons`);
    const data = await response.json();
    
    if (response.status !== 200 || !response.ok) {
      throw new Error('Error fetching icons: ' +( data.message ?? 'Unknown error'));
    }
    return { data }
  } catch (error: any) {
    console.error(error);
    return {error: error.message};
  }
}

export { fetchIcons };
