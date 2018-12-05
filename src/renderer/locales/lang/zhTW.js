export default {
  msg: {
    titleName: '射手影音',
    file: {
      name: '文件',
      open: '打開文件…',
      openURL: '打開URL…',
      openRecent: '最近播放',
      clearHistory: '清空播放記錄',
      closeWindow: '關閉',
    },
    playback: {
      name: '播放',
      fullScreen: '全屏/退出全屏',
      keepPlayingWindowFront: '保持播放窗口在前',
      increasePlaybackSpeed: '加快播放速度         [',
      decreasePlaybackSpeed: '減緩播放速度         ]',
      captureScreen: '截圖',
      captureVideoClip: '截取視頻片段',
    },
    audio: {
      name: '音頻',
      increaseAudioDelay: '增加音頻延遲',
      decreaseAudioDelay: '減少音頻延遲',
      mute: '靜音',
      switchAudioTrack: '切換音軌',
      defaultAudioTrack: '默認',
    },
    subtitle: {
      name: '字幕',
      subtitleSelect: '字幕選擇',
      AITranslation: '重新加載翻譯結果',
      loadSubtitleFile: '加載字幕文件…',
      mainSubtitle: '第一字幕',
      langZhCN: '中文',
      langEn: '英文',
      noSubtitle: '無字幕',
      secondarySubtitle: '第二字幕',
      subtitleStyle: '字幕樣式',
      style1: '電影風格',
      style2: '動漫風格',
      style3: '復古風格',
      style4: '日系風格',
      style5: '現代經典',
      subtitleSize: '字幕尺寸',
      size1: '小',
      size2: '默認',
      size3: '大',
      size4: '超大',
      // increaseSubtitleSize: '增大字幕尺寸',
      // decreaseSubtitleSize: '減小字母尺寸',
      increaseSubtitleDelay: '增加字幕延時',
      decreaseSubtitleDelay: '減少字幕延時',
    },
    window_: {
      name: '窗口',
      minimize: '最小化',
      enterFullScreen: '進入全屏',
      bossKey: '老板鍵',
    },
    help: {
      name: '幫助',
      splayerxHelp: '射手影音 幫助',
    },
    splayerx: {
      about: '關於 射手影音…',
      preferences: '偏好設置…',
      homepage: '射手影音 主頁',
      feedback: '意見反饋',
      hide: '隱藏 射手影音',
      hideOthers: '隱藏 其他',
      quit: '退出',
    },
    preferences: {
      clearHistory: '退出時自動清空播放記錄',
      privacyConfirm: '啟用匿名信息和智能翻譯',
    },
    update: {
      title: '更新就緒',
      message: '更新已就緒，是否現在重啟?',
      yes: '更新',
      no: '暫不更新',
      updateInstalled: '播放器已更新至最新版本!',
    },
  },
  css: {
    titleFontSize: { fontSize: '21px' },
    versionFontSize: { fontSize: '14px' },
  },
  advance: {
    rateTitle: '播放速度',
    subMenu: '字幕設置',
    audioMenu: '音頻選項',
    fontSize: '字體大小',
    fontStyle: '字體樣式',
    subDelay: '字幕延遲',
    fontItems: [['小'], ['默認'], ['大'], ['超大']],
    audioDelay: '音頻延遲',
    changeTrack: '切換軌道',
    chosenTrack: '默認',
    track: '音軌',
  },
  errorFile: {
    title: '文件錯誤',
    content: '視頻文件格式無法識別或文件已損壞。',
  },
  loading: {
    title: '',
    content: '正在搜索翻譯結果...',
  },
  privacyBubble: {
    tryToDisable: {
      partOne: '射手影音使用匿名信息以提供更好服務，',
      partTwo: '匿名信息會導致智能翻譯無法使用。',
      underlinedContent: '禁用',
      button: '確定',
    },
    confirmDisable: {
      partOne: '確認',
      partTwo: '匿名信息和智能翻譯。',
      underlinedContent: '禁用',
      button: '取消',
    },
  },
  recentPlaylist: {
    folderSource: '文件夾',
    playlistSource: '播放列表',
    playing: '正在播放',
  },
  nextVideo: {
    nextInFolder: '文件夹中下一視頻',
    nextInPlaylist: '播放列表中下一視頻',
  },
};
