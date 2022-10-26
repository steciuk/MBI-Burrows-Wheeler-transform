# Koncepcja realizacji projektu

## Cel

Aplikacja taka pozwala zrozumieć działanie algorytmu transformaty Burrowsa-Wheelera i procesu do niej odwrotnego. Użytkownik może wprowadzić własne dane i śledzić (krok po kroku) sposób wykonywania obliczeń. Przykłady aplikacji są dostępne na stronie przedmiotu. Aplikacja powinna wykonywać się na przeglądarce www, będzie umieszczona na serwerze elektron (elka), nie używamy bazy danych, aplikacja jest zbiorem statycznych plików, które wykonują się po stronie klienta w przeglądarce www, sugerowane języki programowania to JavaScript + HTML5.

## Założenia dotyczące stosu technologicznego projektu

- Aplikacja powstanie z użyciem biblioteki _React_.
- Wykorzystanym w projekcie językiem programowania będzie _TypeScript_.
- Zostaną stworzone testy jednostkowe z wykorzystaniem biblioteki _Jest_.
- Testy End-To-End, ze względu na małe skomplikowanie architektury aplikacji zostaną przeprowadzone w sposób manualny, zgodnie z wcześniej zdefiniowanymi scenariuszami.
- Aplikacja zostanie przetestowana przy użyciu serwisu [BrowserStack](https://www.browserstack.com/), w celu sprawdzenia poprawnego działania w różnych przeglądarkach internetowych oraz na różnych urządzeniach i systemach operacyjnych.

## Konfiguracja środowiska developerskiego

- Projekt będzie tworzony z wykorzystaniem _Visual Studio Code_.
- W projekcie zostanie skonfigurowany linter _ESlint_ dbający o spójność składniową oraz pomagający z wyprzedzeniem znajdować błędy w kodzie źródłowym.
- W projekcie zostanie skonfigurowane ustawienia automatycznego formatowania kodu źródłowego przy wykorzystaniu rozszerzenia _Prettier_. Takie rozwiązanie pozwoli zachować spójność stylu tworzonego kodu źródłowego w obszarze całego projektu.

## Plan rozwiązania

TODO: Opisać

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
   uruchom aplikację w trybie deweloperskim. Skrypt automatycznie otworzy domyślną dla systemu przeglądarkę internetową i uruchomi aplikację pod adresem http://localhost:3000/. Zostanie uruchomione nasłuchiwanie na zmiany w kodzie źródłowym i automatyczne odświeżanie treści wyświetlanej strony.

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
