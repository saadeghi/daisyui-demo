<template>
  <div>
    <div class="prose text-content-800">
      <Wrapper title="Colors and theming" nocode>
        Read everything about DaisyUI colors and theming <a target="_blank" href="https://github.com/saadeghi/daisyui/blob/master/docs/theming.md">here</a>
      </Wrapper>
    </div>
    <Wrapper title="Brand colors" classes="grid grid-cols-1 md:grid-cols-3 gap-6" nocode>
      <div class="block h-16 md:h-40" v-for="(variant, index) in colors.variants">
        <div class="relative flex overflow-hidden rounded shadow-lg h-14 md:h-32">
          <div class="absolute flex items-center justify-center w-full h-full text-content-primary"><span class="font-mono tracking-widest uppercase">{{ index }}</span></div>
          <div v-for="(shade, index) in variant" :class="'w-1/3 '+ shade"></div>
        </div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ index }}</div>
      </div>
    </Wrapper>
    <Wrapper title="content colors" classes="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6" nocode>
      <div class="block h-16 md:h-40">
        <div class="overflow-hidden rounded shadow-lg h-14 md:h-32 bg-default"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">default</div>
      </div>
      <div class="block h-16 md:h-40" v-for="(color, index) in colors.content">
        <div :class="'h-14 md:h-32 overflow-hidden rounded shadow-lg ' + color.class"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color.name }}</div>
      </div>
    </Wrapper>
    <Wrapper title="State colors" classes="grid grid-cols-2 md:grid-cols-4 gap-6" nocode>
      <div class="block h-16 md:h-40" v-for="(color, index) in colors.state">
        <div :class="'h-14 md:h-16 overflow-hidden rounded shadow-lg ' + color.class"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color.name }}</div>
      </div>
    </Wrapper>





color generator
<div class="grid grid-cols-2">

<div class="prose">
<pre><code>:root {
  --d: {{ colorValues['d']['hsl'] }};
  --p1: {{ colorValues['p1']['hsl'] }};
  --p2: {{ colorValues['p2']['hsl'] }};
  --p3: {{ colorValues['p3']['hsl'] }};
  --s1: {{ colorValues['s1']['hsl'] }};
  --s2: {{ colorValues['s2']['hsl'] }};
  --s3: {{ colorValues['s3']['hsl'] }};
  --a1: {{ colorValues['a1']['hsl'] }};
  --a2: {{ colorValues['a2']['hsl'] }};
  --a3: {{ colorValues['a3']['hsl'] }};
  --c1: {{ colorValues['c1']['hsl'] }};
  --c2: {{ colorValues['c2']['hsl'] }};
  --c3: {{ colorValues['c3']['hsl'] }};
  --c4: {{ colorValues['c4']['hsl'] }};
  --c5: {{ colorValues['c5']['hsl'] }};
  --c6: {{ colorValues['c6']['hsl'] }};
  --c7: {{ colorValues['c7']['hsl'] }};
  --c8: {{ colorValues['c8']['hsl'] }};
  --c9: {{ colorValues['c9']['hsl'] }};
  --cp: {{ colorValues['cp']['hsl'] }};
  --cs: {{ colorValues['cs']['hsl'] }};
  --ca: {{ colorValues['ca']['hsl'] }};
  --in: {{ colorValues['in']['hsl'] }};
  --su: {{ colorValues['su']['hsl'] }};
  --wa: {{ colorValues['wa']['hsl'] }};
  --er: {{ colorValues['er']['hsl'] }};
}</code></pre>
</div>

  <div class="">
    <div class="flex items-center w-full space-y-3" v-for="(item, index) in colorValues">
      <div class="flex items-center px-2 text-sm w-44">
        {{ item.name }}
      </div>
      <div class="grid">
        <input
          type="color"
          class="z-10 w-10 h-10 col-start-1 row-start-1 mt-1 ml-3 outline-none flex-0"
          v-model="colorValues[index]['hex']"
          v-on:change="hexToHsl(index)"
        >
        <input
          type="text"
          class="col-start-1 row-start-1 pl-16 ml-2 w-44 input-text bordered"
          v-model="item.hex"
          v-on:change="hexToHsl(index)"
        >
      </div>
    </div>
  </div>
</div>


<style>
:root {
--d: {{ colorValues['d']['hsl'] }};
--p1: {{ colorValues['p1']['hsl'] }};
--p2: {{ colorValues['p2']['hsl'] }};
--p3: {{ colorValues['p3']['hsl'] }};
--s1: {{ colorValues['s1']['hsl'] }};
--s2: {{ colorValues['s2']['hsl'] }};
--s3: {{ colorValues['s3']['hsl'] }};
--a1: {{ colorValues['a1']['hsl'] }};
--a2: {{ colorValues['a2']['hsl'] }};
--a3: {{ colorValues['a3']['hsl'] }};
--c1: {{ colorValues['c1']['hsl'] }};
--c2: {{ colorValues['c2']['hsl'] }};
--c3: {{ colorValues['c3']['hsl'] }};
--c4: {{ colorValues['c4']['hsl'] }};
--c5: {{ colorValues['c5']['hsl'] }};
--c6: {{ colorValues['c6']['hsl'] }};
--c7: {{ colorValues['c7']['hsl'] }};
--c8: {{ colorValues['c8']['hsl'] }};
--c9: {{ colorValues['c9']['hsl'] }};
--cp: {{ colorValues['cp']['hsl'] }};
--cs: {{ colorValues['cs']['hsl'] }};
--ca: {{ colorValues['ca']['hsl'] }};
--in: {{ colorValues['in']['hsl'] }};
--su: {{ colorValues['su']['hsl'] }};
--wa: {{ colorValues['wa']['hsl'] }};
--er: {{ colorValues['er']['hsl'] }};
}
</style>

  </div>
