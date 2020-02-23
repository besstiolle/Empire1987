{{? !it.game.errors.length }}<l>A Qui achetez ? {{=it.KB_BUFFER}}&#9617;</l>{{?}}
{{? it.game.errors.includes("CANT_BUY_MYSELF") }}<l>Vous ne pouvez acheter à vous même</l>{{?}}
