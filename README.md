\# UppgiftslistaMobile



Mobilapp byggd med Expo/React Native som visar samma uppgiftslista som webbappen, via samma backend.



\## Teknik

\- Expo / React Native

\- React Navigation (stack-navigation mellan lista och detaljvy)



\## Funktioner

\- Lista uppgifter, hämtade från samma backend som webbappen

\- Detaljvy per uppgift (titel, status, ID, ev. bifogad fil)

\- Navigation mellan listan och detaljvyn



\## Komma igång



Detta projekt kräver att backend körs samtidigt (se \[UppgiftslistaApi](https://github.com/Hamzeosman/UppgiftslistaApi)).



\### 1. Starta backend



```

git clone https://github.com/Hamzeosman/UppgiftslistaApi.git

cd UppgiftslistaApi

dotnet restore

dotnet watch run --urls http://0.0.0.0:5277

```



> \*\*OBS:\*\* `--urls http://0.0.0.0:5277` krävs så att mobilenheten kan nå API:et över nätverket, inte bara datorn själv.



\### 2. Starta mobilappen



```

git clone https://github.com/Hamzeosman/UppgiftslistaMobile.git

cd UppgiftslistaMobile

npm install

npx expo start

```



Skanna QR-koden med Expo Go-appen på telefonen (samma WiFi-nätverk som datorn krävs).



> \*\*OBS:\*\* `API\_URL` i `screens/ListScreen.js` och `screens/DetailScreen.js` pekar på en specifik nätverks-IP (t.ex. `192.168.1.82`). Om din IP skiljer sig, uppdatera den till din dators egen IPv4-adress (kolla med `ipconfig`).



\## Struktur

```

UppgiftslistaMobile/

├── App.js               – navigation-uppsättning

├── screens/

│   ├── ListScreen.js     – listvy

│   └── DetailScreen.js   – detaljvy

└── README.md

```



\## Status

Klart: lista, detaljvy, navigation, datahämtning från samma backend som webbappen.

