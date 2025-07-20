import React, { useState } from "react";

const Sns = () => {
  return (
    <form>
      <div>
        <button type="">
          <a 
            href="https://social-plugins.line.me/lineit/share?url=https://google.com;text=aaabbbccc"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            LINEで共有する
          </a>
        </button>
      </div>
      <div>
        <button type="">
          <a
            href="http://twitter.com/share?url=yurukei-career.com&text=Twitterのシェアをするときの文章です&via=yurukei20&hashtags=ハッシュタグのテキスト"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            X(Twitterで共有する
          </a>
        </button>
      </div>
    </form>
  );
};

export default Sns;
