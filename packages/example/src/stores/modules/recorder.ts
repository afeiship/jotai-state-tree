import { atom } from 'jotai';
import Recorder from 'js-audio-recorder';

const recorder = new Recorder({
  sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
  sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，默认是16000
  numChannels: 1, // 声道
});

const action = atom('idle', (get, set, val) => {
  console.log('action: ', val);

  if (val === 'record') {
    recorder.start();
  }

  if (val === 'stop') {
    recorder.stop();
  }

  if (val === 'play') {
    recorder.play();
  }

  set(action, val);
});

export default { action };
