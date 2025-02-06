import { useCallback, useEffect, useMemo, useState } from "react";
import { GithubContentResponse } from "../types/Github";

const Icon = (props: GithubContentResponse) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const isValidImage = useMemo(() => {
    return props.download_url.endsWith('.png') || props.download_url.endsWith('.svg');
  }, [props.download_url]);

  const copyIconName = useCallback(() => {
    const iconName = props.name.replace(/\.[^/.]+$/, '');
    navigator.clipboard.writeText(iconName);
    setCopySuccess(true);
  }, [props]);

  const downloadIcon = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    const blob = new Blob([props.download_url], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', props.name);
    a.click();
    URL.revokeObjectURL(url);
  }, [props.download_url, props.name]);

  useEffect(() => {
    if (copySuccess) {
      const id = setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
      return () => clearTimeout(id);
    }
  }, [copySuccess]);

  if (!isValidImage) {
    return null;
  }

  return <button type="button" className="icon" onClick={copyIconName}>
    {!copySuccess && props.name !== 'ActionCopy.svg' && <span className="copy">
      <img src={'/img/copy-icon.svg'} alt="Copy" />
      </span>}
    {copySuccess && <span className="copy-success">Copied!</span>}
    <span className="icon-name">
      {props.name}
    </span>
    <a type="button" className="download-button" href={props.download_url} download={props.name} onClick={downloadIcon}>
      <img src={'/img/download-icon.svg'} alt="Download" />
    </a>
    <img src={props.download_url} alt={props.name} />
  </button>
}

export default Icon;