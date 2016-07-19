<app><counter></counter></app>

<counter>
  <div>
    <div><span>Riot Counter: {model.counter}</span></div>
    <div>
      <button onclick={actions.onInc}>+ 3</button>
      <button onclick={actions.onDecr}>- 3</button>
    </div>
  </div>
</counter>
