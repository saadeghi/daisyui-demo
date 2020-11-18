<template>
  <div>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <Icon glyph="info" class="w-6 ml-2" color="#2196f3" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
      <Alert>
        <Icon glyph="warning" class="w-6 ml-2" color="#ff5722" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
      <Alert>
        <Icon glyph="arrow" class="w-6 ml-2" color="#607d8b" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        <div class="btn ghost square">
          <Icon glyph="close" class="w-6 stroke-current" />
        </div>
      </Alert>
      <Alert>
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        <Button classes="ghost mr-2">Cancel</Button>
        <Button classes="primary">Apply</Button>
      </Alert>
      <Alert>
        <Icon glyph="invalid" class="w-6 ml-2" color="#ff5722" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        <Button classes="ghost">
          <Icon glyph="bell" class="inline-block w-4 mr-2 stroke-current" />
          Remind me later
        </Button>
      </Alert>
      <Alert>
        <Icon glyph="bell" class="w-6 ml-2" color="#009688" />
        <label>
          <h4>Lorem ipsum dolor sit!</h4>
          <p class="text-sm text-content-400">Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!</p>
        </label>
        <div class="btn ghost square">
          <Icon glyph="dots" class="w-6 stroke-current" />
        </div>
      </Alert>
    </Wrapper>
  </div>
</template>
