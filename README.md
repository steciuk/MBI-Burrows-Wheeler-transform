# MBI

## Uruchomienie aplikacji

### W trybie deweloperskim

1. Zainstaluj [Node.js](https://nodejs.org/)
2. W głównym folderze projektu (w folderze, w którym znajduje się plik `package.json`) zainstaluj wszystkie wymagane zależności projektu używając polecenia:

   ```
   npm install
   ```

3. Używając polecenia:
   ```
   npm start
   ```
   uruchom aplikację w trybie deweloperskim. Skrypt automatycznie otworzy domyślną dla systemu przeglądarkę internetową i otworzy aplikację pod adresem http://localhost:3000/. Zostanie rozpoczęte nasłuchiwanie na zmiany w kodzie źródłowym i automatyczne odświeżanie treści wyświetlanej strony.

### W trybie produkcyjnym

1. Zainstaluj [Node.js](https://nodejs.org/)
2. W głównym folderze projektu (w folderze, w którym znajduje się plik `package.json`) zainstaluj wszystkie wymagane zależności projektu używając polecenia:

   ```
   npm install
   ```

3. Używając polecenia:
   ```
   npm run build
   ```
   zbuduj aplikację. W folderze `./build` znajdą się wszystkie statyczne pliki wymagane do poprawnego działania aplikacji.
4. Uruchom w przeglądarce internetowej plik `./build/index.html`.

### Uruchomienie [pliku type-script](src/model/main.ts) w `src/model/main.ts`

4. Naciśnij `Ctrl`+`Shift`+`B` aby zbudować aplikację
5. Naciśnij `F5` aby uruchomić
