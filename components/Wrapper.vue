<template>
  <div class="py-2">
    <div class="py-2 text-xs capitalize opacity-50">
    <div v-if="!nocode" v-on:click="showcode = !showcode" class="inline-block select-none">
      <Icon v-if="!showcode" glyph="code" class="inline-block w-4 mr-2 cursor-pointer stroke-current" />
      <Icon v-if="showcode" glyph="eye" class="inline-block w-4 mr-2 cursor-pointer stroke-current" />
    </div>
      {{ title }}
    </div>
    <div>
      <div v-if="!showcode">
        <div :class="classes" ref="component">
          <slot></slot>
        </div>
      </div>
      <div v-if="!nocode && showcode">
        <pre id="myInput" v-highlightjs="sourcecode"><code class="h-64 p-4 font-mono text-xs rounded-lg html"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    classes: String,
    nocode: Boolean,
  },
  data: function() {
    return {
      sourcecode: "",
      showcode: false,
    };
  },
  methods: {
    setSrc: function() {
      function process(str) {
        var div = document.createElement("div");
        div.innerHTML = str.trim() + "\n";
        return format(div, 0).innerHTML;
      }
      function format(node, level) {
        var indentBefore = new Array(level++ + 1).join("  "),
          indentAfter = new Array(level - 1).join("  "),
          textNode;
        for (var i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode("\n" + indentBefore);
          node.insertBefore(textNode, node.children[i]);
          format(node.children[i], level);
          if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode("\n" + indentAfter);
            node.appendChild(textNode);
          }
        }
        return node;
      }
      this.sourcecode = process(this.$refs.component.innerHTML);
    }
  },
  mounted:function(){
    this.setSrc()
  },
};
</script>
