<template>
  <div>
    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge">
      <Badge>neutral</Badge>
      <Badge class=" primary">primary</Badge>
      <Badge class=" secondary">secondary</Badge>
      <Badge class=" accent">accent</Badge>
      <Badge class=" ghost">ghost</Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge size">
      <Badge class=" ghost lg">987,654</Badge>
      <Badge class=" ghost">987,654</Badge>
      <Badge class=" ghost sm">987,654</Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge variants">
      <Badge class=" info">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        info
      </Badge>
      <Badge class=" success">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        success
      </Badge>
      <Badge class=" warning">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        warning
      </Badge>
      <Badge class=" error">
        <Icon glyph="close" class="inline-block w-4 mr-2 stroke-current" />
        error
      </Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge outline">
      <Badge class=" outline">neutral</Badge>
      <Badge class=" primary outline">primary</Badge>
      <Badge class=" secondary outline">secondary</Badge>
      <Badge class=" accent outline">accent</Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="Badg in text">
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

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge in button">
      <Button classes="">
        Version 2.7.0
        <Badge class="ml-2">new</Badge>
      </Button>
      <Button classes=" primary">
        Inbox
        <Badge class="ml-2 outline">3</Badge>
      </Button>
      <Button classes=" secondary outline">
        Notifications
        <Badge class="ml-2 outline">+999</Badge>
      </Button>
      <Button classes=" accent">
        accent
        <Badge class="ml-2 outline">new</Badge>
      </Button>
    </Wrapper>
  </div>
</template>
