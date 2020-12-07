<template>
  <div>
    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group" data-toggle="buttons">
        <Button class="">Previous</Button>
        <Button class="">1</Button>
        <Button class="active">2</Button>
        <Button class="">3</Button>
        <Button class="">4</Button>
        <Button class="">Next</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group" data-toggle="buttons">
        <Button class="sm">1</Button>
        <Button class="sm">2</Button>
        <Button class="sm">3</Button>
        <Button class="sm disabled">...</Button>
        <Button class="sm">99</Button>
        <Button class="sm">100</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group" data-toggle="buttons">
        <Button class="xs">«</Button>
        <Button class="xs">1</Button>
        <Button class="xs active">2</Button>
        <Button class="xs">3</Button>
        <Button class="xs">4</Button>
        <Button class="xs">»</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group" data-toggle="buttons">
        <Button class="outline wide">Previous Page</Button>
        <Button class="outline wide">Next Page</Button>
      </div>
    </Wrapper>
  </div>
</template>
