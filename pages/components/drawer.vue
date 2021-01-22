<template>
  <div>

    <Wrapper title="sliding drawer menu" classes="flex flex-col space-y-2">
      <div class="overflow-hidden rounded-lg shadow bg-content-100 drawer h-52">
        <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
        <div class="flex flex-col items-center justify-center drawer-content">
          <label class="btn btn-primary drawer-button" for="my-drawer">open menu</label>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer"></label>
          <Menu class="p-4 w-80 bg-default text-content-700">
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="sliding drawer for mobile only" classes="flex flex-col space-y-2">
      <div class="overflow-hidden rounded-lg shadow bg-content-100 drawer drawer-mobile h-52">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
        <div class="flex flex-col items-center justify-center drawer-content">
          <label class="mb-4 btn btn-primary drawer-button lg:hidden" for="my-drawer-2">open menu</label>
          <div class="hidden text-xs text-center lg:block">Menu is always open on desktop size.<br>Resize the browser to see toggle button on mobile size</div>
          <div class="text-xs text-center lg:hidden">Menu can be toggled on mobile size.<br>Resize the browser to see fixed sidebar on desktop size</div>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer-2"></label>
          <Menu class="p-4 w-80 bg-default text-content-700">
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Wrapper>

  </div>
</template>
