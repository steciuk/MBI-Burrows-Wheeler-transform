# Dokumentacja projektowa

## Cel

Celem niniejszego projektu było stworzenie aplikacji pozwalającej zrozumieć działanie algorytmu transformaty Burrowsa-Wheelera i procesu do niej odwrotnego. Aplikacja umożliwia wprowadzenie własnych danych i pozwala na śledzenie (krok po kroku) sposobu wykonywania obliczeń.

## Decyzje projektowe

- Aplikacja powstała z użyciem biblioteki _React_.
- W projekcie wykorzystany został język _TypeScript_.
- Testy jednostkowe zostały stworzone z wykorzystaniem biblioteki _Jest_.
- Aplikacja powstałą mając na uwadze urządzenia mobilne i poprawnie wyświetla się na małych ekranach.

## Opis działania aplikacji

Opisywana aplikacja jest aplikacją przeglądarkową. Po uruchomieniu aplikacji wyświetlany jest nagłówek oraz cztery karty nawigacyjne:

- **ABOUT BWT** (domyślnie aktywna) - zawiera krótki opis transformaty.
- **BWT** - panel pozwalający na przeprowadzenie transformaty.
- **IBWT** - panel pozwalający na przeprowadzenie transformaty odwrotnej.
- **INFO** - panel zawierający krótkie informacje o projekcie.

### Panel **BWT**

Po przejściu do tego panelu, widoczne jest tekstowe pole formularza, domyślnie wypełnione przykładowym tekstem oraz dwa przyciski. Jeden pozwalający wyczyścić pole formularza, drugi - zatwierdzający podaną wartość.

Pole formularza oraz przyciski odpowiednio reagują na wartość podaną przez użytkownika:

| Zawartość pola                                 |               Błąd w polu               | Przycisk czyszczący pole | Przycisk zatwierdzający |
| ---------------------------------------------- | :-------------------------------------: | :----------------------: | :---------------------: |
| puste                                          |                  brak                   |        nieaktywny        |       nieaktywny        |
| min. 1 i max. 29 znaków ASCII                  |                  brak                   |         aktywny          |         aktywny         |
| przynajmniej 1 znak nie ASCII i max. 29 znaków |       "Input must be ASCII only"        |         aktywny          |       nieaktywny        |
| więcej niż 29 znaków                           | "Input must be less than 30 characters" |         aktywny          |       nieaktywny        |

Po zatwierdzeniu wartości wartości pola, przez użytkownika, poprzednie przyciski zastępowane są 4 przyciskami pozwalającymi kolejno na:

- przejście do pierwszego kroku wizualizacji (nieaktywny, gdy obecnym krokiem jest krok pierwszy),
- przejście do poprzedniego kroku wizualizacji (nieaktywny, gdy obecnym krokiem jest krok pierwszy),
- przejście do kolejnego kroku wizualizacji (nieaktywny, gdy obecnym krokiem jest krok ostatni),
- przejście do ostatniego kroku wizualizacji (nieaktywny, gdy obecnym krokiem jest krok ostatni).

Poniżej wyświetlane są dwa obszary, po lewej - opis obecnego i poprzednich kroków wizualizacji, a po prawej - sama wizualizacja. Nawigacja między krokami odpowiednio aktualizuje stany opisu kroków i wizualizacji.

Wizualizacja polega na stopniowym wypełnianiu tabeli odpowiednimi wartościami.

Po nawigacji do ostatniego kroku, wyświetlany jest wynik transformaty oraz dodatkowo przycisk **INVERT BWT**, pozwalający od razu przejść do transformaty odwrotnej dla otrzymanych rezultatów.

Edycja pola w trakcie trwania wizualizacji przywraca stan panelu do momentu z przed zatwierdzenia wartości wejściowej.

### Panel **INVERSE BWT**

