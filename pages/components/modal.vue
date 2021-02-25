<template>
  <div>

    <Wrapper title="modal">
      <a class="btn btn-primary" :href="`/components/modal#my-modal`" v-scroll-to="{el: '#my-modal'}">open modal</a>
      <div class="modal" id="my-modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
          <div class="modal-action">
            <a class="btn btn-primary" :href="`/components/modal#`">Accept</a>
            <a class="btn" :href="`/components/modal#`">Close</a>
          </div>
        </div>
      </div>
    </Wrapper>

  </div>
</template>