</template>


<script>
export default {
  data() {
    return {
      colorValues: {
        "d"  : { hsl: "0 0% 100%", hex: "#ffffff", name: "default"},
        "p1" : { hsl: "259 94% 61%", hex: "#793ef9", name: "primary-lighten"},
        "p2" : { hsl: "259 94% 51%", hex: "#570df8", name: "primary"},
        "p3" : { hsl: "259 94% 41%", hex: "#4506cb", name: "primary-darken"},
        "s1" : { hsl: "314 100% 57%", hex: "#ff24cc", name: "secondary-lighten"},
        "s2" : { hsl: "314 100% 47%", hex: "#f000b8", name: "secondary"},
        "s3" : { hsl: "314 100% 37%", hex: "#bd0091", name: "secondary-darken"},
        "a1" : { hsl: "174 60% 61%", hex: "#60d7cb", name: "accent-lighten"},
        "a2" : { hsl: "174 60% 51%", hex: "#37cdbe", name: "accent"},
        "a3" : { hsl: "174 60% 41%", hex: "#2aa79b", name: "accent-darken"},
        "cp" : { hsl: "0 0% 100%", hex: "#ffffff", name: "content-primary"},
        "cs" : { hsl: "0 0% 100%", hex: "#ffffff", name: "content-secondary"},
        "ca" : { hsl: "0 0% 100%", hex: "#ffffff", name: "content-accent"},
        "c1" : { hsl: "220 14% 96%", hex: "#f3f4f6", name: "content-100"},
        "c2" : { hsl: "228 14% 93%", hex: "#ebecf0", name: "content-200"},
        "c3" : { hsl: "220 15% 84%", hex: "#d0d4dc", name: "content-300"},
        "c4" : { hsl: "218 14% 65%", hex: "#99a2b2", name: "content-400"},
        "c5" : { hsl: "220 14% 46%", hex: "#657086", name: "content-500"},
        "c6" : { hsl: "220 14% 37%", hex: "#515a6c", name: "content-600"},
        "c7" : { hsl: "219 14% 28%", hex: "#3d4451", name: "content-700"},
        "c8" : { hsl: "222 13% 19%", hex: "#2a2e37", name: "content-800"},
        "c9" : { hsl: "223 14% 10%", hex: "#16181d", name: "content-900"},
        "in" : { hsl: "207 90% 54%", hex: "#2094f3", name: "info"},
        "su" : { hsl: "174 100% 29%", hex: "#009485", name: "success"},
        "wa" : { hsl: "36 100% 50%", hex: "#ff9900", name: "warning"},
        "er" : { hsl: "14 100% 57%", hex: "#ff5724", name: "error"},
      },
      colors: {
        'variants': {
          'primary': [
            'bg-primary-lighten',
            'bg-primary',
            'bg-primary-darken',
          ],
          'secondary': [
            'bg-secondary-lighten',
            'bg-secondary',
            'bg-secondary-darken',
          ],
          'accent': [
            'bg-accent-lighten',
            'bg-accent',
            'bg-accent-darken',
          ],
        },
        'content': [
          {
            name: '100',
            class: 'bg-content-100'
          },
          {
            name: '200',
            class: 'bg-content-200'
          },
          {
            name: '300',
            class: 'bg-content-300'
          },
          {
            name: '400',
            class: 'bg-content-400'
          },
          {
            name: '500',
            class: 'bg-content-500'
          },
          {
            name: '600',
            class: 'bg-content-600'
          },
          {
            name: '700',
            class: 'bg-content-700'
          },
          {
            name: '800',
            class: 'bg-content-800'
          },
          {
            name: '900',
            class: 'bg-content-900'
          },
        ],
        'state': [
          {
            name: 'info',
            class: 'bg-info'
          },
          {
            name: 'success',
            class: 'bg-success'
          },
          {
            name: 'warning',
            class: 'bg-warning'
          },
          {
            name: 'error',
            class: 'bg-error'
          },
        ],
      }
    }
  },
  methods: {
    hexToHsl: function(name) {
      let H = this.colorValues[name]['hex'];
      let ex = /^#([\da-f]{3}){1,2}$/i;
      if (ex.test(H)) {
        // convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
          r = "0x" + H[1] + H[1];
          g = "0x" + H[2] + H[2];
          b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
          r = "0x" + H[1] + H[2];
          g = "0x" + H[3] + H[4];
          b = "0x" + H[5] + H[6];
        }
        // then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

        if (delta == 0)
          h = 0;
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        else if (cmax == g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0)
          h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        // return "hsl(" + h + "," + s + "%," + l + "%)";
        this.colorValues[name]['hsl'] = Math.floor(h) + " " + Math.floor(s) + "% " + Math.floor(l) + "%"
      }else{
        console.log('er')
      }
    }
  }
}
</script>
