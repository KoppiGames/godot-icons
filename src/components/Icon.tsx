import { GithubContentResponse } from "../types/Github";

const Icon = (props: GithubContentResponse) => {
  // return <img src={props.download_url} alt={props.name} />;

  return <div className="icon">
    <img src={props.download_url} alt={props.name} />
  </div>
}

export default Icon;