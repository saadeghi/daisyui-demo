<template>
  <div>
    <Wrapper title="card" classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card>
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">With button <Badge class="success">NEW</Badge></h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-end space-x-2 card-actions">
            <Button>More info</Button>
          </div>
        </div>
      </Card>

      <Card>
        <div class="card-body">
          <h2 class="card-title">Image bottom</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Button classes="primary">Login</Button>
            <Button classes="ghost">Register</Button>
          </div>
        </div>
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
      </Card>

      <Card>
        <figure>
          <img src="https://picsum.photos/id/1005/60/40" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Small image file</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Badge class="ghost">Article</Badge>
            <Badge class="ghost">Photography</Badge>
            <Badge class="ghost">Creativity</Badge>
          </div>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="card with shadow, image-full, small image size" classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card class="text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img class="rounded-xl" src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">shadow, center, padding</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-center space-x-2 card-actions">
            <Button classes="outline accent">More info</Button>
          </div>
        </div>
      </Card>

      <Card class="shadow-xl image-full">
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="justify-end card-body">
          <h2 class="card-title">Image bottom</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Button classes="primary">Get Started</Button>
          </div>
        </div>
      </Card>

      <Card class="shadow-sm bg-accent text-content-accent">
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Accent color</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Button classes="secondary">More info</Button>
          </div>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="card with side image" classes="grid grid-cols-1 gap-6">

      <Card class="side">
        <figure class="w-1/3">
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="w-2/3 card-body">
          <h2 class="card-title">Two Buttons</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Button classes="primary">Get Started</Button>
            <Button classes="ghost">More info</Button>
          </div>
        </div>
      </Card>

      <Card class="side">
        <div class="w-2/3 card-body">
          <h2 class="card-title">Image on other side <Badge>NEW</Badge></h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Button classes="primary">Get Started</Button>
            <Button classes="ghost">More info</Button>
          </div>
        </div>
        <figure class="w-1/3">
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
      </Card>


    </Wrapper>

    <Wrapper title="card with out image" classes="grid grid-cols-1 gap-6">

      <Card class="side">
        <div class="card-body">
          <h2 class="card-title">No Images</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="space-x-2 card-actions">
            <Button classes="primary">Get Started</Button>
            <Button classes="ghost">More info</Button>
          </div>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="mini cards" classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card class="shadow-2xl side bg-primary text-content-primary">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
          <div class="justify-end space-x-2 card-actions">
            <Button classes="primary">
              More info
              <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
            </Button>
          </div>
        </div>
      </Card>

      <Card class="shadow-2xl side bg-secondary text-content-secondary">
        <div class="card-body">
          <div class="justify-end space-x-2 card-actions">
            <Button classes="secondary square">
              <Icon glyph="close" class="inline-block w-6 stroke-current" />
            </Button>
          </div>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        </div>
      </Card>

      <Card class="text-center shadow-2xl side bg-accent text-content-accent">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
          <div class="justify-center space-x-2 card-actions">
            <Button classes="accent">Start now</Button>
            <Button classes="accent">More info</Button>
          </div>
        </div>
      </Card>

    </Wrapper>

  </div>
</template>