Po przejściu do tego panelu, widoczne są dwa tekstowe pole formularza, domyślnie wypełnione przykładowymi wartościami oraz dwa przyciski. Jeden pozwalający wyczyścić pole formularza, drugi - zatwierdzający podaną wartość.

Pole formularza oraz przyciski odpowiednio reagują na wartość podaną przez użytkownika:

| Zawartość pola BWT result                      |               Błąd w polu               |
| ---------------------------------------------- | :-------------------------------------: |
| puste                                          |                  brak                   |
| min. 1 i max. 29 znaków ASCII                  |                  brak                   |
| przynajmniej 1 znak nie ASCII i max. 29 znaków |       "Input must be ASCII only"        |
| więcej niż 29 znaków                           | "Input must be less than 30 characters" |

| Zawartość pola BWT result                                                               |                    Błąd w polu                    |
| --------------------------------------------------------------------------------------- | :-----------------------------------------------: |
| puste                                                                                   |                       brak                        |
| dodatnia całkowita wartość liczbowa, mniejsza od długości zawartości pola BWT result    |                       brak                        |
| dodatnia całkowita wartość liczbowa, niemniejsza od długości zawartości pola BWT result | "Index must be less than the length of the input" |
| wartość niebędąca dodatnią i całkowitą liczbą                                           |        "Index must be a positive integer"         |

| Stany pól                                              | Przycisk czyszczący pole | Przycisk zatwierdzający |
| ------------------------------------------------------ | :----------------------: | :---------------------: |
| obydwa puste                                           |        nieaktywny        |       nieaktywny        |
| obydwa pola bez błędów i niepuste                      |         aktywny          |         aktywny         |
| jedno pole puste lub w błąd w przynajmniej jednym polu |         aktywny          |       nieaktywny        |

Po zatwierdzeniu wartości, panel działa analogicznie do panelu **BWT**.

## Testy jednostkowe i manualne

Testy jednostkowe skupiają się na testowaniu poprawnego działania algorytmu oraz algorytmu odwrotnego. Ich celem jest sprawdzenie czy dla zadanych ciągów wejściowych algorytmu otrzymywany jest oczekiwany rezultat. Wszystkie testy jednostkowe można uruchomić za pomocą komendy:

```
npm run test
```

w głównym katalogu projektu.

W projekcie nie zostały zaimplementowane automatyczne testy end-to-end. Było to spowodowane dość wysokim kosztem ich zaimplementowania i utrzymania, a także tym, że projekt nie jest aż tak skomplikowany, żeby wymagał takowych testów.

Wszystkie testy end-to-end zostały zatem wykonane przez twórców aplikacji w sposób manualny przy wykorzystaniu serwisu [BrowserStack](https://www.browserstack.com/) do zweryfikowania poprawności działania w różnych przeglądarkach internetowych oraz na różnych urządzeniach i systemach operacyjnych.

Podczas przeprowadzania testów stwierdzono poprawność działania aplikacji na systemach operacyjnych/urządzeniach/przeglądarkach:

- Windows 10 - Edge 108, Firefox 107, Chrome 108, Opera 93
- MacOS Ventura - Safari 16, Firefox 107, Chrome 108, Opera 93
- iOS - iPhone 14 - Safari
- android - Samsung Galaxy S22 - Chrome, Firefox, Samsung Internet

## Statystyki projektu

| Typ pliku            |        Liczba plików |       Liczba linii kodu |
| :------------------- | -------------------: | ----------------------: |
| TypeScript / TSX     |                   21 |                     917 |
| CSS                  |                    4 |                      64 |
| HTML                 |                    1 |                      18 |
| -------------------- | -------------------- | ----------------------- |
| Łącznie              |                   26 |                     999 |

W powyższych statystykach pominięte zostały pliki konfiguracyjne projektu oraz ta dokumentacja.

- Na projekt poświęcono łącznie około 40h,
- stworzono 17 testów jednostkowych,
- pokrycie funkcji testami jednostkowymi wynosi 75%.
