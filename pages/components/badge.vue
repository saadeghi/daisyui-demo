<template>
  <div>
    <Wrapper classes="flex items-start space-x-2" title="badge">
      <Badge>neutral</Badge>
      <Badge class="primary">primary</Badge>
      <Badge class="secondary">secondary</Badge>
      <Badge class="accent">accent</Badge>
      <Badge class="ghost">ghost</Badge>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="badge variants">
      <Badge class="info">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        info
      </Badge>
      <Badge class="success">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        success
      </Badge>
      <Badge class="warning">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        warning
      </Badge>
      <Badge class="error">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        error
      </Badge>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="badge outline">
      <Badge class="outline">neutral</Badge>
      <Badge class="primary outline">primary</Badge>
      <Badge class="secondary outline">secondary</Badge>
      <Badge class="accent outline">accent</Badge>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="Badg in text">
      <div>
        <div>
          <h2 class="mb-5 text-2xl">
            Heading
            <Badge class="outline">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-xl">
            Heading
            <Badge class="outline">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-lg">
            Heading
            <Badge class="outline">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-md">
            Heading
            <Badge class="outline">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-sm">
            Heading
            <Badge class="outline">New</Badge>
          </h2>
        </div>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start space-x-2" title="badge in button">
      <Button classes="">
        Version 2.7.0
        <Badge class="ml-2">new</Badge>
      </Button>
      <Button classes="primary">
        Inbox
        <Badge class="ml-2 outline">3</Badge>
      </Button>
      <Button classes="secondary outline">
        Notifications
        <Badge class="ml-2 outline">+999</Badge>
      </Button>
      <Button classes="accent">
        accent
        <Badge class="ml-2 outline">new</Badge>
      </Button>
    </Wrapper>

    <Wrapper
      classes="flex items-start space-x-2"
      title="badge in button (all variants)"
    >
      <Button classes="">
        Version 2.7.0
        <div class="flex items-start ml-2 space-x-1">
          <Badge>neutral</Badge>
          <Badge class="primary">primary</Badge>
          <Badge class="secondary">secondary</Badge>
          <Badge class="accent">accent</Badge>
          <Badge class="outline">neutral</Badge>
          <Badge class="primary outline">primary</Badge>
          <Badge class="secondary outline">secondary</Badge>
          <Badge class="accent outline">accent</Badge>
        </div>
      </Button>
    </Wrapper>

    <Wrapper
      classes="flex items-start space-x-2"
      title="badge in outline button (all variants)"
    >
      <Button classes="outline">
        Version 2.7.0
        <div class="flex items-start ml-2 space-x-1">
          <Badge>neutral</Badge>
          <Badge class="primary">primary</Badge>
          <Badge class="secondary">secondary</Badge>
          <Badge class="accent">accent</Badge>
          <Badge class="outline">neutral</Badge>
          <Badge class="primary outline">primary</Badge>
          <Badge class="secondary outline">secondary</Badge>
          <Badge class="accent outline">accent</Badge>
        </div>
      </Button>
    </Wrapper>

    <Wrapper
      classes="flex items-start space-x-2"
      title="badge in outline button (all variants)"
    >
      <Button classes="outline primary">
        Version 2.7.0
        <div class="flex items-start ml-2 space-x-1">
          <Badge>neutral</Badge>
          <Badge class="primary">primary</Badge>
          <Badge class="secondary">secondary</Badge>
          <Badge class="accent">accent</Badge>
          <Badge class="outline">neutral</Badge>
          <Badge class="primary outline">primary</Badge>
          <Badge class="secondary outline">secondary</Badge>
          <Badge class="accent outline">accent</Badge>
        </div>
      </Button>
    </Wrapper>

    <Wrapper
      classes="flex items-start space-x-2"
      title="badge in outline button (all variants)"
    >
      <Button classes="outline secondary">
        Version 2.7.0
        <div class="flex items-start ml-2 space-x-1">
          <Badge>neutral</Badge>
          <Badge class="primary">primary</Badge>
          <Badge class="secondary">secondary</Badge>
          <Badge class="accent">accent</Badge>
          <Badge class="outline">neutral</Badge>
          <Badge class="primary outline">primary</Badge>
          <Badge class="secondary outline">secondary</Badge>
          <Badge class="accent outline">accent</Badge>
        </div>
      </Button>
    </Wrapper>

    <Wrapper
      classes="flex items-start space-x-2"
      title="badge in outline button (all variants)"
    >
      <Button classes="outline accent">
        Version 2.7.0
        <div class="flex items-start ml-2 space-x-1">
          <Badge>neutral</Badge>
          <Badge class="primary">primary</Badge>
          <Badge class="secondary">secondary</Badge>
          <Badge class="accent">accent</Badge>
          <Badge class="outline">neutral</Badge>
          <Badge class="primary outline">primary</Badge>
          <Badge class="secondary outline">secondary</Badge>
          <Badge class="accent outline">accent</Badge>
        </div>
      </Button>
    </Wrapper>
  </div>
</template>
