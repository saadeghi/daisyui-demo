<template>
  <div
    class="relative overflow-hidden shadow bg-content-100 rounded-box artboard phone-1"
  >
    <div class="flex flex-col items-center h-full text-center">

      <Navbar class="flex-none w-full bg-content-800 text-content-100">
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

      <div class="flex flex-col items-center justify-center flex-1 h-full p-4">
        <div class="avatar online">
          <div class="w-32 h-32 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
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
        class="justify-center flex-none w-full px-3 horizontal bg-default"
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
</template>
