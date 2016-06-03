<script>
import text from './senders/text'

export default {
  components: {
    text
  }
}
</script>

<template>
<div class="senders">
  <div class="toolbar">
    <a class="web_wechat_face" title="表情"></a>
  </div>
  <div class="content">
    <text :session="$parent.session"></text>
  </div>
</div>
</template>

