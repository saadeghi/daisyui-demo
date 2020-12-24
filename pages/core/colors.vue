<template>
  <div>
    <div class="text-content-800">
      <Wrapper title="Colors and theming" nocode>
        <div class="pt-10 text-xl font-bold text-content-900">Read the documents</div>
        <div>Read everything about DaisyUI colors and theming:
          <a class="inline-block btn btn-sm btn-primary" target="_blank" href="https://github.com/saadeghi/daisyui/blob/master/docs/theming.md">Theming guide ↗︎</a>
        </div>
        <div class="pt-10 text-xl font-bold text-content-900">Customize colors!</div>
        <div>
        Click each color to change it, then use the
        <a class="inline-block btn btn-sm" href="#output">generated theme ↓</a>
        on your site
        </div>
      </Wrapper>

      <div class="w-56 card" v-if="showCustomThemeTogglerSwitch">
        <div class="form-control">
          <label class="cursor-pointer label">
            <span class="label-text">Show customized colors</span>
            <div>
              <input type="checkbox" checked="checked" class="toggle toggle-primary" v-model="applyCustomThemeToSite">
              <span class="toggle-mark"></span>
            </div>
          </label>
        </div>
      </div>

    </div>
    <div id="color-panel">
      <Wrapper title="Brand colors" classes="grid grid-cols-1 md:grid-cols-3 gap-6" nocode>

        <div class="block h-16 md:h-40" v-for="(brand, index) in colors.brand">
          <div class="grid rounded h-14 md:h-32">
            <div class="z-10 flex items-center justify-center col-start-1 row-start-1 place-self-center">
              <label :class="'transform transition-all cursor-pointer hover:-translate-y-1 font-black tracking-widest uppercase ' + colors['contentBrand'][index]['class']" :for="colors['contentBrand'][index]['name']">
                {{ index }}
              </label>
              <input
                type="color"
                :id="colors['contentBrand'][index]['name']"
                class="absolute invisible h-0 opacity-0 top-14 md:top-32"
                v-model="colorValues[colors['contentBrand'][index]['name']]['hex']"
                v-on:change="hexToHsl(colors['contentBrand'][index]['name']); applyCustomThemeToSite = true; showCustomThemeTogglerSwitch = true; "
              >
            </div>
            <div class="flex col-start-1 row-start-1">
              <div v-for="(shade, index) in brand" class="relative flex w-1/3 col-start-1 row-start-1">
                <label :class="'block w-full h-14 md:h-32 transform transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1 '+ shade.class + ((index === 0) ? ' rounded-l ' : '') + ((index === 2) ? ' rounded-r ' : '')" :for="shade.name"></label>
                <input
                  type="color"
                  :id="shade.name"
                  class="absolute invisible h-0 opacity-0 top-14 md:top-32"
                  v-model="colorValues[shade.name]['hex']"
                  v-on:change="hexToHsl(shade.name); applyCustomThemeToSite = true; showCustomThemeTogglerSwitch = true; "
                >
              </div>
            </div>
          </div>
          <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ index }}</div>
        </div>

      </Wrapper>
      <Wrapper title="content colors" classes="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6" nocode>
        <div class="block h-16 md:h-40">
          <label class="block overflow-hidden transition-all transform rounded shadow-lg cursor-pointer hover:-translate-y-1 h-14 md:h-32 bg-default" for="d"></label>
          <input
            type="color"
            id="d"
            class="absolute invisible h-0 opacity-0"
            v-model="colorValues['d']['hex']"
            v-on:change="hexToHsl('d'); applyCustomThemeToSite = true; showCustomThemeTogglerSwitch = true; "
          >
          <div class="pt-2 mb-4 text-xs uppercase opacity-25">default</div>
        </div>
        <div class="block h-16 md:h-40" v-for="(color, index) in colors.content">
          <label :class="'block h-14 md:h-32 overflow-hidden rounded shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all ' + color.class" :for="color.name"></label>
          <input
            type="color"
            :id="color.name"
            class="absolute invisible h-0 opacity-0"
            v-model="colorValues[color.name]['hex']"
            v-on:change="hexToHsl(color.name); applyCustomThemeToSite = true; showCustomThemeTogglerSwitch = true; "
          >
          <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color.title }}</div>
        </div>
      </Wrapper>
      <Wrapper title="State colors" classes="grid grid-cols-2 md:grid-cols-4 gap-6" nocode>
        <div class="block h-16 md:h-40" v-for="(color, index) in colors.state">
          <label :class="'block h-14 md:h-16 overflow-hidden rounded shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all ' + color.class" :for="color.name"></label>
          <input
            type="color"
            :id="color.name"
            class="absolute invisible h-0 opacity-0"
            v-model="colorValues[color.name]['hex']"
            v-on:change="hexToHsl(color.name); applyCustomThemeToSite = true; showCustomThemeTogglerSwitch = true; "
          >
          <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color.title }}</div>
        </div>
      </Wrapper>
    </div>
















