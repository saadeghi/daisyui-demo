<template>
  <div>

    <Wrapper classes="flex items-start space-x-2" title="button">
      <Button classes="">neutral</Button>
      <Button classes="primary">primary</Button>
      <Button classes="secondary">secondary</Button>
      <Button classes="accent">accent</Button>
      <Button classes="ghost">ghost</Button>
      <Button classes="link">link</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="outline button">
      <Button classes="outline">neutral</Button>
      <Button classes="outline primary">primary</Button>
      <Button classes="outline secondary">secondary</Button>
      <Button classes="outline accent">accent</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="disabled button">
      <Button disabled>disabled neutral</Button>
      <Button disabled classes="primary">disabled primary</Button>
      <Button disabled classes="ghost">disabled ghost</Button>
      <Button disabled classes="link">disabled link</Button>
      <Button classes="disabled" tabindex="-1" role="button" aria-disabled="true">visually disabled</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="active state button">
      <Button classes="active" role="button" aria-pressed="true">neutral</Button>
      <Button classes="primary active" role="button" aria-pressed="true">primary</Button>
      <Button classes="secondary active" role="button" aria-pressed="true">secondary</Button>
      <Button classes="link active" role="button" aria-pressed="true">link</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button with diffrent HTML tags">
      <a class="btn" href="#" role="button">Link</a>
      <button class="btn" type="submit">Button</button>
      <input class="btn" type="button" value="Input">
      <input class="btn" type="submit" value="Submit">
      <input class="btn" type="reset" value="Reset">
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button size">
      <Button classes="lg">Large</Button>
      <Button classes="">Normal</Button>
      <Button classes="sm">Small</Button>
      <Button classes="xs">Tiny</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button wide">
      <Button classes="wide">neutral</Button>
      <Button classes="wide primary">primary</Button>
      <Button classes="wide secondary">secondary</Button>
      <Button classes="wide accent">accent</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button group">
      <div class="btn-group" data-toggle="buttons">
        <Button class="active">Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <Button class="outline active">Button</Button>
        <Button class="outline">Button</Button>
        <Button class="outline">Button</Button>
        <Button class="outline">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group" data-toggle="buttons">
        <input class="btn" type="radio" name="options" id="option1" checked data-title="1">
        <input class="btn" type="radio" name="options" id="option2" data-title="2">
        <input class="btn" type="radio" name="options" id="option3" data-title="3">
        <input class="btn" type="radio" name="options" id="option4" data-title="4">
        <input class="btn" type="radio" name="options" id="option5" data-title="5">
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="icon button start">
      <Button classes="lg">
        <Icon glyph="close" class="inline-block w-6 mr-2 stroke-current" />
        Large
      </Button>
      <Button classes="">
        <Icon glyph="close" class="inline-block w-6 mr-2 stroke-current" />
        Normal
      </Button>
      <Button classes="sm">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        Small
      </Button>
      <Button classes="xs">
        <Icon glyph="close" class="inline-block w-4 mr-1 stroke-current" />
        Tiny
      </Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="icon button end">
      <Button classes="lg">
        Large
        <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
      </Button>
      <Button classes="">
        Normal
        <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
      </Button>
      <Button classes="sm">
        Small
        <Icon glyph="arrow" class="inline-block w-4 ml-2 stroke-current" />
      </Button>
      <Button classes="xs">
        Tiny
        <Icon glyph="arrow" class="inline-block w-4 ml-1 stroke-current" />
      </Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button shapes">
      <Button classes="circle lg">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="circle">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="circle sm">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>
      <Button classes="circle xs">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>

      <Button classes="square lg">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="square">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="square sm">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>
      <Button classes="square xs">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>

      <Button classes="outline circle lg">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="outline circle">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="outline circle sm">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>
      <Button classes="outline circle xs">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>

      <Button classes="outline square lg">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="outline square">
        <Icon glyph="close" class="inline-block w-6 stroke-current" />
      </Button>
      <Button classes="outline square sm">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>
      <Button classes="outline square xs">
        <Icon glyph="close" class="inline-block w-4 stroke-current" />
      </Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button block">
      <Button classes="block">block</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button loading">
      <Button classes="lg loading">loading</Button>
      <Button classes="primary loading">loading</Button>
      <Button classes="sm secondary loading">loading</Button>
      <Button classes="xs accent loading">loading</Button>
      <Button classes="sm outline primary loading">loading</Button>
      <Button classes="sm outline secondary loading">loading</Button>
      <Button classes="sm outline accent loading">loading</Button>
      <Button classes="sm ghost loading">loading</Button>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="button loading">
      <Button classes="lg square loading"></Button>
      <Button classes="square loading"></Button>
      <Button classes="sm square loading"></Button>
      <Button classes="xs square loading"></Button>

      <Button classes="lg circle loading"></Button>
      <Button classes="circle loading"></Button>
      <Button classes="sm circle loading"></Button>
      <Button classes="xs circle loading"></Button>
    </Wrapper>

  </div>
</template>
