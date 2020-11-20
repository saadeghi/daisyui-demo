<template>
  <div class="py-10">
    <div class="py-2 text-xs capitalize opacity-50">{{ title }}</div>
    <div :class="classes" ref="component">
      <slot></slot>
    </div>
    <div v-if="!nocode">
      <pre id="myInput" class="mt-4" v-highlightjs="sourcecode"><code class="h-48 p-4 font-mono text-xs rounded-lg html"></code></pre>
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
      sourcecode: ""
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
