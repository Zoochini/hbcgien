import React from "react";

function FacebookPage() {
  return (
    <div className="col-lg">
      <iframe
        title="facebook"
        className="facebookPage"
        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/HandballGienLoiret/&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default FacebookPage;
