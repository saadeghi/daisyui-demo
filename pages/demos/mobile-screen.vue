<template>
<div class="mockup-phone">
  <div class="camera"></div>
    <div class="display">
      <div
        class="relative overflow-hidden shadow rounded-box artboard phone-1"
      >
        <div class="flex flex-col items-center h-full text-center">

          <Navbar class="flex-none w-full pt-6 bg-neutral text-base-200">
            <div class="flex-none">
              <Button classes="btn-circle btn-ghost">
                <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
              </Button>
            </div>
            <div class="flex-1 px-2 mx-2">
              <span class="text-lg font-bold">

              </span>
            </div>
            <div class="flex-none">
              <Button classes="btn-circle btn-ghost">
                <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
              </Button>
            </div>
          </Navbar>

          <div class="flex flex-col items-center justify-center flex-1 h-full p-4 bg-base-200">
            <div class="avatar online">
              <div class="w-32 h-32 rounded-full">
                <img
                  src="https://i.pravatar.cc/128?img=32"
                />
              </div>
            </div>
            <div class="my-4 text-2xl font-bold">
              Jotaro Kujo
            </div>
            <p>Quidem eos vel exercitationem repellendus natus.</p>
            <Button classes="btn btn-outline btn-primary btn-sm mt-4">Follow</Button>
          </div>


          <Menu
            class="justify-center flex-none w-full px-3 pb-4 horizontal bg-base-100"
          >
            <MenuItem>
              <a>
                <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon glyph="code" class="inline-block w-6 h-6 stroke-current" />
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon glyph="folder" class="inline-block w-6 h-6 stroke-current" />
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon glyph="info" class="inline-block w-6 h-6 stroke-current" />
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>
