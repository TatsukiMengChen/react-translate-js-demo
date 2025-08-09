import translate from "i18n-jsautotranslate";
import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [localLanguage] = useState(translate.language.getLocal());
  const [currentLanguage, setCurrentLanguage] = useState(
    translate.language.getCurrent()
  );
  const languages = [
    {
      label: "简体中文",
      value: "chinese_simplified",
    },
    {
      label: "English",
      value: "english",
    },
    {
      label: "日本語",
      value: "japanese",
    },
    {
      label: "한국어",
      value: "korean",
    },
  ];

  useEffect(() => {
    translate.service.use("client.edge");
    translate.language.setUrlParamControl();
    translate.listener.start();
    translate.execute();
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    translate.changeLanguage(lang);
  };

  return (
    <>
      <div>本地语言： {localLanguage}</div>
      <div>当前语言： {currentLanguage}</div>
      <hr />
      <div className="content">
        博客（英语：Blog）是一种在线日记型式的个人网站，借由张帖子章、图片或视频来记录生活、抒发情感或分享信息。博客上的文章通常根据张贴时间，以倒序方式由新到旧排列。
      </div>
      <hr />
      <div>
        按钮切换语言：
        {languages.map((lang) => (
          <button key={lang.value} onClick={() => changeLanguage(lang.value)}>
            {lang.label}
          </button>
        ))}
      </div>
      <div id="translate">select 选择框切换语言：</div>
    </>
  );
}

export default App;
