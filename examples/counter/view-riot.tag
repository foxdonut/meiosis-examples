<app><counter></counter></app>

<counter>
  <div>
    <div><span>Riot Counter: {model.counter}</span></div>
    <div>
      <button onclick={onInc}>+ 3</button>
      <button onclick={onDecr}>- 3</button>
    </div>
  </div>
  <script>
  this.on("mount", function() {
    this.onInc = function(_evt) {
      this.propose({ add: 3 });
    };
    this.onDecr = function(_evt) {
      this.propose({ add: -3 });
    };
  });
  </script>
</counter>
