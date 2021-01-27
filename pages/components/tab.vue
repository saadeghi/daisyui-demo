<template>
  <div>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tabs">
      <div class="tabs">
        <a class="tab">Tab 1</a>
        <a class="tab tab-active">Tab 2</a>
        <a class="tab">Tab 3</a>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tab-bordered">
      <div class="tabs">
        <a class="tab tab-bordered">Tab 1</a>
        <a class="tab tab-bordered tab-active">Tab 2</a>
        <a class="tab tab-bordered">Tab 3</a>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tab-lifted">
      <div class="tabs">
        <a class="tab tab-lifted">Tab 1</a>
        <a class="tab tab-lifted tab-active">Tab 2</a>
        <a class="tab tab-lifted">Tab 3</a>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tab-lifted tab-rounded">
      <div class="tabs">
        <a class="tab tab-lifted tab-rounded">Tab 1</a>
        <a class="tab tab-lifted tab-rounded tab-active">Tab 2</a>
        <a class="tab tab-lifted tab-rounded">Tab 3</a>
      </div>
    </Wrapper>


    <Wrapper classes="flex items-start flex-col space-y-2" title="tabs-boxed">
      <div class="tabs tabs-boxed">
        <a class="tab">Tab 1</a>
        <a class="tab tab-active">Tab 2</a>
        <a class="tab">Tab 3</a>
      </div>
    </Wrapper>


    <Wrapper classes="flex items-start flex-col space-y-2" title="sizes">
      <div class="tabs">
        <a class="tab tab-xs tab-lifted tab-rounded">Tiny</a>
        <a class="tab tab-xs tab-lifted tab-rounded tab-active">Tiny</a>
        <a class="tab tab-xs tab-lifted tab-rounded">Tiny</a>
      </div>
      <div class="tabs">
        <a class="tab tab-sm tab-lifted tab-rounded">Small</a>
        <a class="tab tab-sm tab-lifted tab-rounded tab-active">Small</a>
        <a class="tab tab-sm tab-lifted tab-rounded">Small</a>
      </div>
      <div class="tabs">
        <a class="tab tab-lifted tab-rounded">Normal</a>
        <a class="tab tab-lifted tab-rounded tab-active">Normal</a>
        <a class="tab tab-lifted tab-rounded">Normal</a>
      </div>
      <div class="tabs">
        <a class="tab tab-lg tab-lifted tab-rounded">Large</a>
        <a class="tab tab-lg tab-lifted tab-rounded tab-active">Large</a>
        <a class="tab tab-lg tab-lifted tab-rounded">Large</a>
      </div>
    </Wrapper>

  </div>
</template>
