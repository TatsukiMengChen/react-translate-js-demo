import translate from "i18n-jsautotranslate";
import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  // 获取本地语言设置
  const [localLanguage] = useState(translate.language.getLocal());
  // 当前选中的语言状态
  const [currentLanguage, setCurrentLanguage] = useState(
    translate.language.getCurrent()
  );

  // 支持的语言列表
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

  // 组件挂载时初始化翻译服务
  useEffect(() => {
    // 使用客户端边缘翻译服务
    translate.service.use("client.edge");
    // 启用URL参数控制语言
    translate.language.setUrlParamControl();
    // 开始监听语言变化
    translate.listener.start();
    // 执行翻译
    translate.execute();
  }, []);

  // 切换语言的处理函数
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
      <hr />
      <div style={{ marginTop: 24 }}>
        Demo GitHub 仓库：
        <a
          href="https://github.com/TatsukiMengChen/react-translate-js-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/TatsukiMengChen/react-translate-js-demo
        </a>
        <br />
        translate GitHub 仓库：
        <a
          href="https://github.com/xnx3/translate"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/xnx3/translate
        </a>
      </div>
    </>
  );
}

export default App;
