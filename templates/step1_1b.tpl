{{? !it.game.errors.length}}
  <l>Combien ? {{=it.KB_BUFFER}}&#9617;</l>
{{?}}
{{? it.game.errors.includes("NOT_ENOUGHT_MONEY") }}<l>Vous n'avez pas assez d'argent</l>{{?}}
{{? it.game.errors.includes("NOT_ENOUGHT_STOCK_ON_MARKET") }}<l>Il n'en vend pas autant</l>{{?}}
