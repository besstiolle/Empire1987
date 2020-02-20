<l>&#8617; ou Combien {{= it.game.getLandPrice() }}fr l'arpant ? (Vous possedez {{=it.user.land}}) arpents : {{=it.KB_BUFFER}}&#9617;</l>
{{? it.game.errors.includes("NOT_ENOUGHT_LAND") }}<l>Vous ne pouvez en vendre autant</l>{{?}}
