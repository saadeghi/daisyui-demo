<template>
  <div>
    <Wrapper title="input" classes="flex flex-col space-y-2 w-48">
      <div class="p-6 card w-92">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Username</span>
            <Checkbox class="" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input primary" classes="flex flex-col space-y-2 w-48">
      <div class="p-6 card w-92">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Username</span>
            <Checkbox classes="checkbox-primary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input secondary" classes="flex flex-col space-y-2 w-48">
      <div class="p-6 card w-92">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Username</span>
            <Checkbox classes="checkbox-secondary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="input accent" classes="flex flex-col space-y-2 w-48">
      <div class="p-6 card w-92">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Username</span>
            <Checkbox classes="checkbox-accent" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
  </div>
</template>
