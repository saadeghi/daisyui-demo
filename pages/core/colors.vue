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
    <div class="grid grid-cols-12 gap-4">
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['p1']['hex']"
          v-on:change="hexToHsl('p1')"
        >
        <div class="text-xs ">
          primary-lighten
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['p2']['hex']"
          v-on:change="hexToHsl('p2')"
        >
        <div class="text-xs ">
          primary
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['p3']['hex']"
          v-on:change="hexToHsl('p3')"
        >
        <div class="text-xs ">
          primary-darken
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['cp']['hex']"
          v-on:change="hexToHsl('cp')"
        >
        <div class="text-xs ">
          content-primary
        </div>
      </div>

      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['s1']['hex']"
          v-on:change="hexToHsl('s1')"
        >
        <div class="text-xs ">
          secondary-lighten
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['s2']['hex']"
          v-on:change="hexToHsl('s2')"
        >
        <div class="text-xs ">
          secondary
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['s3']['hex']"
          v-on:change="hexToHsl('s3')"
        >
        <div class="text-xs ">
          secondary-darken
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['cs']['hex']"
          v-on:change="hexToHsl('cs')"
        >
        <div class="text-xs ">
          content-secondary
        </div>
      </div>

      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['a1']['hex']"
          v-on:change="hexToHsl('a1')"
        >
        <div class="text-xs ">
          accent-lighten
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['a2']['hex']"
          v-on:change="hexToHsl('a2')"
        >
        <div class="text-xs ">
          accent
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['a3']['hex']"
          v-on:change="hexToHsl('a3')"
        >
        <div class="text-xs ">
          accent-darken
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['ca']['hex']"
          v-on:change="hexToHsl('ca')"
        >
        <div class="text-xs ">
          content-accent
        </div>
      </div>

      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['d']['hex']"
          v-on:change="hexToHsl('d')"
        >
        <div class="text-xs ">
          default
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c1']['hex']"
          v-on:change="hexToHsl('c1')"
        >
        <div class="text-xs ">
          content-100
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c2']['hex']"
          v-on:change="hexToHsl('c2')"
        >
        <div class="text-xs ">
          content-200
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c3']['hex']"
          v-on:change="hexToHsl('c3')"
        >
        <div class="text-xs ">
          content-300
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c4']['hex']"
          v-on:change="hexToHsl('c4')"
        >
        <div class="text-xs ">
          content-400
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c5']['hex']"
          v-on:change="hexToHsl('c5')"
        >
        <div class="text-xs ">
          content-500
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c6']['hex']"
          v-on:change="hexToHsl('c6')"
        >
        <div class="text-xs ">
          content-600
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c7']['hex']"
          v-on:change="hexToHsl('c7')"
        >
        <div class="text-xs ">
          content-700
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c8']['hex']"
          v-on:change="hexToHsl('c8')"
        >
        <div class="text-xs ">
          content-800
        </div>
      </div>
      <div class="flex flex-col w-full">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['c9']['hex']"
          v-on:change="hexToHsl('c9')"
        >
        <div class="text-xs ">
          content-900
        </div>
      </div>

      <div class="flex flex-col w-full col-span-3">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['in']['hex']"
          v-on:change="hexToHsl('in')"
        >
        <div class="text-xs ">
          info
        </div>
      </div>
      <div class="flex flex-col w-full col-span-3">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['su']['hex']"
          v-on:change="hexToHsl('su')"
        >
        <div class="text-xs ">
          success
        </div>
      </div>
      <div class="flex flex-col w-full col-span-3">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['wa']['hex']"
          v-on:change="hexToHsl('wa')"
        >
        <div class="text-xs ">
          warning
        </div>
      </div>
      <div class="flex flex-col w-full col-span-3">
        <input
          type="color"
          class="block w-full h-14"
          v-model="colorValues['er']['hex']"
          v-on:change="hexToHsl('er')"
        >
        <div class="text-xs ">
          error
        </div>
      </div>
    </div>

    <div class="prose">
<pre><code>--d: {{ colorValues['d']['hsl'] }};
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
--er: {{ colorValues['er']['hsl'] }};</code></pre>
    </div>


  </div>
</template>


<script>
export default {
  data() {
    return {
      colorValues: {
        "d"  : { hsl: "0 0% 100%", hex: "#ffffff"},
        "p1" : { hsl: "259 94% 61%", hex: "#793ef9"},
        "p2" : { hsl: "259 94% 51%", hex: "#570df8"},
        "p3" : { hsl: "259 94% 41%", hex: "#4506cb"},
        "s1" : { hsl: "314 100% 57%", hex: "#ff24cc"},
        "s2" : { hsl: "314 100% 47%", hex: "#f000b8"},
        "s3" : { hsl: "314 100% 37%", hex: "#bd0091"},
        "a1" : { hsl: "174 60% 61%", hex: "#60d7cb"},
        "a2" : { hsl: "174 60% 51%", hex: "#37cdbe"},
        "a3" : { hsl: "174 60% 41%", hex: "#2aa79b"},
        "cp" : { hsl: "0 0% 100%", hex: "#ffffff"},
        "cs" : { hsl: "0 0% 100%", hex: "#ffffff"},
        "ca" : { hsl: "0 0% 100%", hex: "#ffffff"},
        "c1" : { hsl: "220 14% 96%", hex: "#f3f4f6"},
        "c2" : { hsl: "228 14% 93%", hex: "#ebecf0"},
        "c3" : { hsl: "220 15% 84%", hex: "#d0d4dc"},
        "c4" : { hsl: "218 14% 65%", hex: "#99a2b2"},
        "c5" : { hsl: "220 14% 46%", hex: "#657086"},
        "c6" : { hsl: "220 14% 37%", hex: "#515a6c"},
        "c7" : { hsl: "219 14% 28%", hex: "#3d4451"},
        "c8" : { hsl: "222 13% 19%", hex: "#2a2e37"},
        "c9" : { hsl: "223 14% 10%", hex: "#16181d"},
        "in" : { hsl: "207 90% 54%", hex: "#2094f3"},
        "su" : { hsl: "174 100% 29%", hex: "#009485"},
        "wa" : { hsl: "36 100% 50%", hex: "#ff9900"},
        "er" : { hsl: "14 100% 57%", hex: "#ff5724"},
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
