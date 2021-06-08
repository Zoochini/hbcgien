import React from "react";

const DownloadLink = (props) => {
  const content = props.value;

  const handleClick = () => {
    const aFile =
      content !== undefined
        ? `data:${content.file.contentType};base64, ${content.file.data}`
        : "";
    let a = document.createElement("a");
    a.href = aFile;
    a.download = content.name;
    a.click();
  };

  console.log(content);

  return (
    <a
      key={content._id}
      href="#top"
      target="_blank"
      download={content.name}
      onClick={handleClick}
      style={{ width: "fit-content" }}
    >
      <h2 id={content._id}>{content.name}</h2>
    </a>
  );
};

export default DownloadLink;