<div class="text-xl font-bold text-content-900">Components preview</div>
<div class="mb-10">
See how components will look like using you color palette
</div>


<div>
  <div class="grid grid-cols-1 gap-6 p-10 xl:grid-cols-3 bg-content-100 rounded-box">






    <Navbar class="col-span-1 shadow-lg xl:col-span-3 bg-content-800 text-content-100 rounded-box">
      <div class="navbar-grow-0">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
      <div class="px-2 mx-2 navbar-grow-0">
        <span class="text-lg font-bold">
          DaisyUI
        </span>
      </div>
      <div class="flex justify-center px-2 mx-2 navbar-grow">
        <div class="items-stretch hidden lg:flex">
          <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
            Home
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
            Portfolio
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
            About
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
            Contact
          </a>
        </div>

      </div>
      <div class="navbar-grow-0">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
      <div class="navbar-grow-0">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
    </Navbar>


      <Card class="shadow-lg compact side bg-default">
        <div class="flex-row items-center space-x-4 card-body">
          <div>
            <Avatar classes="rounded-full w-14 h-14 shadow">
              <img src="https://i.pravatar.cc/500?img=32" />
            </Avatar>
          </div>
          <div class="">
            <h2 class="card-title">Janis Johnson</h2>
            <p class="text-content-400">Accounts Agent</p>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-default">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="card-title">Meredith Mayer</h2>
            <p class="text-content-400">Data Liaison</p>
          </div>
          <div class="flex-0">
            <Button classes="btn-sm">Follow</Button>
          </div>
        </div>
      </Card>





      <Card class="row-span-3 shadow-lg compact bg-default">
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="flex-row items-center space-x-4 card-body">
          <div class="">
            <h2 class="card-title">Karolann Collins</h2>
            <p class="text-content-400">Direct Interactions Liaison</p>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-default">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="card-title text-primary">4,600</h2>
            <p class="text-content-400">Page views</p>
          </div>
          <div class="flex space-x-2 flex-0">
            <Button classes="btn-sm btn-square">
              <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
            </Button>
            <Button classes="btn-sm btn-square">
              <Icon
                glyph="dots"
                class="inline-block w-6 h-6 stroke-current"
              />
            </Button>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-default">
        <div class="flex-row items-center space-x-4 card-body">
          <label class="flex-0">
            <Toggle classes="toggle-primary" />
          </label>
          <div class="flex-1">
            <h2 class="card-title">Enable Notifications</h2>
            <p class="text-content-400">To get latest updates</p>
          </div>
        </div>
      </Card>




      <Card class="col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-default">
        <div class="card-body">
          <h2 class="my-4 text-4xl font-bold card-title">Top 10 UI Components</h2>
          <div class="mb-4 space-x-2 card-actions">
            <Badge class="badge-ghost">Colors</Badge>
            <Badge class="badge-ghost">UI Design</Badge>
            <Badge class="badge-ghost">Creativity</Badge>
          </div>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-end space-x-2 card-actions">
            <Button classes="btn-primary">Login</Button>
            <Button classes="">Register</Button>
          </div>
        </div>
      </Card>




      <Card class="shadow-lg compact side bg-default">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="flex card-title">
              <button class="btn btn-ghost btn-sm btn-circle loading"></button>
              Downloading...
            </h2>
            <progress class="progress progress-secondary" value="70" max="100"></progress>
          </div>
          <div class="flex-0">
            <button class="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </Card>







      <Card class="shadow-lg compact side bg-default">
        <div class="flex-row items-center space-x-4 card-body">
          <label class="cursor-pointer label">
            <Checkbox classes="checkbox-accent" checked />
            <span class="mx-4 label-text">Enable Autosave</span>
          </label>
        </div>
      </Card>




      <Menu class="row-span-3 p-4 shadow-lg bg-default text-content-700 rounded-box">
        <MenuItem class="menu-title">
          <span>
            Menu Title
          </span>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="eye" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="code" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Item with icon
          </a>
        </MenuItem>
      </Menu>


      <Alert class="col-span-1 xl:col-span-2 bg-default">
        <div class="alert-grow">
          <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="alert-grow-0">
          <Button classes="btn-sm btn-ghost mr-2">Cancel</Button>
          <Button classes="btn-sm btn-primary">Apply</Button>
        </div>
      </Alert>

      <Alert class="col-span-1 xl:col-span-2 alert-info">
        <div class="alert-grow">
          <Icon glyph="info" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>

      <Alert class="col-span-1 xl:col-span-2 alert-success">
        <div class="alert-grow">
          <Icon glyph="folder" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>


  </div>
