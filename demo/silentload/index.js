const Chimee = window.Chimee;
const nativeSwitch = {
  name: 'native-switch',
  el: '<button>native switch</button>',
  create () {
    this.$dom.addEventListener('click', () => {
      this.$silentLoad('http://cdn.toxicjohann.com/%E4%BA%8E%E6%98%AF.mp4', {repeatTimes: 5, increment: 2});
    });
  }
};
const flvSwitch = {
  name: 'flv-switch',
  el: '<button>flv switch</button>',
  create () {
    this.$dom.addEventListener('click', () => {
      this.$silentLoad('http://yunxianchang.live.ujne7.com/vod-system-bj/TL1ce1196bce348070bfeef2116efbdea6.flv', {repeatTimes: 5, increment: 2});
    });
  }
};
const hlsSwitch = {
  name: 'hls-switch',
  el: '<button>hls switch</button>',
  create () {
    this.$dom.addEventListener('click', () => {
      this.$silentLoad('http://yunxianchang.live.ujne7.com/vod-system-bj/79_3041054cc65-ae8c-4b63-8937-5ccb05f79720.m3u8', {repeatTimes: 5, increment: 2});
    });
  }
};
Chimee.install(nativeSwitch);
Chimee.install(flvSwitch);
Chimee.install(hlsSwitch);
const player = new Chimee({
  src: 'http://cdn.toxicjohann.com/lostStar.mp4',
  wrapper: '#wrapper',
  plugin: ['nativeSwitch', 'flvSwitch', 'hlsSwitch'],
  preset: {
    flv: window.chimeeKernelFlv,
    hls: window.chimeeKernelHls
  },
  volume: 0.1,
  autoplay: true,
  controls: true
});
window.player = player;
