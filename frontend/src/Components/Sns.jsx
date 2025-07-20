import React from "react";
import { FaLine, FaXTwitter } from "react-icons/fa6"; // ← インストールが必要: react-icons

const Sns = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-4">
      <a
        href="https://social-plugins.line.me/lineit/share?url=https://google.com;text=aaabbbccc"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-600 transition"
      >
        <FaLine size={20} />
        LINEで共有
      </a>

      <a
        href="http://twitter.com/share?url=https://yurukei-career.com&text=Twitterのシェアをするときの文章です&via=yurukei20&hashtags=ハッシュタグのテキスト"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
      >
        <FaXTwitter size={20} />
        X(Twitter)で共有
      </a>
    </div>
  );
};

export default Sns;
