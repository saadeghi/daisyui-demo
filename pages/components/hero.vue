<template>
  <div>
    <Wrapper title="hero" classes="flex flex-col space-y-2">
      <Hero class="h-screen bg-content-100">
        <div class="text-center hero-content">
          <div class="hero-text center">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button class="btn-primary">Get Started</Button>
          </div>
        </div>
      </Hero>
    </Wrapper>
    <Wrapper title="hero with figure" classes="flex flex-col space-y-2">
      <Hero class="h-screen bg-content-100">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button class="btn-primary">Get Started</Button>
          </div>
          <div class="hero-figure">
            <img class="rounded-lg shadow-2xl" src="https://picsum.photos/id/1005/600/600" />
          </div>
        </div>
      </Hero>
    </Wrapper>
    <Wrapper title="hero with form" classes="flex flex-col space-y-2">
      <Hero class="h-screen bg-content-100">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div class="hero-figure">
            <Card class="shadow-2xl bg-default">
              <div class="card-body">
                <FormControl>
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <Input class="input-text bordered" type="text" placeholder="email" />
                </FormControl>
                <FormControl>
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <Input class="input-text bordered" type="text" placeholder="password" />
                  <label class="label">
                    <a href="#" class="label-text-alt">Forgot password?</a>
                  </label>
                </FormControl>
                <FormControl class="mt-6">
                  <input class="btn btn-primary" type="button" value="Login">
                </FormControl>
              </div>
            </Card>
          </div>
        </div>
      </Hero>
    </Wrapper>
    <Wrapper title="hero" classes="flex flex-col space-y-2">
      <Hero class="h-screen overlay" style="background-image: url(https://picsum.photos/id/1005/1600/1400)">
        <div class="text-center hero-content">
          <div class="hero-text center">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button class="btn-primary">Get Started</Button>
          </div>
        </div>
      </Hero>
    </Wrapper>
  </div>
</template>
