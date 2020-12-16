<template>
  <div>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-content">
          <Icon glyph="info" class="w-6 mx-2" color="#2196f3" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>

    <Wrapper title="alert state: info" classes="flex flex-col space-y-2">
      <Alert class="info">
        <div class="alert-content">
          <Icon glyph="info" class="w-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: success" classes="flex flex-col space-y-2">
      <Alert class="success">
        <div class="alert-content">
          <Icon glyph="folder" class="w-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: warning" classes="flex flex-col space-y-2">
      <Alert class="warning">
        <div class="alert-content">
          <Icon glyph="warning" class="w-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: error" classes="flex flex-col space-y-2">
      <Alert class="error">
        <div class="alert-content">
          <Icon glyph="invalid" class="w-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>

    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-content">
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="alert-action">
          <Button classes="sm ghost mr-2">Cancel</Button>
          <Button classes="sm primary">Apply</Button>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-content">
          <Icon glyph="invalid" class="w-6 mx-2" color="#ff5722" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="alert-action">
          <Button classes="sm ghost">
            <Icon glyph="bell" class="inline-block w-4 mr-2 stroke-current" />
            Remind me later
          </Button>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-content">
          <Icon glyph="bell" class="flex-shrink-0 w-6 mx-2" color="#009688" />
          <label>
            <h4>Lorem ipsum dolor sit!</h4>
            <p class="text-sm text-content-400">
              Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor
              sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur
              adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum
              dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet,
              consectetur adip!
            </p>
          </label>
        </div>
        <div class="alert-action">
          <Button class="sm ghost square">
            <Icon glyph="dots" class="w-6 stroke-current" />
          </Button>
        </div>
      </Alert>
    </Wrapper>
  </div>
</template>
