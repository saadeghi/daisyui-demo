<template>
  <div>
    <Wrapper title="veritcal" classes="flex flex-col space-y-2">
      <div class="p-10 w-96 bg-content-400 rounded-2xl">
        <Menu class="py-3 shadow-2xl rounded-2xl">
          <MenuItem>
            <a>
              Item with link
            </a>
          </MenuItem>
          <MenuItem class="bordered">
            <a>
              Bordered
            </a>
          </MenuItem>
          <MenuItem class="hover-bordered">
            <a>
              Bordered with link and a very very very very very long text
            </a>
          </MenuItem>
          <MenuItem class="disabled">
            <a>
              Item with disabled class
            </a>
          </MenuItem>
          <MenuItem>
            <span>
              Item with a span instead of link
            </span>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon
                glyph="eye"
                class="inline-block w-6 mr-2 stroke-current"
              />
              Item with icon
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>
    <Wrapper title="horizontal" classes="flex flex-col space-y-2">
      <div class="p-10 bg-content-400 rounded-2xl">
        <Menu class="items-stretch px-3 shadow-2xl horizontal rounded-2xl">
          <MenuItem>
            <a>
              With link
            </a>
          </MenuItem>
          <MenuItem class="bordered">
            <a>
              Bordered
            </a>
          </MenuItem>
          <MenuItem>
            <span>
              With a span
            </span>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon
                glyph="eye"
                class="inline-block w-6 mr-2 stroke-current"
              />
              With icon
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>
    <Wrapper title="veritcal with colors" classes="flex flex-col space-y-2">
      <div class="p-10 w-96 bg-content-400 rounded-2xl">
        <Menu class="rounded-2xl">
          <MenuItem class="active">
            <a>
              active color
            </a>
          </MenuItem>
          <MenuItem class="primary">
            <a>
              primary color
            </a>
          </MenuItem>
          <MenuItem class="secondary">
            <a>
              secondary color
            </a>
          </MenuItem>
          <MenuItem class="accent">
            <a>
              accent color
            </a>
          </MenuItem>
          <MenuItem class="ghost">
            <a>
              ghost color
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>

    <Wrapper title="veritcal with icon" classes="flex flex-col space-y-2">
      <div class="p-10 w-96 bg-content-400 rounded-2xl">
        <Menu class="w-16 py-3 shadow-2xl rounded-2xl">
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
        </Menu>
      </div>
    </Wrapper>


    <Wrapper title="horizontal with icon" classes="flex flex-col space-y-2">
      <div class="p-10 w-96 bg-content-400 rounded-2xl">
        <Menu class="px-3 shadow-2xl rounded-2xl horizontal">
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
        </Menu>
      </div>
    </Wrapper>

    <Wrapper title="veritcal with submenu" classes="flex flex-col space-y-2">
      <div class="p-10 w-96 bg-content-400 rounded-2xl">
        <Menu class="py-3 shadow-2xl rounded-2xl">
          <MenuItem>
            <a>
              Level 1
            </a>
          </MenuItem>
          <MenuItem>
            <a>
              Level 1
            </a>
            <Menu>
              <MenuItem>
                <a>
                  Level 2
                </a>
              </MenuItem>
              <MenuItem>
                <a>
                  Level 2
                </a>
                <Menu>
                  <MenuItem>
                    <a>
                      Level 3
                    </a>
                  </MenuItem>
                </Menu>
              </MenuItem>
              <MenuItem>
                <a>
                  Level 2
                </a>
              </MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>
  </div>
</template>
