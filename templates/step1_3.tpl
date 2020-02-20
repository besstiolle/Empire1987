<l>A raison de {{= it.game.getLandPrice() }} francs l'arpant, combien en vendez-vous aux Barbares ? {{=it.KB_BUFFER}}&#9617;</l>
{{? it.game.errors.includes("NOT_ENOUGHT_LAND") }}<l>Il faut garder un peu de terrain pour le palais royal!</l>{{?}}
