<template>
  <div>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="px-2 mx-2 navbar-grow">
            <span class="text-lg font-bold">
              Navbar with start and end icons
            </span>
          </div>
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="dots" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="back" class="inline-block w-6 h-6 stroke-current text-success" />
            </Button>
          </div>
          <div class="px-2 mx-2 navbar-grow">
            <span class="text-lg font-bold">
              Navbar with start icon
            </span>
          </div>
        </Navbar>

    </Wrapper>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="px-2 mx-2 navbar-grow">
            <span class="text-lg font-bold">
              DaisyUI
            </span>
          </div>
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="close" class="inline-block w-6 h-6 stroke-current text-error" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="px-2 mx-2 navbar-grow">
            <span class="text-lg font-bold">
              DaisyUI
            </span>
          </div>
          <div class="navbar-grow-0">
            <FormControl>
              <Input type="text" class="input input-ghost" placeholder="Search" />
            </FormControl>
          </div>
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="navbar-grow-0">
            <Avatar classes="rounded-full w-10 h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32" />
            </Avatar>
          </div>
        </Navbar>

    </Wrapper>


    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="px-2 mx-2 navbar-grow-0">
            <span class="text-lg font-bold">
              DaisyUI
            </span>
          </div>
          <div class="px-2 mx-2 navbar-grow">
            <div class="flex items-stretch">
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
              <Icon glyph="heart" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>



    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="px-2 mx-2 navbar-grow">
            <span class="text-lg font-bold">
              DaisyUI
            </span>
          </div>
          <div class="px-2 mx-2 navbar-grow-0">
            <div class="flex items-stretch">
              <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
                <Icon glyph="heart" class="inline-block w-5 mr-2 stroke-current" />
                Likes
              </a>
              <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
                <Icon glyph="bell" class="inline-block w-5 mr-2 stroke-current" />
                Notifications
              </a>
              <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
                <Icon glyph="folder" class="inline-block w-5 mr-2 stroke-current" />
                Files
              </a>
              <a class="btn btn-ghost btn-sm rounded-btn hover:text-content-100">
                <Icon glyph="code" class="inline-block w-5 mr-2 stroke-current" />
                Config
              </a>
            </div>

          </div>
          <div class="navbar-grow-0">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>

    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-content-800 text-content-100 rounded-box">
          <div class="px-2 mx-2 navbar-grow-0">
            <span class="text-lg font-bold">
              DaisyUI
            </span>
          </div>
          <div class="flex justify-center px-2 mx-2 navbar-grow">
            <div class="flex items-stretch">
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

    </Wrapper>




  </div>
</template>
