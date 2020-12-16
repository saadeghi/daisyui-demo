<template>
  <div class="relative overflow-hidden bg-content-100 rounded-box artboard phone-1">
    <div class="flex flex-col items-center p-10 text-center">
      <div class="avatar online">
        <div class="w-32 h-32 rounded-full">
          <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80">
        </div>
      </div>
      <div class="text-2xl font-bold">
        Jotaro Kujo
      </div>
      <p>Quidem eos vel exercitationem repellendus natus.</p>
      <Button classes="btn outline sm mt-4">Follow</Button>
    </div>
    <Menu class="absolute bottom-0 justify-center w-full px-3 horizontal bg-content-300">
      <MenuItem>
        <a>
          <Icon glyph="bell" class="inline-block w-6 stroke-current" />
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon glyph="code" class="inline-block w-6 stroke-current" />
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon glyph="eye" class="inline-block w-6 stroke-current" />
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon glyph="folder" class="inline-block w-6 stroke-current" />
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon glyph="info" class="inline-block w-6 stroke-current" />
        </a>
      </MenuItem>
    </Menu>
  </div>
</template>
