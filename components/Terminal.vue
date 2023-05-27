<template>
  <div>
    <v-termynal :type-delay="50">
      <vt-input :line-delay="500" prompt="&rarr; ~">cd "Jawa Barat/Bandung/Braga"</vt-input>
      <vt-input :line-delay="500" prompt="&rarr; Braga">git clone git@github.com:ngopijs/ngopijs.git</vt-input>
      <vt-spinner :line-delay="700" :frame-delay="400" type="simpleDots" prefix="Cloning into 'ngopijs'" />

      <vt-text>remote: Enumerating objects: 45, done.</vt-text>
      <vt-text>remote: Counting objects: 100% (45/45), done.</vt-text>
      <vt-text>remote: Compressing objects: 100% (32/32), done.</vt-text>
      <vt-text>remote: Total 45 (delta 5), reused 40 (delta 5), pack-reused 0</vt-text>

      <vt-progress :line-delay="700" :progress-delay="50" prefix="Receiving objects:"
        v-text="doneDownloadText"></vt-progress>
      <vt-text @vue:updated="onDownloadDone">Resolving deltas: 100% (5/5), done.</vt-text>
      <vt-input prompt="&rarr; Braga">cd ngopijs && npm install</vt-input>

      <vt-progress :line-delay="700" :progress-delay="50" progress-char="/" v-text="installProgressText"></vt-progress>
      <vt-input :line-delay="1500" prompt="&rarr; ngopijs git:(main)" @vue:updated="onInstallFinished">npm run
        brew</vt-input>
      <vt-text>> brew<br />> node scripts/brew</vt-text>

      <vt-spinner :line-delay="700" type="line" :frame-delay="150" :duration="5" prefix="☕️ Brewing Soon" />
      <vt-input class="vt__empty-prompt" prompt="">See you soon @ ngopi.js - Coffee & Code :)</vt-input>
    </v-termynal>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from "@lehoczky/vue-termynal"
const doneDownloadText = ref("")
const installProgressText = ref("")

const onDownloadDone = () => {
  doneDownloadText.value = '100% (45/45), 224.77 KiB | 162.00 KiB/s, done.'
}

const onInstallFinished = () => {
  installProgressText.value = '✨ Done in 1.66s.'
}
</script>

<style lang="postcss" scoped>
[vt__prompt]::before {
  margin-right: 0.75em;
  color: #34e4db;
  font-weight: 800;
}

.v-termynal {
  width: 380px;
  padding: 50px 15px 20px;
  font-size: 10px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.6)) opacity(0.9);
  -webkit-filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.6)) opacity(0.9);

  @screen md {
    width: 700px;
    font-size: 12px;
    padding: 70px 35px 35px;
  }

  .vt__line {
    line-height: 1.55;
    white-space: pre-wrap;

    &.vt__empty-prompt {
      &::before {
        margin-right: 0;
      }
    }
  }

  &::after {
    top: 0px;
    color: #4b4b4b;
    font-size: 13px;
    font-weight: 600;
    line-height: 2.65em;
    border-radius: 10px 10px 0 0;
    background-color: rgb(255 255 255);
    content: "ngopijs —- ... zsh -- 125x30";

    @screen md {
      content: "ngopijs —- root@ngopijs—pc -- -- zsh -- 125x30";
    }
  }

  &::before {
    top: 10px;
    left: 10px;
    width: 13px;
    height: 13px;
    z-index: 1;
    box-shadow: 20px 0 #f4c025, 40px 0 #3ec930;
  }
}
</style>