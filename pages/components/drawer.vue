<template>
  <div>

    <Wrapper title="sliding drawer menu" classes="flex flex-col space-y-2">
      <div class="overflow-hidden rounded-lg shadow bg-content-100 drawer h-52">
        <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
        <div class="flex items-center justify-center drawer-content">
          <label class="btn btn-primary drawer-button" for="my-drawer">open menu</label>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer"></label>
          <Menu class="max-w-xs p-4 bg-default text-content-700">
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
