import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 0 }),
    template: `
      <main class="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark">
        <div class="container">
          <h1 class="text-white text-center mb-3">COUNTER</h1>
          <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-secondary" @click="decrease">-</button>
            <h4 class="text-white mx-3">{{ count }}</h4>
            <button type="button" class="btn btn-secondary" @click="increase">+</button>
          </div>
        </div>
      </main>
    `,
    methods: {
      decrease() {
        this.count--;
      },
      increase() {
        this.count++;
      },
    },
  });
}
