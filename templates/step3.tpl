<c>{{=it.user.rank}} {{=it.user.name}} de {{=it.user.country}}
<c>en l'an {{=it.game.year}}
<invert> Revenus d'état </invert>
          Trésor = {{=it.user.money.toString().padStart(6)}} francs
          <invert>  Droits         Taxe       Impôts  </invert>
          <invert> de douane    commerciale   directs </invert>
              {{=it.user.taxeA.toString().padStart(2)}} %         {{=it.user.taxeB.toString().padStart(2)}} %         {{=it.user.taxeC.toString().padStart(2)}} %
                 0            0            0

  <invert>  Investissements    Nombre       Profits      Coût </invert>
 1) Champs de foire  {{=it.user.foires.toString().padStart(7)}}              0       1000
 2) Moulins à grain  {{=it.user.moulins.toString().padStart(7)}}              0       2000
 3) Fonderies        {{=it.user.fonderies.toString().padStart(7)}}            274       7000
 4) Chantiers navals {{=it.user.chantiers.toString().padStart(7)}}              0       8000
 5) Hommes d'armes   {{=it.user.ost.toString().padStart(7)}}           -160          8
 6) Palais           {{=it.user.palais.toString().padStart(7)}}% terminé             5000


1/Droits de douane,2/Taxe commerciale,3/Impôts directs ou &#8617;/Investissements ?
