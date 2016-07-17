<counter>
  <div>
    <div><span>Riot Counter: {model.counter}</span></div>
    <div>
      <button onclick={onInc}>+ 5</button>
      <button onclick={onDecr}>- 5</button>
    </div>
  </div>
  <script>
  this.on("update", function() {
    this.onInc = function(_evt) {
      this.propose({ add: 5 });
    };
    this.onDecr = function(_evt) {
      this.propose({ add: -5 });
    };
  });
  </script>
</counter>
