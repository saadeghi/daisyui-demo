<template>
  <div>

    <Wrapper classes="flex items-start flex-col space-y-2" title="button group">
      <div class="btn-group" data-toggle="buttons">
        <Button class="lg active">Large</Button>
        <Button class="lg">Large</Button>
        <Button class="lg">Large</Button>
        <Button class="lg">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="active">Normal</Button>
        <Button class="">Normal</Button>
        <Button class="">Normal</Button>
        <Button class="">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="sm active">Small</Button>
        <Button class="sm">Small</Button>
        <Button class="sm">Small</Button>
        <Button class="sm">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="xs active">Tiny</Button>
        <Button class="xs">Tiny</Button>
        <Button class="xs">Tiny</Button>
        <Button class="xs">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
    </Wrapper>


    <Wrapper classes="flex items-start flex-col space-y-2" title="button group outline">
      <div class="btn-group" data-toggle="buttons">
        <Button class="outline lg active">Large</Button>
        <Button class="outline lg">Large</Button>
        <Button class="outline lg">Large</Button>
        <Button class="outline lg">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="outline active">Normal</Button>
        <Button class="outline">Normal</Button>
        <Button class="outline">Normal</Button>
        <Button class="outline">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="outline sm active">Small</Button>
        <Button class="outline sm">Small</Button>
        <Button class="outline sm">Small</Button>
        <Button class="outline sm">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="outline xs active">Tiny</Button>
        <Button class="outline xs">Tiny</Button>
        <Button class="outline xs">Tiny</Button>
        <Button class="outline xs">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
    </Wrapper>



    <Wrapper classes="flex items-start flex-col space-y-2" title="button group with radio buttons">
      <div class="btn-group" data-toggle="buttons">
        <input class="btn" type="radio" name="options" id="option1" data-title="1">
        <input class="btn" type="radio" name="options" id="option2" data-title="2" checked >
        <input class="btn" type="radio" name="options" id="option3" data-title="3">
        <input class="btn" type="radio" name="options" id="option4" data-title="4">
        <input class="btn" type="radio" name="options" id="option5" data-title="5">
      </div>
    </Wrapper>

  </div>
</template>
