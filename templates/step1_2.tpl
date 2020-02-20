{{? !it.game.errors.includes("NOT_ENOUGHT_STOCK") }}<l>Combien de boisseaux vendez-vous ? {{=it.KB_BUFFER}}&#9617;</l>{{?}}
{{? it.game.errors.includes("NOT_ENOUGHT_STOCK") }}<l>{{=it.user.rank}} {{=it.user.name}}, pensez y encore</l>{{?}}
{{? it.game.errors.includes("NOT_ENOUGHT_STOCK") }}<l>Vous n'avez que {{=it.user.supply}} boisseaux.</l>{{?}}
