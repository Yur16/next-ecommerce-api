/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="website"
          href="https://github.com/Yur16"
          target="_blank"
          rel="noopener noreferrer"
        >
          Won Games
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;