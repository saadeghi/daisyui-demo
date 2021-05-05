<template>
  <div class="mb-60">

    <Wrapper title="dropdown" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-end">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-top" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-top">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-top dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-top dropdown-end">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-left" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-left">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-left dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-left dropdown-end">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-right" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-right">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper title="dropdown dropdown-right dropdown-end" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-right dropdown-end">
        <button class="m-1 btn" tabindex="0">Dropdown</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-hover" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-hover">
        <button class="m-1 btn" tabindex="0">open on hover</button>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </Wrapper>

    <Wrapper title="dropdown dropdown-open" classes="flex justify-center bg-base-200 py-6 rounded-box">
      <div class="dropdown dropdown-open">
        <button class="m-1 btn" tabindex="0">force open</button>
        <div class="w-64 shadow card dropdown-content bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">This is a card!</h2>
            <p>you can use any element with `dropdown-content` class.</p>
          </div>
        </div>
      </div>
    </Wrapper>

  </div>
</template>
