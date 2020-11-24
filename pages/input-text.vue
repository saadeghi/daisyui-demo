<template>
  <div>
    <Wrapper title="input" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label>
            <span class="label-text">Username</span>
          </label>
          <Input type="text" placeholder="username" />
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input helper texts" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl>
          <label>
            <span class="label-text">Username</span>
            <a href="#" class="label-text-alt">
              Need help?
            </a>
          </label>
          <Input type="text" placeholder="username" />
          <label>
            <a href="#" class="label-text-alt">Forgot username?</a>
            <a href="#" class="label-text-alt">Are you sure?</a>
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input states" classes="flex flex-col space-y-2 w-92">
      <div class="p-10 w-96 bg-content-100 rounded-box">
        <FormControl class="info">
          <label>
            <span class="label-text">Username</span>
          </label>
          <Input type="text" placeholder="username" />
          <label>
            <span class="label-text-alt">Username is valid</span>
          </label>
        </FormControl>
        <FormControl class="success">
          <label>
            <span class="label-text">Username</span>
          </label>
          <Input type="text" placeholder="username" />
          <label>
            <span class="label-text-alt">Username is valid</span>
          </label>
        </FormControl>
        <FormControl class="warning">
          <label>
            <span class="label-text">Username</span>
          </label>
          <Input type="text" placeholder="username" />
          <label>
            <span class="label-text-alt">Username be more than 3 characters</span>
          </label>
        </FormControl>
        <FormControl class="error">
          <label>
            <span class="label-text">Username</span>
          </label>
          <Input type="text" placeholder="username" />
          <label>
            <span class="label-text-alt">Username is incorrect</span>
          </label>
        </FormControl>
      </div>
    </Wrapper>
  </div>
</template>
