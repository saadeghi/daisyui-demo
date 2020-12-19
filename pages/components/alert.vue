<template>
  <div>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-grow">
          <Icon glyph="info" class="w-6 h-6 mx-2" color="#2196f3" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>

    <Wrapper title="alert state: info" classes="flex flex-col space-y-2">
      <Alert class="alert-info">
        <div class="alert-grow">
          <Icon glyph="info" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: success" classes="flex flex-col space-y-2">
      <Alert class="alert-success">
        <div class="alert-grow">
          <Icon glyph="folder" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: warning" classes="flex flex-col space-y-2">
      <Alert class="alert-warning">
        <div class="alert-grow">
          <Icon glyph="warning" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: error" classes="flex flex-col space-y-2">
      <Alert class="alert-error">
        <div class="alert-grow">
          <Icon glyph="invalid" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>

    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-grow">
          <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="alert-grow-0">
          <Button classes="btn-sm btn-ghost mr-2">Cancel</Button>
          <Button classes="btn-sm btn-primary">Apply</Button>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-grow">
          <Icon glyph="invalid" class="w-6 h-6 mx-2" color="#ff5722" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="alert-grow-0">
          <Button classes="btn-sm btn-ghost">
            <Icon glyph="bell" class="inline-block w-4 mr-2 stroke-current" />
            Remind me later
          </Button>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="alert-grow">
          <Icon glyph="bell" class="flex-shrink-0 w-6 h-6 mx-2" color="#009688" />
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
        <div class="alert-grow-0">
          <Button class="btn-sm btn-ghost btn-square">
            <Icon glyph="dots" class="w-6 h-6 stroke-current" />
          </Button>
        </div>
      </Alert>
    </Wrapper>
  </div>
</template>
