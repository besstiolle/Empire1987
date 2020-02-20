{{? !it.game.errors.includes("PRICE_TOO_HIGH") }}<l>A quel tarif ? {{=it.KB_BUFFER}}&#9617;</l>{{?}}
{{? it.game.errors.includes("PRICE_TOO_HIGH") }}<l>PRICE_TOO_HIGH{{?}}
