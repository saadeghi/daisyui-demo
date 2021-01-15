<template>
  <div>

    <Wrapper classes="flex flex-col space-y-2" title="select">
      <Select classes="select w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>
    <Wrapper classes="flex flex-col space-y-2" title="select with labels">

      <FormControl class="w-full max-w-xs">
        <label class="label">
          <span class="label-text">Choose your superpower</span>
          <a href="#" class="label-text-alt">
            Pick wisely
          </a>
        </label>
        <Select classes="select w-full">
          <option disabled selected>Choose your superpower</option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </Select>
        <label class="label">
          <a href="#" class="label-text-alt">Cant pick?</a>
          <a href="#" class="label-text-alt">Need hint?</a>
        </label>
      </FormControl>



    <Wrapper classes="flex flex-col space-y-2" title="select sizes">
      <Select classes="select select-lg w-full max-w-xs">
        <option disabled selected>Large</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
      <Select classes="select w-full max-w-xs">
        <option disabled selected>Normal</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
      <Select classes="select select-sm w-full max-w-xs">
        <option disabled selected>Small</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
      <Select classes="select select-xs w-full max-w-xs">
        <option disabled selected>Tiny</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>


    <Wrapper classes="flex flex-col space-y-2" title="select diabled">
      <Select classes="select w-full max-w-xs" disabled>
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    </Wrapper>
  </div>
</template>
