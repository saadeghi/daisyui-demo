<template>
  <div>
    <Wrapper title="input" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text" type="text" placeholder="username" />
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text ghost" type="text" placeholder="username" />
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text bordered" type="text" placeholder="username" />
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input helper texts" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
            <a href="#" class="label-text-alt">
              Need help?
            </a>
          </label>
          <Input class="input-text bordered" type="text" placeholder="username" />
          <label class="label">
            <a href="#" class="label-text-alt">Forgot username?</a>
            <a href="#" class="label-text-alt">Are you sure?</a>
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input states" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text input-text-info bordered" type="text" placeholder="username" />
          <label class="label">
            <span class="label-text-alt">Username is valid</span>
          </label>
        </FormControl>
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text input-text-success bordered" type="text" placeholder="username" />
          <label class="label">
            <span class="label-text-alt">Username is valid</span>
          </label>
        </FormControl>
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text input-text-warning bordered" type="text" placeholder="username" />
          <label class="label">
            <span class="label-text-alt">Username be more than 3 characters</span>
          </label>
        </FormControl>
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input-text input-text-error bordered" type="text" placeholder="username" />
          <label class="label">
            <span class="label-text-alt">Username is incorrect</span>
          </label>
        </FormControl>
      </div>
    </Wrapper>
  </div>
</template>