</div>

















<div id="output" class="pt-10 text-xl font-bold text-content-900">CSS output</div>
<div>
This is your custom color theme. add it to your CSS file!
</div>
<div class="mt-6 prose-sm prose">
<pre><code>:root {
<template v-for="(color, index) in colorValues">  --{{ index }}: {{ color.hsl }};
</template>}</code></pre>
</div>


<style v-if="applyCustomThemeToSite" v-for="(color, index) in colorValues">
:root {
  --{{ index }}: {{ color.hsl }};
}
</style>




</div>
</template>


<script>
export default {
  data() {
    return {
      showCustomThemeTogglerSwitch: false,
      applyCustomThemeToSite: false,
      colorValues: {
        "d"  : { hsl: "0 0% 100%", hex: "#ffffff" },
        "p1" : { hsl: "259 94% 61%", hex: "#793ef9" },
        "p2" : { hsl: "259 94% 51%", hex: "#570df8" },
        "p3" : { hsl: "259 94% 41%", hex: "#4506cb" },
        "s1" : { hsl: "314 100% 57%", hex: "#ff24cc" },
        "s2" : { hsl: "314 100% 47%", hex: "#f000b8" },
        "s3" : { hsl: "314 100% 37%", hex: "#bd0091" },
        "a1" : { hsl: "174 60% 61%", hex: "#60d7cb" },
        "a2" : { hsl: "174 60% 51%", hex: "#37cdbe" },
        "a3" : { hsl: "174 60% 41%", hex: "#2aa79b" },
        "cp" : { hsl: "0 0% 100%", hex: "#ffffff" },
        "cs" : { hsl: "0 0% 100%", hex: "#ffffff" },
        "ca" : { hsl: "0 0% 100%", hex: "#ffffff" },
        "c1" : { hsl: "220 14% 96%", hex: "#f3f4f6" },
        "c2" : { hsl: "228 14% 93%", hex: "#ebecf0" },
        "c3" : { hsl: "220 15% 84%", hex: "#d0d4dc" },
        "c4" : { hsl: "218 14% 65%", hex: "#99a2b2" },
        "c5" : { hsl: "220 14% 46%", hex: "#657086" },
        "c6" : { hsl: "220 14% 37%", hex: "#515a6c" },
        "c7" : { hsl: "219 14% 28%", hex: "#3d4451" },
        "c8" : { hsl: "222 13% 19%", hex: "#2a2e37" },
        "c9" : { hsl: "223 14% 10%", hex: "#16181d" },
        "in" : { hsl: "207 90% 54%", hex: "#2094f3" },
        "su" : { hsl: "174 100% 29%", hex: "#009485" },
        "wa" : { hsl: "36 100% 50%", hex: "#ff9900" },
        "er" : { hsl: "14 100% 57%", hex: "#ff5724" },
      },
      colors: {
        'brand': {
          'primary': [
            { name: 'p1', class: 'bg-primary-lighten' },
            { name: 'p2', class: 'bg-primary' },
            { name: 'p3', class: 'bg-primary-darken' },
          ],
          'secondary': [
            { name: 's1', class: 'bg-secondary-lighten' },
            { name: 's2', class: 'bg-secondary' },
            { name: 's3', class: 'bg-secondary-darken' },
          ],
          'accent': [
            { name: 'a1', class: 'bg-accent-lighten' },
            { name: 'a2', class: 'bg-accent' },
            { name: 'a3', class: 'bg-accent-darken' },
          ],
        },
        'contentBrand': {
          'primary': {name: 'cp',class: 'text-content-primary' },
          'secondary': {name: 'cs',class: 'text-content-secondary' },
          'accent': {name: 'ca',class: 'text-content-accent' },
        },
        'content': [
          { title: '100', name: 'c1', class: 'bg-content-100' },
          { title: '200', name: 'c2', class: 'bg-content-200' },
          { title: '300', name: 'c3', class: 'bg-content-300' },
          { title: '400', name: 'c4', class: 'bg-content-400' },
          { title: '500', name: 'c5', class: 'bg-content-500' },
          { title: '600', name: 'c6', class: 'bg-content-600' },
          { title: '700', name: 'c7', class: 'bg-content-700' },
          { title: '800', name: 'c8', class: 'bg-content-800' },
          { title: '900', name: 'c9', class: 'bg-content-900' },
        ],
        'state': [
          { title: 'info', name: 'in', class: 'bg-info' },
          { title: 'success', name: 'su', class: 'bg-success' },
          { title: 'warning', name: 'wa', class: 'bg-warning' },
          { title: 'error', name: 'er', class: 'bg-error' },
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
