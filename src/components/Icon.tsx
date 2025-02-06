import { GithubContentResponse } from "../types/Github";

const Icon = (props: GithubContentResponse) => {
  return <img src={props.download_url} alt={props.name} />;
}

export default Icon;