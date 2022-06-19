1 KEY OFF:screen 0,0:SCREEN 0,1: COLOR 15,1,0:CLS:PRINT" ":CLS:LOCATE 6,36,0:PRINT"E M P I R E": LOCATE 13,25: PRINT "(Toujours taper RC pour continuer)": GOSUB 30:GOSUB 300: LOCATE 12,30:PRINT "Instructions? (O/N) ";CHR$(219);CHR$(29);
2 A$=INKEY$: IF A$="" THEN 2 ELSE IF A$="O" OR A$="o" THEN 239 ELSE IF A$<>"N" AND A$<>"n" AND A$<>CHR$(13) THEN 2
3 CLEAR:DEFSTR Z:DEFINT O: A$=RIGHT$(TIME$,2)+MID$(TIME$,4,2): RANDOMIZE VAL(A$): DIM A(6,19), Z(6,6): RESTORE 276:LOCATE ,,0:GOSUB 300:MSK$="##,###"
4 FOR I=1 TO 6: FOR J=0 TO 6: READ Z(I,J):NEXT J,I: BA=6000: GOSUB 300:CL$=STRING$(79," ")
5 FOR I=1 TO 6:A(I,1)=10000:A(I,2)=15000+INT(RND*1000)+1:A(I,3)=2000:A(I,4)=1000:A(I,7)=25:A(I,8)=20:A(I,9)=5:A(I,10)=35:A(I,15)=20:A(I,17)=2:A(I,18)=1:A(I,19)=15: NEXT I
6 LOCATE 12,28:INPUT "Combien de joueurs ";NP: IF NP>6 THEN 6
7 FOR I=1 TO NP: LOCATE 13,26:PRINT "Qui gouverne ";Z(I,1);: INPUT Z(I,0): NEXT I
8 NY=NY+1:GOSUB 300:LOCATE 9,36,0:PRINT "Ann‚e";NY:PRINT:NW=INT(RND*6)+1:ON NW GOTO 9,10,11,12,13,14
9 PRINT,"Mauvais temps. S‚cheresse. Sauterelles.":GOTO 16
10 PRINT,"Gel‚es pr‚coces. Aridit‚.":GOTO 16
11 PRINT,"Inondations. Trop de pluies.":GOTO 16
12 PRINT,"Temps moyen. Bonne ann‚e.":GOTO 16
13 PRINT,"Beau temps. Et‚ long.":GOTO 16
14 PRINT,"Temps superbe! Grande ann‚e!":GOTO 16
15 '
16 GOSUB 30:GOSUB 300: FOR K=1 TO 6:QF=0
17 IF K>NP THEN GOSUB 203: GOTO 19
18 GOSUB 33
19 NEXT K:GOSUB 300
20 LOCATE 4,1,0:PRINT,"Sommaire:":PRINT
21 PRINT,"Nobles    Soldats    Marchands   Serfs   Terres  Palais": PRINT
22 FOR I=1 TO 6: IF A(I,0)<>0 THEN 25 ELSE PRINT ,Z(I,A(I,17));" ";Z(I,0);" de ";Z(I,1)
23 Z=" ###      ##,###      ##,###   ###,###  ##,###  ###%"
24 PRINT,:PRINT USING Z;A(I,18),A(I,15),A(I,7),A(I,3),A(I,1),A(I,16)*10
25 IF KK<>1 THEN 28
26 PRINT:PRINT,,"Autre partie? ";CHR$(219);CHR$(29);
27 Z$=INKEY$:IF Z$="" THEN 27 ELSE IF Z$="O" OR Z$="o" THEN RUN ELSE IF Z$<>"N" AND Z$<>"n" THEN 27 ELSE SCREEN 0,0:COLOR 15,0:CLS:SYSTEM
28 NEXT I:PRINT:PRINT,:INPUT "<ENTER>";Z:GOTO 8
29 LOCATE 21,1:PRINT CL$:PRINT CL$:LOCATE 21,2:RETURN
30 FOR IZ=1 TO 2000: NEXT IZ: RETURN
31 LOCATE 6,1:PRINT CL$:LOCATE 6,5:PRINT,"   ";A(K,8);"%","   ";A(K,9);"%","   ";A(K,10);"%":PRINT,"   ";INT(FC+.5),"   ";INT(FS+.5),"   ";INT(FI+.5):RETURN
32 GOSUB 300:LOCATE 8,1:PRINT," Very sad news ...":PRINT:RETURN
33 '
34 GOTO 195
35 DS=0:IQ=1:LA=A(K,1)-A(K,3)-A(K,18)*2-A(K,16)-A(K,7)-A(K,15)*2:PD=(A(K,3)+A(K,7)+A(K,18)*3)*5:AD=A(K,15)*8:A(K,19)=15
36 GOTO 180
37 IF A(K,2)*3<LA THEN LA=A(K,2)*3
38 IF A(K,3)*5<LA THEN LA=A(K,3)*5
39 A(K,2)=A(K,2)-LA/3:HA=LA*NW*.72+INT(RND*500)+1-A(K,13)*500:RA=INT(RND*30)+1:A(K,2)=A(K,2)-A(K,2)*RA/100:IF HA<0 THEN HA=0
40 A(K,2)=A(K,2)+HA
41 GOSUB 300:LOCATE 2,1,0:PRINT ,Z(K,A(K,17));" ";Z(K,0);" of ";Z(K,1)
42 PRINT:PRINT,"Rats ate";RA;"% OF THE GRAIN RESERVE"
43 PRINT,"Grain     Grain     People     Army        Royal"
44 PRINT,"harvest   reserve   require    requires    treasury"
45 Z =  "###,###   ###,###   ###,###    ###,###    #,###,###":PRINT,;:PRINT USING Z;HA,A(K,2),PD,AD,A(K,4)
46 PRINT,"bushels   bushels   bushels    bushels    ";Z(K,6)
47 LOCATE 11,1:PRINT,"------Grain for sale:":PRINT ,,"Country","Bushels","Price":J=0
48 FOR I=1 TO 6:IF A(I,0)<>0 OR A(I,5)=0 THEN 50
49 PRINT ,I,Z(I,1),A(I,5),:PRINT USING "##.##";A(I,6):J=1
50 NEXT I:IF J=0 THEN PRINT:PRINT:PRINT,"No grain for sale . . .":PRINT
51 H=0:GOSUB 29:PRINT,;:INPUT "1) Buy grain  2) Sell grain  3) Sell land  ";H: IF H>3 OR H<0 THEN 51
52 ON H+1 GOTO 71,53,61,67
53 '
54 GOSUB 29:INPUT "From which country (give #)";H1: IF H1<0 OR H1>6 THEN 54 ELSE IF A(H1,0)=1 OR A(H1,5)=0 THEN PRINT "That country has none for sale!";:GOSUB 30:GOTO 51
55 IF H1=0 THEN 51
56 IF H1=K THEN GOSUB 29:PRINT"You cannot buy grain that you have put onto the market!";:GOSUB 30:GOTO 51
57 GOSUB 29:INPUT "How many bushels";H2:IF H2>A(H1,5) THEN PRINT "You can't buy more grain than they are selling!";:GOSUB 30:GOTO 57
58 IF H2<0 THEN 54
59 H3=H2*A(H1,6)/.9:IF H3>A(K,4) THEN GOSUB 29:PRINT Z(K,A(K,17));" ";Z(K,0);" please reconsider -":H=A(K,4)*.9/A(H1,6):PRINT"You can only afford to buy";INT(H);"bushels";:GOSUB 30:GOTO 57
60 A(K,2)=A(K,2)+H2:A(K,4)=A(K,4)-H3:A(H1,4)=A(H1,4)+H3*.9:A(H1,5)=A(H1,5)-H2:GOTO 41
61 '
62 GOSUB 29:INPUT"How many bushels do you wish to sell";H1:IF H1>A(K,2) THEN GOSUB 29:PRINT Z(K,A(K,17));" ";Z(K,0);", please think again":PRINT"You only have";A(K,2);"bushels.";:GOSUB 30:GOTO 62
63 IF H1<0 THEN 62
64 GOSUB 29:INPUT "What will be the price per bushel";H2:IF H2<=0 THEN 64
65 IF H2>15 THEN PRINT"Be reasonable . . . even gold costs less that that!";:GOSUB 30:GOTO 64
66 A(K,6)=(A(K,6)*A(K,5)+H1+H2)/(A(K,5)+H1):A(K,5)=A(K,5)+H1:A(K,2)=A(K,2)-H1:GOTO 41
67 ' Sell land
68 GOSUB 29:PRINT"The barbarians will give you 2 ";Z(K,6);" per acre":GOSUB 30:GOSUB 29:INPUT "How many acres will you sell them";H1:IF H1>A(K,1)*.95 THEN PRINT"You must keep some land for the royal palace!";:GOSUB 30:GOTO 68
69 IF H1<0 THEN 68
70 A(K,4)=A(K,4)+H1*2:A(K,1)=A(K,1)-H1:BA=BA+H1:GOTO 41
71 '
72 GOSUB 29:PRINT"How many bushels will you give to your army of";A(K,15);"men";:INPUT HM:IF HM>A(K,2) THEN GOSUB 29:PRINT"You cannot give your army more grain than you have!";:GOSUB 30:GOTO 72
73 A(K,2)=A(K,2)-HM:PO=A(K,3)+A(K,7)+A(K,18)
74 GOSUB 29:PRINT"How many bushels will you give to your";INT(PO+.5);"people";:INPUT HS:IF HS>A(K,2) THEN GOSUB 29:PRINT"But you only have";A(K,2);"bushels of grain!":GOSUB 30:GOTO 74
75 IF HS<A(K,2)*.1 THEN GOSUB 29:PRINT"You must release at least 10% of the stored grain":GOSUB 30:GOTO 74
76 A(K,2)=A(K,2)-HS:A(K,19)=HM/(AD+.001)*10:IF A(K,19)<5 THEN A(K,19)=5
77 IF A(K,19)>15 THEN A(K,19)=15
78 GOSUB 300:LOCATE 6,1,0
79 PRINT ,Z(K,A(K,17));" ";Z(K,0);" of ";Z(K,1);":":PRINT,"In Year";STR$(NY);","
80 DB=INT(RND*PO/9.5+1):DM=0:DD=INT(RND*PO/22+1):DE=0:IF HS>PD*1.5 THEN D=SQR(HS-PD)-INT(RND*A(K,8)*1.5+1):IF D<0 THEN 81 ELSE DE=INT(RND*(2*D+1))
81 DS=0:IF PD>HS*2 THEN DS=INT(RND*PO/16+1)+1:DM=INT(RND*(PO/12+1)+1):GOTO 83
82 IF PD>HS THEN DM=INT(RND*(PO/15+1)+1)
83 I2=0:PT=DB-DS-DM-DD+DE:I1=INT(RND*DE/5+1):A(K,7)=A(K,7)+I1:A(K,3)=A(K,3)+PT-I1:IF DE/25>.999 THEN I2=INT(RND*DE/25)+1:A(K,18)=A(K,18)+I2:A(K,3)=A(K,3)-I2
84 DA=0:IF AD>HM*2 THEN DA=INT(RND*(A(K,15)/2+1)+1):A(K,15)=A(K,15)-DA
85 PA=0:IF HM*2<AD THEN PA=INT(RND*A(K,15)/5+1):A(K,15)=A(K,15)-PA
86 PRINT:PRINT ,DB;"babies were born":PRINT ,DD;"people died of disease":IF DE>0 THEN PRINT ,DE;"people immigrated into your country."
87 IF DM>0 THEN PRINT ,DM;"people died of malnutrition."
88 IF DS>0 THEN PRINT ,DS;"people starved to death."
89 IF DA>0 THEN PRINT ,DA;"soldiers starved to death."
90 PRINT,"Your army will fight at";INT(A(K,19)*10+.5);"% efficiency."
91 Z="gained":IF PT<0 THEN Z="lost"
92 PRINT,"Your population ";Z;ABS(PT);"citizens."
93 PRINT:PRINT,:INPUT"<ENTER>";Z
94 GOTO 187
95 '
96 F1=(A(K,11)*((A(K,7)+INT(RND*35+1)+INT(RND*35+1))/(A(K,9)+1)*12+5))^.9:F2=(A(K,12)*(5.8*(HA+INT(RND*250+1))/(A(K,10)*20+A(K,9)*40+10)+150))^.9:F3=(A(K,13)+(A(K,15)+INT(RND*150+1)+400))^.9
97 F4=(A(K,14)*(A(K,7)*4+A(K,11)*9+A(K,13)*15)*NW)^.9:F5=A(K,15)*(-8):FC=DE*(INT(RND*40+1)+INT(RND*40+1))/100*A(K,8):FS=A(K,9)/100*((A(K,7)*1.8+F1*33+F2*17+F3*50+F4*70)^.85+A(K,18)*5+A(K,3))
98 FI=(A(K,10)/100*(A(K,3)*1.3+A(K,18)*145+A(K,7)*39+A(K,11)*99+A(K,12)*99+A(K,13)*425+A(K,14)*965))^.97
99 A(K,4)=A(K,4)+F1+F2+F3+F4+F5+FC+FS+FI
100 A(K,18)=INT(A(K,18)):GOSUB 300:LOCATE 4,4,0:PRINT USING " State revenues:    Treasury=#,###,###.##";A(K,4);:PRINT" ";Z(K,6)
101 PRINT,"Customs duty","Sales tax","Income tax":GOSUB 31
102 PRINT:PRINT"    Investments","Number","Profits","Cost"
103 PRINT"    1) Marketplaces",A(K,11),INT(F1+.5),"1000"
104 PRINT"    2) Grain mills",A(K,12),INT(F2+.5),"2000"
105 PRINT"    3) Foundries",A(K,13),INT(F3+.5),"7000"
106 PRINT"    4) Shipyards",A(K,14),INT(F4+.5),"8000"
107 PRINT"    5) Soldiers",A(K,15),INT(F5+.5),"8"
108 PRINT"    6) Palace      ",STR$(A(K,16)*10);"% Completed  ","5000":IF KL=1 THEN KL=0:RETURN
109 E=0:GOSUB 29:INPUT " 1) Customs duty  2) Sales Tax  3) Income tax";E
110 IF E>3 OR E<0 THEN 109
111 ON E+1 GOTO 115,112,113,114
112 GOSUB 29:INPUT" Give new customs tax (max=50%)";E:IF E<0 OR E>50 THEN 112 ELSE A(K,8)=E:GOSUB 31:GOTO 109
113 GOSUB 29:INPUT" Give new sales tax (max=20%)";E:IF E<0 OR E>20 THEN 113 ELSE A(K,9)=E:GOSUB 31:GOTO 109
114 GOSUB 29:INPUT" Give new income tax (max=35%)";E:IF E<0 OR E>35 THEN 114 ELSE A(K,10)=E:GOSUB 31:GOTO 109
115 E=0:GOSUB 29:INPUT" Any new investments (give #)";E:IF E<0 OR E>6 THEN 115
116 ON E+1 GOTO 129,117,118,119,120,121,122
117 E1=1000:J=INT(RND*7+1):A(K,7)=A(K,7)+J:A(K,3)=A(K,3)-J:GOTO 123
118 E1=2000:GOTO 123
119 E1=7000:GOTO 123
120 E1=8000:GOTO 123
121 E1=8:GOTO 123
122 H=INT(RND*4+1):E1=5000
123 GOSUB 29:INPUT" How many";E2:IF E2<>INT(E2) OR E2<0 THEN 123 ELSE IF A(K,4)<E1*E2 THEN GOSUB 29:PRINT" Think again . . . You only have";A(K,4);Z(K,6):GOSUB 30:GOTO 123
124 IF E2>A(K,3) THEN GOSUB 29:PRINT"You don't have enough serfs to train":GOSUB 30:GOTO 123
125 IF E1=8 THEN IF (E2+A(K,15))/PO>.05+A(K,13)*.015 THEN GOSUB 29:PRINT"You cannot equip and maintain so many troops, ";:GOSUB 30: GOTO 123
126 A(K,15)=INT(A(K,15)):IF E1=8 AND E2+A(K,15)>A(K,18)*20 THEN GOSUB 29:PRINT"Please think again . . . You only have";INT(A(K,18)+.5);"nobles":PRINT"to lead your troops.";:GOSUB 30:GOTO 123
127 IF E1=8 THEN A(K,3)=A(K,3)-E2 ELSE IF E1=5000 THEN A(K,18)=A(K,18)+H*E2:A(K,3)=A(K,3)-H*E2
128 A(K,4)=A(K,4)-E2*E1:A(K,E+10)=A(K,E+10)+E2:KL=1:LOCATE 8,4:GOSUB 102:LOCATE 4,33:PRINT USING "#,###,###.##";A(K,4);:GOTO 115
129 GOSUB 300:LOCATE 5,1,0:PRINT,"Land holdings:":PRINT:PRINT," 1)  Barbarians",BA:IF BA<0 THEN BA=0
130 FOR I=1 TO 6:IF A(I,0)<>0 THEN 131 ELSE PRINT ,STR$(I+1);")  ";Z(I,1);"   ";,A(I,1)
131 NEXT I
132 I=0:GOSUB 29:PRINT,:INPUT "Who do you wish to attack (give #)";I:IF I<0 OR I>7 THEN 132
133 IF I=K+1 THEN PRINT Z(K,A(K,17));", please think again.  You are #";STR$(I);"!";:GOSUB 30:GOTO 132
134 IF I>1 AND NY<3 THEN GOSUB 29:PRINT"Due to international treaty, you cannot attack other nations until the third":PRINT"year.";:GOSUB 30:GOTO 132
135 IF I=1 AND BA<1 THEN GOSUB 29:PRINT"All barbarian lands have been seized.":BA=0:GOSUB 30:GOTO 132
136 IF I<>0 AND A(K,0)<>0 THEN GOSUB 29:PRINT"That player is no longer in the game.":GOSUB 30:GOTO 132
137 IF I=0 THEN RETURN ELSE I=I-1
138 H=A(K,18)/4+1:IF IQ>H THEN GOSUB 29:PRINT"Due to a shortage of nobles, you are limited to only";INT(H);"attacks per year.";:GOSUB 30:GOTO 132
139 IQ=IQ+1:GOSUB 29:INPUT"How many soldiers do you wish to send";I1:IF I1>A(K,15) THEN GOSUB 29:PRINT"Thing again . . . You have only";A(K,15);"soldiers":GOSUB 30:GOTO 139
140 GOSUB 300:LOCATE 9,13:PRINT Z(K,A(K,17));" ";Z(K,0);" of ";Z(K,1);":":LOCATE 7,50:PRINT"Soldiers remaining:";:I4=A(K,19):I5=0:I2=A(I,15):I0=A(I,1):O1=75-I1-I2:A(K,15)=A(K,15)-I1
141 IF I=0 THEN I2=INT(RND*INT(RND*(I1+1)*3)+1)+INT(RND*INT(RND*(I1+1.5)+1)+1):LOCATE 10,13:PRINT"Pagan barbarians:":I3=9:I0=BA:O1=75-I1-I2:GOTO 144
142 LOCATE 10,13,0:PRINT Z(I,A(I,17));" ";Z(I,0);" of ";Z(I,1);":";:I3=A(I,19)
143 IH=0:IF A(I,15)<1 THEN LOCATE 14,1:PRINT,Z(I,1);"'s serfs are forced to defend their country!";:I2=A(I,3):I3=5:IH=1:O1=-1
144 LOCATE 9,56,0:PRINT "      ";:LOCATE 9,56:PRINT USING MSK$;INT(I1);:LOCATE 10,56:PRINT "      ";:LOCATE 10,56:PRINT USING MSK$;INT(I2);:FOR O=0 TO O1: NEXT O
145 I7=INT(I1/15)+1:IF INT(RND*I4+1)<INT(RND*I3+1) THEN 148
146 I5=I5+INT(RND*I7*26+1)-INT(RND*(I7+5)+1):I2=I2-I7:IF I5<0 THEN I5=0
147 GOTO 150
148 I1=I1-I7
149 IF I0-I5<0 THEN 171
150 IF I1>0 AND I2>0 THEN 144
151 IF I1<0 THEN I1=0
152 IF I2<0 THEN I2=0
153 IF IH=1 AND I1>0 THEN 171
154 GOSUB 300:LOCATE 7,34,0:PRINT"Battle over":PRINT
155 IF I1>0 THEN PRINT,"The forces of ";Z(K,A(K,17));" ";Z(K,0);" were victorious.":GOTO 158
156 PRINT ,Z(K,A(K,17));" ";Z(K,0);" was defeated.":IF I5<2 THEN I5=0:GOTO 158
157 I5=INT(I5/INT(RND*3+1)):PRINT,"In your defeat you still managed to capture";I5;"acres.":IF I=0 THEN 160 ELSE 159
158 PRINT ,I5;"acres were seized.":IF I=0 THEN 160
159 IF I5>A(I,1)/3 THEN 163
160 A(K,15)=I1+A(K,15):A(K,1)=A(K,1)+I5:IF I=0 THEN BA=BA-I5:IF QF=1 THEN GOSUB 30:RETURN ELSE PRINT:PRINT,:INPUT"<ENTER>";Z:GOTO 129
161 IF IH=1 THEN IH=0:A(I,15)=0:A(I,3)=I2:A(I,1)=A(I,1)-I5:IF QF=1 THEN GOSUB 30:RETURN ELSE PRINT:PRINT,:INPUT"<ENTER>";Z:GOTO 129
162 A(I,15)=I2:A(I,1)=A(I,1)-I5:IF QF=1 THEN GOSUB 30:RETURN ELSE PRINT:PRINT,:INPUT"<ENTER>";Z:GOTO 129
163 IF A(I,3)>0 THEN I6=INT(RND*A(I,3)+1):PRINT ,I6;"enemy serfs were beaten and murdered by your troops!":A(I,3)=A(I,3)-I6
164 IF A(I,11)>0 THEN I6=INT(RND*A(I,11)+1):PRINT ,I6;"enemy marketplaces were destroyed":A(I,11)=A(I,11)-I6
165 IF A(I,2)>0 THEN I6=INT(RND*A(I,2)+1):PRINT ,I6;"bushels of enemy grain were burned":A(I,2)=A(I,2)-I6
166 IF A(I,12)>0 THEN I6=INT(RND*A(I,12)+1):PRINT ,I6;"enemy grain mills were sabotaged":A(I,12)=A(I,12)-I6
167 IF A(I,13)>0 THEN I6=INT(RND*A(I,13)+1):PRINT ,I6;"enemy foundries were leveled":A(I,13)=A(I,13)-I6
168 IF A(I,14)>0 THEN I6=INT(RND*A(I,14)+1):PRINT ,I6;"enemy shipyards were overrun":A(I,14)=A(I,14)-I6
169 IF A(I,18)>2 THEN I6=INT((RND*A(I,18)+1)/2):PRINT ,I6"enemy nobles were summarily executed":A(I,18)=A(I,18)-I6
170 A(K,1)=A(K,1)+I5:A(I,1)=A(I,1)-I5:IF QF=1 THEN GOSUB 30:RETURN ELSE PRINT:PRINT,:INPUT"<ENTER>";Z:GOTO 129
171 GOSUB 300:LOCATE 7,34,0:PRINT"Battle over":PRINT
172 IF I=0 THEN PRINT,"All barbarian lands have been seized":PRINT,"The remaining barbarians fled":A(K,1)=A(K,1)+I5:A(K,15)=A(K,15)+I1:BA=0:IF QF=1 THEN GOSUB 30:RETURN ELSE INPUT"<ENTER>";Z:GOTO 129
173 PRINT,"The country of ";Z(I,1);" was overrun!":PRINT,"All enemy nobles were summarily executed!":PRINT:PRINT
174 PRINT" The remaining enemy soldiers were imprisoned.  All enemy serfs have pledged":PRINT" oaths of fealty to you, and should now be considered to be your people too."
176 PRINT" All enemy merchants fled the country.  Unfortunately, all enemy assets were"
177 PRINT" sacked and destroyed by your revengeful army in a drunken riot following the":PRINT" victory celebration."
178 IF IH=1 THEN IH=0:A(I,3)=I2
179 A(K,15)=I1+A(K,15):A(K,1)=A(K,1)+A(I,1):A(I,1)=0:A(I,0)=1:A(K,3)=A(K,3)+A(I,3):IF QF=1 THEN GOSUB 30:RETURN ELSE PRINT:INPUT"<ENTER>";Z:GOTO 129
180 IF A(K,0)<>0 THEN RETURN
181 IF A(K,11)>7 AND A(K,12)>3 AND A(K,16)>1 AND A(K,1)/A(K,3)>4.8 AND A(K,3)>2300 AND A(K,18)>10 THEN A(K,17)=3
182 IF A(K,11)>13 AND A(K,12)>5 AND A(K,13)>0 AND A(K,16)>5 AND A(K,1)/A(K,3)>5! AND A(K,3)>2600 AND A(K,18)>25 THEN A(K,17)=4
183 IF A(K,17)>3 AND A(K,16)>9 AND A(K,3)>3100 AND A(K,18)>40 THEN CLS:LOCATE 2,34:PRINT"Game over . . . ":PRINT,Z(K,5);" ";Z(K,0);" of ";Z(K,1);" wins  !":PRINT:PRINT:KK=1:GOSUB 20:GOTO 26
184 IF QF=1 THEN GOSUB 30: RETURN
185 GOTO 37
186 '
187 IF INT(RND*DS)>INT(RND*110) THEN GOSUB 32:PRINT ,Z(K,A(K,17));" ";Z(K,0);" of ";Z(K,1);" has been assassinated":PRINT,"by a crazed mother whose child had starved to death . . .":GOTO 194
188 IF RND>.01 THEN 95
189 ON INT(RND*4+1) GOTO 190,191,192,193
190 GOSUB 32:PRINT ,Z(K,A(K,17));" ";Z(K,0);" has been assassinated by an ambitious noble":GOTO 194
191 GOSUB 32:PRINT ,Z(K,A(K,17));" ";Z(K,0);" has been killed from a fall during the annual":PRINT,"fox-hunt.":GOTO 194
192 GOSUB 32:PRINT ,Z(K,A(K,17));" ";Z(K,0);" died of acute food poisoning.  The royal cook":PRINT,"was summarily executed.":GOTO 194
193 GOSUB 32:PRINT ,Z(K,A(K,17));" ";Z(K,0);" passed away this winter with a weak heart."
194 A(K,0)=1:PRINT:PRINT,"The other nation-states have sent representatives to the funeral.":GOSUB 30:GOSUB 30:RETURN
195 '
196 IF RND>.02 THEN 35
197 GOSUB 300:LOCATE 5,34,0:PRINT"P L A G U E ! ! !":PRINT
198 PRINT 0!"Black death has struck your nation.":PRINT
199 I=INT(RND*A(K,3)/2):A(K,3)=A(K,3)-I:PRINT ,I;"serfs died."
200 I=INT(RND*A(K,7)/3):A(K,7)=A(K,7)-I:PRINT ,I;"merchants died."
201 I=INT(RND*A(K,15)/3):A(K,15)=A(K,15)-I:PRINT ,I;"soldiers died."
202 I=INT(RND*A(K,18)/3):A(K,18)=A(K,18)-I:PRINT ,I;"nobles died.":GOSUB 30: GOSUB 30:GOTO 35
203 '
204 FOR Q=1 TO NP:IF A(Q,0)<>0 THEN NEXT Q:PRINT:GOTO 26
205 IF A(K,0)<>0 THEN RETURN
206 DS=0:GOSUB 300:LOCATE 12,22,0:PRINT"One moment -- ";Z(K,A(K,17));" ";Z(K,0);"'s turn . . .":FOR Q=1 TO 600:NEXT Q
207 IF RND<.01 THEN GOSUB 189:RETURN
208 Q2=0:Q3=0:Q4=0:Q5=0:Q6=0:Q7=0:Q8=0:Q9=0:Q0=0:QB=0:QC=0:QD=0
209 QP=0:FOR Q=1 TO NP:IF A(Q,0)<>0 THEN 212 ELSE QP=QP+1
210 Q2=A(Q,3)+Q2:Q3=A(Q,5)+Q3:Q4=A(Q,6)+Q4:Q5=A(Q,4)+Q5:Q6=A(Q,7)+Q6:Q7=A(Q,11)+Q7:Q8=A(Q,12)+Q8:Q9=A(Q,13)+Q9
211 Q0=A(Q,14)+Q0:QB=A(Q,16)+QB:QC=A(Q,18)+QC:QD=A(Q,19)+QD
212 NEXT Q
213 Q2=Q2/QP:Q3=Q3/QP:Q4=Q4/QP:Q5=Q5/QP:Q6=Q6/QP:Q7=Q7/QP:Q8=Q8/QP:Q9=Q9/QP:Q0=Q0/QP:QB=QB/QP:QC=QC/QP:QD=QD/QP
214 Q2=INT(Q2+INT(RND*200+1)-INT(RND*200+1)):Q3=INT(Q3+INT(RND*1000+1)-INT(RND*1000+1)):Q4=Q4+RND-RND:Q5=INT(Q5+INT(RND*1500+1)-INT(RND*1500+1)):Q6=INT(Q6+INT(RND*25+1)-INT(RND*25+1)):IF Q4<0 THEN Q4=0:GOTO 214
215 Q7=INT(Q7+INT(RND*4+1)-INT(RND*4+1)):Q8=INT(Q8+INT(RND*2+1)-INT(RND*2+1)):IF RND>.3 THEN 217 ELSE Q9=INT(Q9+INT(RND*2+1)-INT(RND*2+1)):Q0=INT(Q0+INT(RND*2+1)-INT(RND*2+1)):IF RND>.5 THEN 217
216 QB=INT(QB+INT(RND*2+1)-INT(RND*2+1)):QC=INT(QC+INT(RND*2+1)-INT(RND*2+1))
217 A(K,3)=Q2:IF Q3>A(K,5) AND INT(RND*9+1)>6 THEN A(K,5)=Q3:A(K,6)=Q4:IF NW<3 THEN A(K,6)=A(K,6)+RND/1.5
218 A(K,4)=Q5:IF Q6>A(K,7) THEN A(K,7)=Q6
219 IF Q7>A(K,11) THEN A(K,11)=Q7
220 IF Q8>A(K,12) THEN A(K,12)=Q8
221 IF Q9>A(K,13) THEN A(K,13)=Q9
222 IF Q0>A(K,14) THEN A(K,14)=Q0
223 IF QB>A(K,16) THEN A(K,16)=QB
224 IF QC>A(K,18) THEN A(K,18)=QC
225 A(K,15)=10*A(K,18)+INT(RND*10*A(K,18)+1):IQ=0
226 IF A(K,15)/Q2>A(K,13)*.01+.05 THEN A(K,15)=A(K,15)/2:GOTO 226
227 A(K,19)=QD:QF=1:GOSUB 180:QF=0
228 Q=INT(RND*NP+1):IF A(Q,0)<>0 OR Q=K THEN 228
229 IF A(Q,5)<1 THEN 234
230 W=A(Q,5):IF W>32767 THEN W=32767
231 QR=INT(RND*W+1):IF QR*A(Q,6)<A(K,4) THEN 233
232 IF INT(RND*9+1)>3 THEN 230 ELSE 234
233 A(Q,4)=A(Q,4)+QR*A(Q,6)*.9:A(Q,5)=A(Q,5)-QR
234 IF INT(RND*9+1)<2 THEN RETURN
235 IF NY<3 THEN I=0:IF BA<0 THEN RETURN ELSE 237
236 I=INT(RND*6+1):IF I=K OR A(I,0)<>0 THEN 236
237 QF=1:I1=INT(RND*A(K,15)+1):GOSUB 140:QF=0:IQ=IQ+1:IF A(K,15)>30 AND IQ<A(K,18)/4 THEN 234
238 RETURN
239 GOSUB 300:DEFINT O:DEFSTR Z:LOCATE 12,18:INPUT"Give reading speed (1 = fast, 100 = very slow)";S:LOCATE ,,0
240 K=0:READ Z1:L=LEN(Z1)
241 K=K+1:IF K>L THEN 240
242 Z=MID$(Z1,K,1)
243 IF Z="*" THEN FOR I=1 TO 6000:NEXT I:GOTO 241
244 IF Z="@" THEN GOSUB 300:LOCATE 5,1:PRINT "         ";:GOTO 241
245 IF Z=">" THEN LOCATE ,,1:GOTO 3
246 IF Z="/" THEN PRINT:PRINT"         ";:GOTO 241
247 PRINT Z;: FOR Q=1 TO S:NEXT Q:GOTO 241
248 DATA "@   Hello!    Welcome to E M P I R E . . .*//Imagine yourself to be the ruler of a small, unimportant piece/of European land way back in the medieval ages.  Your country is/beset by many problems - no industry, little trade, small army"
249 DATA ",/underpopulation, angry neighbors, plague, and all the other/day-to-day problems a capable leader must learn to face.  Am-/bitious by necessity, you must acquire land, capital, and an/"
250 DATA "army just to survive.  Because of the short lifetimes back then,/you'll have only a limited amount of time to build your coun-/try into an empire./"
251 DATA "/   Competent rule will gradually be rewarded with lofty titles -/Knight, Prince, King, and finally -- Emperor --*@"
252 DATA "   Sounds easy?  Then consider this - five other city-states are/also struggling to become the emperor, and they don't just in-"
253 DATA "/tend to passively watch you win.  They control armies which can/attack at a moments notice, and perhaps devastate your country./"
254 DATA "They control the grain market, and if you think OPEC is bad,/just wait and see how scarce and expensive grain can become./"
255 DATA "   Of course, a competent ruler could make a killing on the/grain market.  With proper planning, your harvests should be/plentiful.  You could solve overpopulation problems by raising a/"
256 DATA "large army to be killed off in battle./   Nevertheless, your overriding concern should be lebensraum -/living room.  There is only a limited amount of land to be con-/quered.  If you can defeat the barbarian hordes, and the well-/"
257 DATA "trained standing armies of the other nations, and then defeat/their peasant militias, perhaps you may attain the well deser-/ved title of Emperor.*@"
258 DATA "Taxes:/   The customs tax applies only to immigrants to your nation./Often, lower customs tax means more immigrants./   The sales tax is closely intertwined into your capitalist/economy.  While it has the potential of raising lots of money,"
259 DATA "/overly high taxes tend to stifle industrial profits./   Income taxes are paid by all inhabitants and industry.  Again,/lower income tax often means increased industrial output."
260 DATA "//   You have the option each year to invest your earnings in/different types of trade and industry.  In the years to follow,/these investments, if managed correctly, will more than pay/for themselves.*@"
261 DATA "Types of investments://   Marketplaces are a relatively cheap investment that are quite/profitable because they encourage the formation of a middle/class - the merchants.  And, as you are probable aware, the/"
262 DATA "middle class pays an inordinate share of taxes./   Grain mills are necessary to process the harvest, and con-/sequently, usually do quite well when there is a large harvest./"
263 DATA "   Foundries are necessary for the creation of large armies./Several of them will allow you to equip a much larger army/than otherwise./"
264 DATA "   Shipyards have the greatest profit potential of all invest-/ments.  Because of a larger volume of orders during good wea-/ther, there is often a better return during these years.*@"
265 DATA "   Armies are never a profitable investment.  Besides costing/a large initial investment, they also cost a lot to maintain/and train.  In addition, they also require a greater fraction/of the harvest than serfs./"
266 DATA "   Of course, one should give himself the luxury of building a/palace.  What else could distinguish an emperor from all the/other kings with their castles, than a palace?  Also, with a/"
267 DATA "palace, your country wil begin to attract more nobles.//Other general hints:/   You always lose 10% as a brokerage fee when dealing on the/grain market.  When you sell your grain at different prices,/"
268 DATA "the market price is the weighted average of the sales prices/(this helps to prevent large yearly price fluctuations).  To/prevent those unscrupulous rulers who try to use the market as/"
269 DATA "a method to avoid the rats, you can't buy back your own grain.*@   Also, leave a portion of your grain reserve for planting for/next year's harvest./"
270 DATA "   Often, it is beneficial to feed your people much more than they/require.  Immigrants are usually attracted to a prosperous nat-/ion, and somtimes, even merchants and nobles move in./"
271 DATA "//   Up to six people can play this game.  Rulers not played by/humans will be played by the computer, with its playing abil-/ity based on the average of the human players.*@"
272 DATA "Winning://   To become a prince, you must pass these rather stringent/qualifications: 8 marketplaces, 4 mills, palace 20% completed,/a land-over-serf ratio of 4.8, over 10 nobles, and over 2300 serfs./"
273 DATA "/   To become a king, you must have: 14 marketplaces, 6 mills,/palace 60% completed, 1 foundry, land-over-serf ratio of at/least 5.0, over 2600 serfs and 25 nobles.//"
274 DATA "   To become an ' EMPEROR ' you must meet all of the above qual-/ififications, and ... over 3100 serfs and 40 nobles.//"
275 DATA "-- Good Luck, future rulers.*>"
276 DATA Montaigne,Auveyron,Chevalier,Prince,Roi,Empereur,francs,Arthur,Brittany,Sir,Prince,King,Emperor,francs
277 DATA Munster,Bavaria,Ritter,Prinz,Konig,Kaiser,marks,Khotan,Quatara,Hasid,Caliph,Sheik,Shah,dinars
278 DATA Ferdinand,Barcelona,Caballero,Principe,Rey,Emeradore,peseta,Hjodolf,Svealand,Riddare,Prins,Kung,Kejsare,krona
300 COLOR 15,1:CLS:RETURN

