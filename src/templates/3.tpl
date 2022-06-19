<l></l>
<l></l>
<l></l>
<l></l>
<c>{{=it.user.rank}} {{=it.user.name}} de {{=it.user.country}}</c>
<c>en l'an {{=it.game.year}}</c>
<l></l>
<l>{{=it.randomBirth}} naissances</l>
<l>{{=it.randomDeath}} habitants morts de maladie</l>
{{? it.randomStarvingPeople > 0}}<l>{{=it.randomStarvingPeople}} habitants morts de faim</l>{{?}}
{{? it.randomMigrant > 0}}<l>{{=it.randomMigrant}} migrants viennent dans votre pays</l>{{?}}
{{? it.randomStarvingOst > 0}}<l>{{=it.randomStarvingOst}} soldats morts de faim</l>{{?}}
<l></l>
<l>Votre ost combattra avec une efficacité de {{=it.user.getSatisfactionOst()}}%</l>
<l></l>
<l>Vous avez {{? it.randomPeople >= 0}}gagné{{?}}{{? it.randomPeople < 0}}perdu{{?}} {{=Math.abs(it.randomPeople)}} sujets taillables et corvéables à merci</l>
<l></l>
<l>&#8617;</l>
