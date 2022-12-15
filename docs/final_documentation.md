# Dokumentacja projektowa

## Cel

Celem niniejszego projektu było stworzenie aplikacji pozwalającej zrozumieć działanie algorytmu transformaty Burrowsa-Wheelera i procesu do niej odwrotnego. Aplikacja umożliwia wprowadzenie własnych danych i pozwala na śledzenie (krok po kroku) sposobu wykonywania obliczeń.

## Opis algorytmu transformaty Burrowsa-Wheelera

Jest to algorytm w uproszczeniu służący do transformacji danego łańcucha tekstowego w łańcuch składający się z tych samych znaków ale w zmienionej kolejności. Omawiana transformata, pozwala niewielkim kosztem, znacznie zwiększyć efektywność bezstratnej kompresji danych i jest ona z reguły stosowana na samym początku, przed właściwym procesem kompresji. Jest to spowodowane tym, że dla powtarzających się ciągów znaków w łańcuchu, wynik transformaty będzie zawierał kilka miejsc, w których te same znaki będą znajdować się obok siebie, co z kolei pozwala na efektywniejszą kompresję innymi sposobami.

Jedną z najważniejszych cech tej transformaty jest fakt, że może byc ona odwrócona, małymi kosztami obliczeniowymi, oraz małym narzutem pamięciowym (związanym z koniecznością przechowania indeksu, pod którym znajduje się oryginalny tekst w tablicy posortowanych rotacji).

## Opis aplikacji

Opisywana aplikacja jest aplikacją webową. Pozwala ona na wykonanie algorytmu krok po kroku, ale także na uruchomienie algorytmu i natychmiastowe zwrócenie wyniku. Użytkownik może wybrać sposób działania algorytmu (krok po kroku lub bezpośredni wynik) za pomocą odpowiednich przycisków w interfejsie graficznym aplikacji takich jak:

- "Następny krok" ("Next step")
- "Oblicz i pokaż wynik" ("Compute and show result")

Tabele ukazujące obliczenia pośrednie są wyświetlane niezależnie od wybranego sposobu wykonywania algorytmu.

Po zwróceniu wyniku transformaty Burrowsa-Wheelera, aplikacja pozwala na wykonanie odwrotnej transformaty przez wyświetlenie dodatkowych przycisków i stosowną informację w interfejsie graficznym aplikacji. W tym kroku użytkownik może również wybrać sposób wykonania algorytmu używając takich samych przycisków j. w.

## Dane techniczne

- Aplikacja powstała z użyciem biblioteki _React_.
- W projekcie wykorzystany został język _TypeScript_.
- Testy jednostkowe zostały stworzone z wykorzystaniem biblioteki _Jest_.
- Testy End-To-End, ze względu na małe skomplikowanie architektury aplikacji zostały przeprowadzone w sposób manualny.
- Aplikacja została pozytywnie przetestowana przy użyciu serwisu [BrowserStack](https://www.browserstack.com/), w celu sprawdzenia poprawnego działania w różnych przeglądarkach internetowych oraz na różnych urządzeniach i systemach operacyjnych.

## Testy jednostkowe i manualne

Testy jednostkowe skupiają się na testowaniu poprawnego działania algorytmu oraz algorytmu odwrotnego. Ich celem jest sprawdzenie czy dla zadanych ciągów wejściowych algorytmu otrzymywany jest oczekiwany rezultat. Wszystkie testy jednostkowe można uruchomić za pomocą komendy:

```
npm run test
```

w głównym katalogu projektu.

W projekcie nie zostały zaimplementowane automatyczne testy interfejsu użytkownika, a także testy end-to-end. Było to spowodowane dość wysokim kosztem ich zaimplementowania i utrzymania, a także tym, że projekt nie jest aż tak skomplikowany, żeby wymagał takowych testów. Wszystkie testy end-to-end zostały zatem wykonane przez twórców aplikacji w sposób manualny. Podczas przeprowadzania testów stwierdzono poprawność działania aplikacji.

## Dane techniczne projektu

- Na projekt poświęcono łącznie około 60h,
- stworzono 17 testów jednostkowych,
- pokrycie metod testami jednostkowymi wynosi 75%,
- stworzono następującą liczbę plików i linii kodu:

Łącznie: 32 plików, 1322 linii kodu

| Typ pliku          | Liczba plików | Liczba linii kodu |
| :----------------- | ------------: | ----------------: |
| TypeScript React   |            10 |               694 |
| TypeScript         |            11 |               223 |
| Markdown           |             3 |               217 |
| JSON with Comments |             3 |               106 |
| CSS                |             4 |                64 |
| HTML               |             1 |                18 |
