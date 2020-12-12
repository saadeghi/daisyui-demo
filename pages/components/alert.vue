<template>
  <div>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <Icon glyph="info" class="w-6 ml-2" color="#2196f3" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
    </Wrapper>

    <Wrapper title="alert state: info" classes="flex flex-col space-y-2">
      <Alert class="info">
        <Icon glyph="info" class="w-6 ml-2 stroke-current" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: success" classes="flex flex-col space-y-2">
      <Alert class="success">
        <Icon glyph="folder" class="w-6 ml-2 stroke-current" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: warning" classes="flex flex-col space-y-2">
      <Alert class="warning">
        <Icon glyph="warning" class="w-6 ml-2 stroke-current" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: error" classes="flex flex-col space-y-2">
      <Alert class="error">
        <Icon glyph="invalid" class="w-6 ml-2 stroke-current" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
      </Alert>
    </Wrapper>

    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        <Button classes="sm ghost mr-2">Cancel</Button>
        <Button classes="sm primary">Apply</Button>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <Icon glyph="invalid" class="w-6 ml-2" color="#ff5722" />
        <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        <Button classes="sm ghost">
          <Icon glyph="bell" class="inline-block w-4 mr-2 stroke-current" />
          Remind me later
        </Button>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <Icon glyph="bell" class="w-6 ml-2" color="#009688" />
        <label>
          <h4>Lorem ipsum dolor sit!</h4>
          <p class="text-sm text-content-400">Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!</p>
        </label>
        <Button class="sm ghost square">
          <Icon glyph="dots" class="w-6 stroke-current" />
        </Button>
      </Alert>
    </Wrapper>
  </div>
</template>
