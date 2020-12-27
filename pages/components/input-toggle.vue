<template>
  <div>
    <Wrapper title="toggle" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle class="" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle primary" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle classes="toggle-primary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle secondary" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle classes="toggle-secondary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle accent" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle classes="toggle-accent" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
  </div>
</template>
