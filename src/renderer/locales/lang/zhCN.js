export default {
  msg: {
    titleName: 'SPlayer',
    file: {
      name: '文件',
      open: '打开文件…',
      openURL: '打开 URL…',
      openRecent: '打开最近播放',
      clearHistory: '清空播放记录',
      closeWindow: '关闭',
    },
    playback: {
      name: '播放',
      fullScreen: '全屏/退出全屏',
      keepPlayingWindowFront: '保持窗口在前',
      increasePlaybackSpeed: '加快播放速度',
      decreasePlaybackSpeed: '减缓播放速度',
      captureScreen: '截图',
      captureVideoClip: '截取视频片段',
      play: '播放',
      pause: '暂停',
      forward: '前进',
      backward: '后退',
    },
    audio: {
      name: '音频',
      increaseAudioDelay: '增加音频延迟',
      decreaseAudioDelay: '减少音频延迟',
      mute: '静音',
      switchAudioTrack: '切换音轨',
      defaultAudioTrack: '默认',
      increaseVolume: '提高音量',
      decreaseVolume: '降低音量',
    },
    subtitle: {
      name: '字幕',
      subtitleSelect: '翻译结果',
      AITranslation: '重新加载翻译结果',
      loadSubtitleFile: '加载字幕文件…',
      mainSubtitle: '第一字幕',
      langZhCN: '中文',
      langEn: '英文',
      noSubtitle: '无',
      secondarySubtitle: '第二字幕',
      subtitleStyle: '字幕样式',
      style1: '电影风格',
      style2: '动漫风格',
      style3: '复古风格',
      style4: '日系风格',
      style5: '现代经典',
      subtitleSize: '字幕尺寸',
      size1: '小',
      size2: '默认',
      size3: '大',
      size4: '超大',
      // increaseSubtitleSize: '增大字幕尺寸',
      // decreaseSubtitleSize: '减小字母尺寸',
      increaseSubtitleDelay: '增加字幕延时',
      decreaseSubtitleDelay: '减少字幕延时',
    },
    window_: {
      name: '窗口',
      minimize: '最小化',
      enterFullScreen: '进入全屏',
      exitFullScreen: '退出全屏',
      bossKey: '老板键',
    },
    help: {
      name: '帮助',
      splayerxHelp: '帮助',
    },
    splayerx: {
      about: '关于射手影音',
      preferences: '偏好设置',
      homepage: '网站',
      feedback: '反馈',
      hide: '隐藏射手影音',
      hideOthers: '隐藏其他',
      quit: '退出射手影音',
    },
    update: {
      title: '更新就绪',
      message: '更新已就绪，是否现在重启?',
      yes: '更新',
      no: '暂不更新',
      updateInstalled: '播放器已更新至最新版本!',
    },
  },
  css: {
    titleFontSize: { fontSize: '21px' },
    versionFontSize: { fontSize: '14px' },
  },
  preferences: {
    none: '无',
    settings: '设置',
    generalSetting: '通用设置',
    clearHistory: '退出时自动清空播放记录',
    privacyConfirm: '启用匿名信息和智能翻译',
    setAsDefault: '将SPlayer设为默认播放器',
    languagePriority: '语言优先级',
    languageDescription: '在您观赏影片时，射手影音会为您推送以下语言的翻译结果。',
    primaryLanguage: '首要语言',
    secondaryLanguage: '次要语言',
  },
  advance: {
    rateTitle: '播放速度',
    subMenu: '字幕设置',
    audioMenu: '音频选项',
    fontSize: '字体大小',
    fontStyle: '字体样式',
    subDelay: '字幕延迟',
    fontItems: [['小'], ['默认'], ['大'], ['超大']],
    audioDelay: '音频延迟',
    changeTrack: '切换轨道',
    chosenTrack: '默认',
    track: '音轨',
  },
  errorFile: {
    fileNonExist: {
      title: '无法找到相应文件',
      content: '将从列表中移除此项目。',
    },
    emptyFolder: {
      title: '打开错误',
      content: '未找到可播放文件。',
    },
    default: {
      title: '文件错误',
      content: '无法找到相应文件',
    },
    loadFailed: {
      title: '未能加载字幕',
      content: '暂不支持该字幕类型',
    },
    noResult: {
      title: '未找到翻译结果',
      content: '网络异常或缺少翻译结果',
    },
  },
  loading: {
    title: '',
    content: '正在加载智能翻译结果 ...',
  },
  privacyBubble: {
    masVersion: {
      content: '智能翻译功能需要您同意通过匿名方式上传媒体信息至服务端，否则将无法使用该功能获取翻译结果，我们不会收集关于您个人的隐私信息。',
      agree: '启用',
      disagree: '禁用',
    },
    tryToDisable: {
      partOne: '射手影音使用匿名信息以提供更好服务，',
      partTwo: '匿名信息会导致智能翻译无法使用。',
      underlinedContent: '禁用',
      button: '确定',
    },
    confirmDisable: {
      partOne: '确认',
      partTwo: '匿名信息和智能翻译。',
      underlinedContent: '禁用',
      button: '取消',
    },
  },
  recentPlaylist: {
    folderSource: '文件夹',
    playlistSource: '播放列表',
    playing: '正在播放',
  },
  nextVideo: {
    nextInFolder: '文件夹中下一视频',
    nextInPlaylist: '播放列表中下一视频',
  },
  subtitle: {
    language: {
      zh: '中文（简体）',
      'zh-CN': '中文（简体）',
      'zh-TW': '中文（繁体）',
      en: '英语',
    },
  },
};
